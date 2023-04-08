import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import { checkPhone, formatPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  checkDocument,
  checkTokenIsSame,
  createSaveTokenDocument,
  updateTokenDocument,
} from "./token.js";

const app = express();
app.use(express.json());

// 1. 핸드폰 인증 토큰 DB에 저장하기
app.post("/tokens/phone", async (req, res) => {
  const { phone } = req.body;
  if (!checkPhone(phone)) return res.send("인증 실패!");

  // 인증 토큰 생성
  const token = getToken();

  // 휴대폰 번호가 DB에 저장되어 있는지 확인
  if (!(await checkDocument({ phone }))) {
    // 휴대폰 번호가 DB에 저장되어 있지 않으면 새로 저장
    createSaveTokenDocument({ phone, token });
  } else {
    // 휴대폰 번호가 DB에 저장되어 있으면 생성한 토큰으로 업데이트
    updateTokenDocument({ phone, token });
  }

  // 생성한 인증 토큰 문자 전송
  sendTokenToSMS(phone, token);

  // 클라이언트에 응답
  res.send(`${formatPhone({ phone })}으로 인증 문자가 전송되었습니다.`);
});

// 2. 휴대폰 인증 토큰 완료하기
app.patch("/tokens/phone", async (req, res) => {
  // 입력 받은 휴대폰과 토큰
  const { phone, token } = req.body;
  console.log(`입력 받은 토큰: ${token}`);

  // 휴대폰 번호로 Tokens 문서에서 찾기
  const savedTokenDocument = await checkDocument({ phone });

  // 휴대폰 번호가 DB에 저장되어 있지 않다면 false를 응답하여 API 종료
  if (!savedTokenDocument) return res.send(false);

  // 저장된 토큰이 입력된 토큰과 일치하지 않다면 false를 응답하여 API 종료
  const savedToken = savedTokenDocument.token;
  if (!checkTokenIsSame({ token, savedToken })) {
    updateTokenDocument({ phone, token: savedToken });
    return res.send(false);
  }

  // isAuth: true로 업데이트
  console.log("토큰 일치! isAuth를 true로 DB에 저장합니다.");
  updateTokenDocument({ phone, token, isAuth: true });

  // true 응답
  res.send(true);
});

// mongoDB 연결하기
mongoose
  .connect("mongodb://token-database:27017/myToken")
  .then(() => console.log("mongoDB 접속 성공!!!⭐️⭐️⭐️⭐️⭐️"))
  .catch(() => console.log("mongoDB 접속 실패!!!❗️❗️❗️"));

app.listen(4000, () => {
  console.log("express 서버 실행 😎😎😎😎😎");
});
