import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  checkEmail,
  makingTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";
import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(express.json());
app.use(cors());

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.get("/users", function (req, res) {
  const pi = [
    {
      email: "aa@aaa.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "bb@bbb.com",
      name: "짱구",
      phone: "010-1234-6543",
      personal: "220110-2233445",
      prefer: "https://naver.com",
    },
    {
      email: "cc@cc.com",
      name: "흰둥이",
      phone: "010-1234-5678",
      personal: "220110-2222234",
      prefer: "https://naver.com",
    },
    {
      email: "dd@dd.com",
      name: "유리",
      phone: "010-1234-5648",
      personal: "220110-2222234",
      prefer: "https://naver.com",
    },
    {
      email: "ee@eee.com",
      name: "맹구",
      phone: "010-1234-5338",
      personal: "220110-2222278",
      prefer: "https://naver.com",
    },
  ];
  res.send(pi);
});

app.get("/starbucks", function (req, res) {
  const cof = [
    { name: "아메리카노", kcal: "5" },
    { name: "카페라뗴", kcal: "10" },
    { name: "콜드브루", kcal: "15" },
    { name: "카페모카", kcal: "50" },
    { name: "돌페라떼", kcal: "500" },
    { name: "바닐라라떼", kcal: "20" },
    { name: "에소프레소", kcal: "1" },
    { name: "디카페인", kcal: "5" },
    { name: "오트라떼", kcal: "300" },
  ];

  res.send(cof);
  ``;
});

app.post("/tokens/phone", function (req, res) {
  const { phone } = req.body;
  console.log(phone);
  //1.휴대폰번호 자리수 맞느닞 확인하기(10자리~11자리)
  const isValid = checkPhone(phone);
  if (isValid === false) return;

  //2.인증번호 6자리 핸드폰 토큰 6자리 만들기
  const myToken = getToken();

  //3.핸드폰 번호에 토큰 전송하기 (뒤에서 한다.)
  sendTokenToSMS(phone, myToken);

  res.send("인증완료!!!");
});

app.post("/users", function (req, res) {
  const { name, phone, loveSite, email } = req.body;
  console.log(name, phone, loveSite, email);
  //1.이메일이 정상인지 확인(1-존재 여부,2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;
  //2.가입환영 템플릿 만들기
  const getTemplate = makingTemplate({ name, email, loveSite, phone });
  //3.이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail(email, getTemplate);
  res.send("가입");
});

mongoose
  .connect("mongodb://my-db:27017/mydocker")
  .then(() => {
    console.log("my-db 접속에 성공하였습니다.");
  })
  .catch(() => {
    console.log("my-db 접속에 실패했습니다.");
  });
app.listen(3000);
