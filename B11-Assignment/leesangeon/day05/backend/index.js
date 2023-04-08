import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";

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

homework.listen(3000, () => {
  console.log(" 서버전송성공!!!");
});
