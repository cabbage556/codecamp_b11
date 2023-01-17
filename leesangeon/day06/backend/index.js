import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";

import { checkPhone, getToken, sendTokenToSMS } from "./phone.js"; // export 가져오기
import { emailCheck, getWelcomeTemplate, sendTemplateToEmail } from "./email.js";

import * as dotenv from "dotenv";
dotenv.config();

const homework = express();
homework.use(express.json());
homework.use(cors());
homework.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
homework.get("/users", function (req, res) {
  const result = [
    {
      email: "aaa@gmail.com",
      name: "짱구",
      phone: "010-1111-1111",
      personal: "220101-1111111",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "철수",
      phone: "010-2222-2222",
      personal: "220202-2222222",
      prefer: "https://google.com",
    },
    {
      email: "ccc@gmail.com",
      name: "유리",
      phone: "010-3333-3333",
      personal: "220303-3333333",
      prefer: "https://yahoo.com",
    },
    {
      email: "ddd@gmail.com",
      name: "훈이",
      phone: "010-4444-4444",
      personal: "220404-4444444",
      prefer: "https://daum.com",
    },
    {
      email: "eee@gmail.com",
      name: "맹구",
      phone: "010-5555-5555",
      personal: "220505-5555555",
      prefer: "https://kakao.com",
    },
  ];

  res.send(result);
});

homework.get("/starbucks", function (req, res) {
  const result = [
    { name: "아메리카노", kcal: 5 },
    { name: "카라멜마끼아또", kcal: 50 },
    { name: "프라푸치노", kcal: 100 },
    { name: "레몬티", kcal: 150 },
    { name: "아인슈페너", kcal: 200 },
    { name: "아포카토", kcal: 130 },
    { name: "콜드브루", kcal: 10 },
    { name: "돌체라떼", kcal: 300 },
    { name: "바닐라라떼", kcal: 70 },
    { name: "토피넛라떼", kcal: 250 },
  ];

  res.send(result);
});

homework.post("/tokens/phone", function (req, res) {
  const { myphone } = req.body;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myphone);
  if (isValid === false) return;

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);

  res.send("전송완료!!!"); // signup.js의 axios.post 이후 then값으로
});

homework.post("/users", function (req, res) {
  // const name = req.body.name;
  // const age = req.body.age;
  // const school = req.body.school;
  // const email = req.body.email;
  const { name, privateNum, myphone, favorite, email } = req.body;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = emailCheck(email);
  if (isValid === false) return;
  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, privateNum, myphone, favorite, email });
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, myTemplate);
  // 4. 날짜

  res.send("e-mail 인증완료");
});

homework.listen(3000, () => {
  console.log(" 서버전송성공!!!");
});
