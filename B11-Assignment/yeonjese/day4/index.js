import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use(express.json());

app.get("/users", function (req, res) {
  const result = [
    {
      email: "bbb@gmail.com",
      name: "bbb",
      phone: "010-2222-2222",
      personal: "220110-2222222",
      prefer: "https://bver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "ccc",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", function (req, res) {
  const result = [
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
    { name: "아메리카노", kcal: 5 },
  ];
  res.send(result);
});

app.listen(1235);
