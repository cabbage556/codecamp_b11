import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get("/users", function (req, res) {
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
    { name: "커피1", kcal: 1 },
    { name: "커피2", kcal: 2 },
    { name: "커피3", kcal: 3 },
    { name: "커피4", kcal: 4 },
    { name: "커피5", kcal: 5 },
    { name: "커피6", kcal: 6 },
    { name: "커피7", kcal: 7 },
    { name: "커피8", kcal: 8 },
    { name: "커피9", kcal: 9 },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(coffee);
});

app.listen(3002, () => {
  console.log("과제의 백엔드 서버가 켜졌어요!!");
  console.log("http://localhost:3002");
});
