import express from "express";
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get("/user", function (req, res) {
  // 1. DB에 접속 후 데이터를 조회하기 ==> 조회했다고 가정함
  const person = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1111-1111",
      personal: "220110-1111111",
      prefer: "https://naver1.com",
    },
    {
      email: "bbb@gmail.com",
      name: "영희",
      phone: "010-2222-2222",
      personal: "220110-2222222",
      prefer: "https://naver2.com",
    },
    {
      email: "ccc@gmail.com",
      name: "훈이",
      phone: "010-3333-3333",
      personal: "220110-3333333",
      prefer: "https://naver3.com",
    },
    {
      email: "ddd@gmail.com",
      name: "맹구",
      phone: "010-4444-4444",
      personal: "220110-4444444",
      prefer: "https://naver4.com",
    },
    {
      email: "ccc@gmail.com",
      name: "유리",
      phone: "010-5555-5555",
      personal: "220110-5555555",
      prefer: "https://naver5.com",
    },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(person);
});

app.get("/starbucks", function (req, res) {
  // 1. DB에 접속 후 데이터를 조회하기 ==> 조회했다고 가정함
  const coffee = [
    { name: "아메리카노", kcal: 5 },
    { name: "커피1", kcal: 100 },
    { name: "커피2", kcal: 200 },
    { name: "커피3", kcal: 300 },
    { name: "커피4", kcal: 400 },
    { name: "커피5", kcal: 500 },
    { name: "커피6", kcal: 600 },
    { name: "커피7", kcal: 700 },
    { name: "커피8", kcal: 800 },
    { name: "커피9", kcal: 900 },
  ];
  res.send(coffee);
});

//====================  1) 휴대폰 인증 토큰 발급 API ====================
app.get("/userinfo", function (req, res) {
  const userInfo = [
    {
      name: "철수",
      personal: "220116-1111111",
      phoneNumber: "01011112222",
      favSite: "www.naver.com",
      email: "aaaaa@naver.com",
      pw: "pw1234",
    },
  ];
  res.send(userInfo);
});

app.post("/userinfo", function (req, res) {
  // req = userInput;
  console.log("회원정보 저장에 성공했습니다.");

  const myPhone = req.body.phoneNumber;
  const isValid = checkPhone(myPhone);
  if (isValid === false) return;

  const myToken = getToken();

  const message = sendTokenToSMS(myPhone, myToken);
  console.log("인증 번호 전송 완료!!");
  res.send(message);
});

// ==================== 2) 회원 가입 API (가입 환영 템플릿 이메일 발송 기능)  ====================
app.get("/useremail", function (req, res) {
  // 1. DB에 접속 후 데이터를 조회하기 ==> 조회했다고 가정함
  const result = [
    {
      name: "철수",
      age: 8,
      school: "다람쥐초등학교",
      email: "aaa@fdsffas.com",
    },
  ];

  res.send(result);
});

app.post("/useremail", function (req, res) {
  const { name, age, school, email } = req.body;

  const isValid = checkEmail(email);
  if (isValid === false) return;

  const myTemplate = getWelcomeTemplate({ name, age, school, email });

  sendTemplateToEmail(email, myTemplate);
  res.send("회원 가입 이메일 전송 완료!!!");
});

app.listen(4000, () => {
  console.log("백엔드 서버가 켜졌어요!!");
  console.log("http://localhost:4000");
});
