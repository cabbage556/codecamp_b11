import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { checkPhone, getToken, sendTokenToSMS, message } from "./phone.js";
import Tokens from "./models/token.model.js";
import { Board } from "./models/board.model.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// =======================================================================
app.get("/boards", function (req, res) {
  Board.find({}, function (err, documents) {
    if (err) return err;
    res.send(documents);
  });
});

app.post("/boards", async function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log("회원정보 저장에 성공했습니다.");
  console.log(req.body);
  console.log("==================");

  // 2. DB에 접속 후, 데이터를 저장
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents,
  });
  await board.save();

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

// =======================================================================

app.get("/tokens/phone/", (req, res) => {
  Tokens.find({}, function (err, documents) {
    if (err) return err;
    res.send(documents);
  });
});

app.post("/tokens/phone", async function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  const myphone = req.body.phone;
  console.log(`index.js로 ${myphone} 넘겨짐`);

  // --2.1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myphone);
  if (isValid === false) return;

  // --2.2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();
  console.log(`인증번호 ${mytoken} 생성됨`);

  const tokens = new Tokens({
    phone: myphone,
    token: mytoken,
    isAuth: false,
  });

  // 만약 해당 핸드폰번호가 이미 Tokens문서에 저장돼있다면 삭제하고 새 토큰 저장(= 업데이트)
  await Tokens.find({ phone: myphone }).remove();
  await tokens.save();
  console.log("인증 토큰 저장");

  // --2.3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);
  console.log("인증번호 문자 발송됨");

  const result = message(myphone);
  res.send(result);
});

app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const mytoken = req.body.token;
  const lastestTokens = await Tokens.find({ phone: myphone });

  if (
    lastestTokens[0].phone === myphone &&
    lastestTokens[0].token === mytoken
  ) {
    await Tokens.update({ phone: myphone }, { isAuth: true });
    console.log("토큰 인증 완료");
    res.send("true");
  } else {
    res.send("false");
  }
});

mongoose
  .set("strictQuery", true)
  .connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."));

app.listen(4000, () => {
  console.log("10주차 과제의 백엔드 서버가 켜졌어요 ( http://localhost:4000 )");
});
