import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";

import { checkPhone, getToken } from "./phone.js";
import sendTokenToSMS from "./phone.js";
import {
  checkEmail,
  createWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";

import cors from 'cors'
import mongoose from 'mongoose';

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// 회원목록 조회 API
app.get("/users", function (req, res) {
  const users = [
    {
      email: "123@gmail.com",
      name: "아무개1",
      phone: "01012345678",
      personal: "111111-222222",
      prefer: "https://naver.com",
    },
    {
      email: "456@gmail.com",
      name: "아무개2",
      phone: "01091234567",
      personal: "222222-333333",
      prefer: "https://kakao.com",
    },
    {
      email: "789@gmail.com",
      name: "아무개3",
      phone: "01001234567",
      personal: "333333-444444",
      prefer: "https://youtube.com",
    },
    {
      email: "101112@gmail.com",
      name: "아무개4",
      phone: "01098765432",
      personal: "555555-666666",
      prefer: "https://netflix.com",
    },
    {
      email: "131415@gmail.com",
      name: "아무개5",
      phone: "01087654321",
      personal: "777777-888888",
      prefer: "https://instagram.com",
    },
  ];

  res.send(users);
});

// 커피목록 조회 API
app.get("/starbucks", (req, res) => {
  const coffeeArray = [
    { name: "아메리카노", kcal: 5 },
    { name: "에스프레소", kcal: 3 },
    { name: "디카페인 아메리카노", kcal: 5 },
    { name: "투샷 아메리카노", kcal: 5 },
    { name: "쓰리샷 아메리카노", kcal: 5 },
    { name: "포샷 아메리카노", kcal: 5 },
    { name: "파이스샷 아메리카노", kcal: 5 },
    { name: "에스프레소 투샷", kcal: 5 },
    { name: "에스프레소 쓰리샷", kcal: 5 },
    { name: "카페모카", kcal: 300 },
  ];

  res.send(coffeeArray);
});

// 휴대폰 인증 토큰 발급 API
app.post("/tokens/phone", (req, res) => {
  // app.use(express.json()); 작성 여부 확인!!
  const { phoneNumber } = req.body;

  // 1. 휴대폰번호 자릿수 확인 (10~11자리)
  if (!checkPhone(phoneNumber)) {
    res.send("인증 실패!!!");
  }

  // 2. 토큰 6자리 생성
  const myToken = getToken();

  // 3. 휴대폰번호로 토큰 6자리 전송
  sendTokenToSMS(phoneNumber, myToken);

  res.send("인증 완료!!!");
});

// 회원가입 API
app.post("/users", (req, res) => {
  // req.body: POST 요청 body 데이터
  const { name, phoneNumber, favoriteSite, email } = req.body;

  // 1. 이메일이 정상인지 확인하기 (존재여부, "@" 포함여부)
  if (!checkEmail({ email })) res.send("가입 실패!");

  // 2. 가입환영 템플릿 만들기
  const welcomeTemplate = createWelcomeTemplate({
    name,
    phoneNumber,
    favoriteSite,
  });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail({ name, email, welcomeTemplate });

  res.send("가입 완료!");
});

mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 성공하였습니다."))

app.listen(4000)