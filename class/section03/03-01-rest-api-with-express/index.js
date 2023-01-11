// 예전 방식 => commonjs 방식
// const express = require('express')

// 요즘 방식 => module 방식
import express from "express";

const app = express();

// GET 방식의 API를 만들겠다.
// endpoint는 / 로 만들겠다.
// / endpoint로 GET 방식으로 API를 호출하면 두 번째 인자로 전달한 미들웨어 함수가 호출된다.
app.get("/", function (req, res) {
  // 응답으로 "..."를 보내준다.
  res.send("...");
});

app.get("/123", function (req, res) {
  // 응답으로 "123"를 보내준다.
  res.send("123");
});

app.get("/456", function (req, res) {
  // 응답으로 "456"를 보내준다.
  res.send("456");
});

// 3000 => 포트번호
// listen => API 요청을 기다린다.
app.listen(3000);
