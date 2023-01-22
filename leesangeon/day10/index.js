import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { checkPhone, getToken, sendTokenToSNS } from "./phone.js";
import { Certify } from "./models/token.models.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/tokens/phone", async function (req, res) {
  let { phone } = req.body; //token.modules 의 변수명과 동일하기 때문에 구조분해할당으로 body뒤 변수명생략
  phone = phone.split("-").join("");

  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(phone);
  if (isValid === false) return;

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();
  // 핸드폰번호만 찾으면되니까 findOne()메서드를 사용한다 <<< 몽고디비 메소드
  //인증요청이 처음이라면 전달받은 핸드폰번호, 토큰, isAuth는 false로 저장
  const phoneNum = await Certify.findOne({ phone });

  if (phoneNum === null) {
    new Certify({ phone: phone, token: mytoken, isAuth: false }).save();
  } else {
    //번호가 이미 있다면 token만 최신화 <<<하나만 수정 updateOne
    await Certify.updateOne({ phone: phone }, { token: mytoken });
  }

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSNS(phone, mytoken);

  res.send(`${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}으로 인증 문자가 전송되었습니다.`);
});

app.patch("/tokens/phone", async function (req, res) {
  let { phone, token } = req.body;
  //db에있는 폰값을 찾아온다
  const receiveToken = await Certify.findOne({ phone });
  if (receiveToken === null) {
    res.send("false");
    return;
  }

  if (receiveToken.token === token) {
    await Certify.updateOne({ phone: phone }, { isAuth: true });
    res.send("true");
    return;
  } else {
    await Certify.updateOne({ phone: phone }, { isAuth: false });
    res.send("false");
  }
});

mongoose.set("debug", true);

mongoose
  .connect("mongodb://my-database:27017/certify")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 성공하였습니다."));

app.listen(4000, () => {
  console.log("백엔드 API 서버가 켜졌습니다!!!");
});
