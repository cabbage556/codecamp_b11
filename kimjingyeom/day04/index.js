import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

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
});

app.listen(3000);
