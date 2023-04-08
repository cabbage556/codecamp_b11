import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getToken, checkPhone, sendTokenToSMS } from "./phone.js";
//swagger   docs에 나올 내용
const typeDefs = `#graphql
    input CreateBoardInput{
      writer: String
      title: String
      contents: String

    }

   

    type MyResult{
      number: Int
      writer: String
      title: String
      contents: String
    }

    type Query {
        fetchBoards : [MyResult]  
    }

    type Mutation {
      #createBoard(writer: String, title: String, contents: String): String
      createBoard(createBoardInput: CreateBoardInput!): String
      createTokenOfPhone(numberInput: String!) : String

    }
    

  `;
//
const resolvers = {
  Query: {
    fetchBoards: (parent, args, context, info) => {
      // 1. db에 접속후, 데이터조회 => 아직 db안배웠으므로 조회했다고 가정
      // boards이므로 목록조회 => 배열로

      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다~~",
          contents: "내용입니다",
        },
        { number: 2, writer: "영희", title: "영희다", contents: "내용임" },
        { number: 3, writer: "훈이", title: "훈이다", contents: "내용이다" },
      ];
      return "result";
    },
  },

  // context안에 res,req들어옴, args보통사용, info기타정보
  // args다음 context,info안쓰면 안써줘도됨. but  parent는 써줘야(아니면 언더바(_) 써주면됨 )
  //ex) createBoard: (parent, args, context, info)를 밑에코드로
  Mutation: {
    createBoard: (_, args) => {
      // 1. 브라우저에서 보내준 데이터 확인하기
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);

      // 2. db에 접속후, 데이터를 저장  => 데이터저장했다고 가정

      // 3. db에 저장된 결과를 브라우저에 응답(response)로 주기
      return "게시물 등록에 성공하였습니다.";
    },

    //과제) 아래 api작동되게 - 힌트 1. phone.js  2. req/res 부분  3. 타입작성
    createTokenOfPhone: (_, args) => {
      let myPhone = args.numberInput;
      const isValid = checkPhone(myPhone);
      if (isValid === false) return "번호잘못됨";

      // 2번 함수
      const myToken = getToken();

      // 3번 함수
      sendTokenToSMS(myPhone, myToken);

      // const result = {
      //   phoneNumber: myPhone,
      //   token: myToken,
      // };
      const result = myToken;

      return result;
    },
  },
};

const server = new ApolloServer({
  // typeDefs: typeDefs,
  // resolvers: resolvers,
  // 키,벨류 같으므로 생략가능 (shorthand property)
  typeDefs,
  resolvers,

  cors: true, //모든 사이트 허용하고 싶을때
  // cors: {origin: ["https://naver.com", "https://daum.net"]}  // 특정 사이트만 지정하고 싶을 때
});

// let { url } = await startStandaloneServer(server);
// console.log(url);
startStandaloneServer(server);

//포트 4000
// listen이랑 같은 기능
