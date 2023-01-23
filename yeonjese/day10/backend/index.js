// const express = require("express");  //옛날 방식 => commonjs
import express from "express"; //요즘 방식 => module
// export default 값
/// import qqq, {checkPhone, getToken} from "./phone.js" => qqq(디폴트함수 가져오기)+2개함수

import { getToken, checkPhone, sendTokenToSMS } from "./phone.js";

import swaggerUi from "swagger-ui-express";

import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import mongoose from "mongoose";
import { Token } from "./models/token.model.js";
import "dotenv/config";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use(express.json());
app.use(cors());

// app.get("/tokens/phone", async function (req, res) {
//   const result = await Token.find();
//   res.send(result);
// });

app.post("/tokens/phone", async (req, res) => {
  let myphone = req.body.phone;

  const isValid = checkPhone(myphone);
  if (isValid === false) return res.send("번호잘못됨");

  // 2번 함수
  const myToken = getToken();

  // 3번 함수
  sendTokenToSMS(myphone, myToken);

  // const result = {
  //   phoneNumber: myphone,

  // };
  try {
    let temp = await Token.findOne({ phone: myphone });
    if (temp) {
      await Token.updateOne({ phone: myphone }, { token: myToken });
    } else {
      const token = new Token({
        token: myToken,
        phone: myphone,
        isAuth: false,
      });

      await token.save();
    }
  } catch (err) {
    console.log(err);
  }

  res.send(`${myphone}으로 인증문자가 전송되었습니다.`);
});

app.patch("/tokens/phone", async (req, res) => {
  let myphone = req.body.phone;
  let myToken = req.body.token;

  // };
  try {
    let temp = await Token.findOne({ phone: myphone });
    if (!temp) {
      return res.send(false);
    } else {
      if (temp.token !== myToken) return res.send(false);
      else {
        await Token.updateOne({ phone: myphone }, { isAuth: true });
      }
    }
  } catch (err) {
    console.log(err);
  }

  res.send(true);
});

mongoose.set("debug", true);

mongoose
  .connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db접속성공db접속성공db접속성공db접속성공db접속성공"))
  .catch(() =>
    console.log("db접속실패db접속실패db접속실패db접속실패db접속실패")
  );

app.listen(4000); //포트번호 (listen:기다린다는 뜻도있음, post에서 send버튼 누르는걸 기다린다)
