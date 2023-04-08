import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

import {
  checkTokenDocumentInDB,
  checkTokenIsSame,
  createSaveTokenDocument,
  getTokenDocument,
  updateTokenDocument,
} from "./srcs/token.js";
import { checkPhone, getToken, sendTokenToSMS } from "./srcs/phone.js";
import { UserController } from "./controllers/user.controller.js";

const MONGODB_CONTAINER = "mongodb";
const EXPRESS_PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

// 회원 API
const userController = new UserController();
app.post("/users", userController.signUpUser); // 1. 회원등록 API
app.get("/users", userController.getUsers); // 2. 회원조회 API

// 3. 토큰인증요청 API
app.post("/tokens/phone", async (req, res) => {
  const { phone } = req.body;
  if (!checkPhone({ phone }))
    return res.status(422).send("에러!! 휴대폰 형식이 올바르지 않습니다.");

  // 토큰 생성, 토큰 문자 전송
  const token = getToken();
  sendTokenToSMS({ phone, token });

  // 토큰 도큐먼트 확인
  if (!(await checkTokenDocumentInDB({ phone }))) {
    // 핸드폰 번호, 생성 토큰, isAuth를 false로 DB에 저장
    createSaveTokenDocument({ phone, token });
  } else {
    // 이미 핸드폰 번호가 저장되어 있다면 최신 토큰으로 덮어쓰기
    updateTokenDocument({ phone, token });
  }

  return res.status(200).send("휴대폰으로 인증 문자가 전송되었습니다!");
});

// 4. 인증완료 API
app.patch("/tokens/phone", async (req, res) => {
  const { phone, token } = req.body;

  // 핸드폰 번호가 저장되어 있지 않다면 false 응답
  if (!(await checkTokenDocumentInDB({ phone })))
    return res.status(422).send(false);

  const savedTokenDocument = await getTokenDocument({ phone });
  const savedToken = savedTokenDocument.token;
  const isPhoneAuth = savedTokenDocument.isAuth;

  // 저장 토큰이 입력 토큰과 일치하지 않으면 false 응답
  if (!checkTokenIsSame({ token, savedToken })) {
    updateTokenDocument({ phone, token: savedToken });
    return res.status(422).send(false);
  }

  // 토큰이 일치하고, isAuth가 false라면 true로 변경하여 DB에 저장
  if (!isPhoneAuth) updateTokenDocument({ phone, token, isAuth: true });

  return res.status(200).send(true);
});

// mongodb 연결
mongoose
  .connect(`mongodb://${MONGODB_CONTAINER}:27017/mini`)
  .then(() => console.log("mongoDB 접속 성공!!!⭐️⭐️⭐️⭐️⭐️"))
  .catch(() => console.log("mongoDB 접속 실패!!!❗️❗️❗️❗️❗️"));

// 서버 대기
app.listen(EXPRESS_PORT, () => {
  console.log("express 서버 실행 😎😎😎😎😎");
});
