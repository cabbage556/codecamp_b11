import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// 1. 회원목록 조회 API
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

// 2. 커피목록 조회 API
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

app.listen(3000, () => {
  console.log("백엔드 서버 시작! 😎😎😎");
});
