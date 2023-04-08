// const express = require('express') // 예전 방식 => commonjs 방식
import express from "express"; // 요즘 방식 => module 방식
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";

const app = express();

// 상품 API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰 API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon); // 쿠폰 구매하기 API
app.post("/coupons/refund", couponController.refundCoupon); // 쿠폰 환불하기 API

app.listen(3000);
