// const express = require('express') // 예전 방식 => commonjs 방식
import express from "express"; // 요즘 방식 => module 방식
import { CashService } from "./cash.js";
import { ProductService } from "./product";

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 잔액 검증 코드 (10줄 => 2줄)
  const cashService = new CashService();
  const hasCash = cashService.checkValue();

  // 2. 판매 여부 검증 코드 (10줄 => 2줄)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldOut();

  // 3. 상품 구매 코드
  if (hasCash && !isSoldout) {
    res.send("상품 구매 완료");
  }
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매 여부 검증 코드 (10줄 => 2줄)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldOut();

  // 2. 상품 환불 코드
  if (isSoldout) {
    res.send("상품 환불 완료");
  }
});

app.listen(3000);
