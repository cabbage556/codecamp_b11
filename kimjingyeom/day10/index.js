import express from "express";
import mongoose from "mongoose";
import { Token } from "./models/token.model.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
//db에 데이터를 저장하는 api이다.
app.post("/tokens/phone", async (req, res) => {
  //1.브라우저에서 보내준 데이터 변수phone 선언후 할당
  const phone = req.body.phone;

  //2.휴대폰번호 자리수 맞는지 확인하기(10자리~11자리)
  const isValid = checkPhone(phone);
  if (isValid === false) return;

  //3.인증번호 6자리 핸드폰 토큰 6자리 만들기
  const myToken = getToken();

  //4.데이터베이스에 넣을 다큐먼트 만들기
  const token = new Token({
    phone: req.body.phone,
    token: myToken,
    isAuth: false,
  });

  //5.db에 전화번호 존재유무 검증
  const doc = await Token.findOne({ phone });
  if (!doc) {
    //새로운전화번호이므로 새로 만들어준다.
    token.save();
  } else {
    //이미 있는 전화번호이기 때문에 덮어씌운다.
    Token.updateOne({ phone }, { token: myToken });
  }

  //6.핸드폰 번호에 토큰 전송하기 (뒤에서 한다.)
  sendTokenToSMS(phone, myToken);

  //7.db에 저장된결과를 클라이언트에 응답(response)으로 주기
  res.send(`${phone}으로 인증문자가 전송되었습니다.`);
});

//db에 접속하여 데이터를 조회하는 api
app.get("/tokens/phone", async (req, res) => {
  //1.db에접속후, 데이터조회
  const result = await Token.find();
  //2.db에서 꺼내온 결과를 브라우저에 응답(response)주기
  res.send(result);
});

app.patch("/tokens/phone", async (req, res) => {
  //입력받은 전화번호
  const phone = req.body.phone;
  //입력받은 토큰
  const token = req.body.token;
  //db에서 phone을 가진 다큐먼트 찾기
  const doc = await Token.findOne({ phone });
  //입력한 전화번호가 데이터베이스에 존재하지 않거나 다르거나 입력한 토큰이 데이터베이스의 토큰과 다르거나
  if (doc == null || doc.phone !== phone || doc.token !== token) {
    res.send("false");
  } else {
    await Token.updateOne({ phone }, { isAuth: true });
    res.send("true");
  }
});

mongoose.set("debug", true);

mongoose
  .connect("mongodb://my-database:27017/newdocker")
  .then(() => {
    console.log("db 접속에 성공하였습니다.");
  })
  .catch(() => {
    console.log("db 접속에 실패하였습니다.");
  });

app.listen(4000);
