// const express = require('express') // 옛날방식 => commonjs
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";

import express from "express"; // 요즘방식 => module

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

import cors from "cors";
const app = express();
app.use(express.json()); // 옛날에는 bodyParser 사용
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(cors());

app.get("/starbucks", function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회  =>  데이터를 조회했다고 가정
  const result = [
    { name: "아메리카노", kcal: 5 },
    { name: "라떼", kcal: 7 },
    { name: "초코스무디", kcal: 10 },
    { name: "초코라떼", kcal: 15 },
    { name: "모카", kcal: 6 },
    { name: "귤주스", kcal: 14 },
    { name: "베이글", kcal: 30 },
    { name: "블랙라떼", kcal: 16 },
    { name: "크로플", kcal: 17 },
    { name: "자몽에이드", kcal: 20 },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result);
});

app.get("/users", function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회  =>  데이터를 조회했다고 가정
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "영희",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "짱구",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "맹구",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "훈이",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result);
});

app.post("/tokens/phone", function (req, res) {
  const { phone } = req.body;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(phone);
  if (isValid === false) return;

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(phone, mytoken);

  res.send("인증완료!!!");
});

app.post("/users", function (req, res) {
  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email
  const { name, phone, likeSite, email } = req.body;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, phone, likeSite, email });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, myTemplate);

  res.send("가입");
});

app.listen(3000);
