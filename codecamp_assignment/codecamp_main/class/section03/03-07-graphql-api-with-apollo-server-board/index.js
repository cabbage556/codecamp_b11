import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { checkPhone, getToken } from "./phone.js";
import sendTokenToSMS from "./phone.js";

// api docs
// api를 만들면 docs를 만들어야 정상 동작함
const typeDefs = `#graphql
  type MyResult {
    number: Int
    writer: String
    title: String
    contents: String
  }

  # input 타입은 input으로 작성해야 함
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: MyResult # 객체 1개를 의미함
    fetchBoards: [MyResult] # 배열 안에 객체 1개 이상을 의미함
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String
    createBoard(createBoardInput: CreateBoardInput!): String
    createTokenOfPhone(phoneNumber: String): String
  }
`;

// graphql api
const resolvers = {
  Query: {
    fetchBoards: (parent, args, context, info) => {
      // 1. DB에 접속 후, 데이터 조회 => 데이터를 조회했다고 가정
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다~",
          contents: "내용이에요!",
        },
        {
          number: 2,
          writer: "영희",
          title: "영희입니다~",
          contents: "영이에요!",
        },
        {
          number: 3,
          writer: "훈이",
          title: "훈이입니다~",
          contents: "훈이에요!",
        },
      ];

      // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
      return result;
    },
  },
  Mutation: {
    createBoard: (parent, args, context, info) => {
      // `parent` : 부모 타입 resolver에서 반환된 결과를 가진 객체
      // `args` : 쿼리 요청 시 전달된 parameter를 가진 객체
      // `context` : GraphQL의 모든 resolver가 공유하는 객체로서 로그인 인증, 데이터베이스 접근 권한 등에 사용
      // `info` : 명령 실행 상태 정보를 가진 객체

      // 1. 브라우저에서 보내준 데이터 확인하기
      console.log(args.createBoardInput);

      // 2. DB에 접속 후, 데이터 저장 => 데이터를 저장했다고 가정

      // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
      return "게시물 등록에 성공하였습니다!";
    },

    // 1) phone.js    2) req/res    3) 타입 작성
    createTokenOfPhone: (_, args) => {
      const { phoneNumber } = args;

      // 1. 휴대폰번호 자릿수 확인 (10~11자리)
      const isValid = checkPhone(phoneNumber);
      if (!isValid) return;

      // 2. 토큰 6자리 생성
      const myToken = getToken();

      // 3. 휴대폰번호로 토큰 6자리 전송
      sendTokenToSMS(phoneNumber, myToken);

      return "인증 완료!!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs, // shorthand-property
  resolvers, // shorthand-property
  cors: true, // 모든 사이트 cors 허용하고 싶을 때
  // cors: {origin: ["http://naver.com", "http://daum.net"]} // 특정 사이트만 cors 허용하고 싶을 떄
});

startStandaloneServer(server); // 포트: 4000
