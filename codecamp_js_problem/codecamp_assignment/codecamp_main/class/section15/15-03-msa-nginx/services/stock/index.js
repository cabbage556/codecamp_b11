import express from "express";

const app = express();

// 주식가격 조회API
app.get("/stocks", (req, res) => {
  res.send("주식 가격을 조회합니다.");
});

// 주식최대가격 조회API
app.get("/stocks/max", (req, res) => {
  res.send("주식 최대 가격을 조회합니다.");
});

// 신규 주식 등록 API
app.post("/stocks", (req, res) => {
  res.send("신규 주식을 등록합니다.");
});

app.listen(3002, () => {
  console.log("express stock server on");
});
