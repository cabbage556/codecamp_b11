// const express = require('express') // 예전 방식 => commonjs 방식
import express from "express"; // 요즘 방식 => module 방식

import { checkPhone, getToken } from "./phone.js"; // export 가져오기
import sendTokenToSMS from "./phone.js"; // export default 가져오기
import {
  checkEmail,
  createWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import mongoose from "mongoose";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const app = express();

// 예전 방식 => bodyParser 사용
// express 프레임워크는 기본적으로 json 형태를 지원하지 않음
// 요청 body에 들어오는 json 데이터를 express가 해석할 수 있게 해주는 코드
app.use(express.json());

// cors 적용
// 모든 origin에서 들어오는 요청 허용
app.use(cors());

// 모든 HTTP 메서드에서 동작하는 API
// endpoint => /api-docs
// API 설명 페이지 반환
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", function (req, res) {
  // 1. DB에 접속 후, 데이터 조회 => 데이터를 조회했다고 가정
  const result = [
    // 게시글 세 줄
    {
      number: 1,
      writer: "철수",
      title: "제목입니다~",
      contents: "내용이에요!",
    },
    { number: 2, writer: "영희", title: "영희입니다~", contents: "영이에요!" },
    { number: 3, writer: "훈이", title: "훈이입니다~", contents: "훈이에요!" },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result);
});

app.post("/boards", function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("-------------------⭐️");
  console.log(req.body);

  // 2. DB에 접속 후, 데이터 저장 => 데이터를 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
  const { phoneNumber } = req.body;

  // 1. 휴대폰번호 자릿수 확인 (10~11자리)
  const isValid = checkPhone(phoneNumber);
  if (!isValid) {
    res.send("인증 실패!!!");
  }

  // 2. 토큰 6자리 생성
  const myToken = getToken();

  // 3. 휴대폰번호로 토큰 6자리 전송
  sendTokenToSMS(phoneNumber, myToken);

  res.send("인증 완료!!!");
});

// 회원가입 API - POST
app.post("/users", (req, res) => {
  // req.body: POST 요청 body 데이터
  const { name, age, school, email } = req.body;

  // 1. 이메일이 정상인지 확인하기 (존재여부, "@" 포함여부)
  if (!checkEmail({ email })) return;

  // 2. 가입환영 템플릿 만들기
  const welcomeTemplate = createWelcomeTemplate({
    name,
    age,
    school,
  });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail({ name, email, welcomeTemplate });

  res.send("가입 완료!");
});

// my-database: mongodb 컨테이너 이름(docker-compose.yaml에서 확인 가능) => 네임리졸루션
mongoose
  .connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("mongoDB 접속 성공!!!⭐️⭐️⭐️"))
  .catch(() => console.log("mongoDB 접속 실패!!!❗️❗️❗️"));

// 4000 => 포트번호
// listen => API 요청을 기다린다.
app.listen(4000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!⭐️⭐️⭐️");
});
