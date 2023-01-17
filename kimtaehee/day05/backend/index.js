// const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module

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

app.listen(3000);
