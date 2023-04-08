// const express = require("express");  //옛날 방식 => commonjs
import express from "express"; //요즘 방식 => module
// export default 값
/// import qqq, {checkPhone, getToken} from "./phone.js" => qqq(디폴트함수 가져오기)+2개함수
import { getToken, checkPhone, sendTokenToSMS } from "./phone.js";
import { checkEmail, getWelcomeTemplate, sendEmail } from "./email.js";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use(express.json());

app.get("/users", function (req, res) {
  const result = [
    {
      email: "aaa@gmail.com",
      personal: "220110-2222222",
      phone: "010-2222-2222",
      prefer: "https://bver.com",
    },
    {
      email: "bbb@gmail.com",
      personal: "220110-2222222",
      phone: "010-2222-2222",
      prefer: "https://bver.com",
    },
    {
      email: "ccc@gmail.com",
      personal: "220110-2222222",
      phone: "010-2222-2222",
      prefer: "https://bver.com",
    },
    {
      email: "ddd@gmail.com",
      personal: "220110-2222222",
      phone: "010-2222-2222",
      prefer: "https://bver.com",
    },
    {
      email: "eee@gmail.com",
      personal: "220110-2222222",
      phone: "010-2222-2222",
      prefer: "https://bver.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", function (req, res) {
  const result = [
    { name: "아메리카노1", kcal: 5 },
    { name: "아메리카노2", kcal: 5 },
    { name: "아메리카노3", kcal: 5 },
    { name: "아메리카노4", kcal: 5 },
    { name: "아메리카노5", kcal: 5 },
    { name: "아메리카노6", kcal: 5 },
    { name: "아메리카노7", kcal: 5 },
    { name: "아메리카노8", kcal: 5 },
    { name: "아메리카노9", kcal: 5 },
    { name: "아메리카노10", kcal: 5 },
  ];
  // res.send({ name: "아메리카노10", kcal: 5 });

  res.send(result);
});

app.post("/tokens/phone", function (req, res) {
  let myphone = req.body.qqq;

  const isValid = checkPhone(myphone);
  if (isValid === false) return res.send("번호잘못됨");

  // 2번 함수
  const myToken = getToken();

  // 3번 함수
  sendTokenToSMS(myphone, myToken);

  const result = {
    phoneNumber: myphone,
    token: myToken,
  };

  res.send(result);
});

// 1. 번호 body에 넘기기
// 2. 임포트 완성해서 정상작동하게 만들기
// 3. phone.js로 파일분리하기
app.post("/sendMail", function (req, res) {
  // const name = req.body.name;
  // const age = req.body.age;
  // const school = req.body.school;
  // const email = req.body.email;
  const { name, personal, prefer, email, myphone } = req.body;
  // 1. 이메일 존재여부? @포함여부?
  let check = checkEmail(email);
  if (!check) return;
  // 2. 가입환영템플릿만들기
  //   let myTemplate = getWelcomeTemplate(name, age, school, createdAt);
  let myTemplate = getWelcomeTemplate({ name, prefer, myphone });
  //   let myTemplate = getWelcomeTemplate({ name, school, age, createdAt });
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendEmail(email, myTemplate);

  res.send("가입완료");
});

app.listen(2600); //포트번호 (listen:기다린다는 뜻도있음, post에서 send버튼 누르는걸 기다린다)
