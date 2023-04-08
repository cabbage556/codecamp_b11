import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

import cors from "cors";

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

app.listen(3000);
