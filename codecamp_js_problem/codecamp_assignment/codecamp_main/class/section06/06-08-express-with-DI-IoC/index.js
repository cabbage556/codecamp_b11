// const express = require('express') // 예전 방식 => commonjs 방식
import express from "express"; // 요즘 방식 => module 방식
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";

const app = express();

// 의존성 주입의 장점
const productService = new ProductService(); // 1. new 한번으로 모든 곳에서 재사용 가능 (싱글톤 패턴)
const cashService = new CashService(); // 2. 의존성 주입으로 한꺼번에 모두 변경 가능
const pointService = new PointService(); // 3. 의존성 주입으로 쿠폰 구매 방식을 포인트 결제로 변경 가능

// 부가 설명
// 1. ProductController가 CashService에 의존하고 있음(CashService => 의존성)
//    => 이 상황을 "강하게 결합되어있다"라고 표현 📌📌
//    => tight-coupling 📌📌

// 2. "강한 결합"을 개선하기 위해서 "느슨한 결합"으로 변경할 필요가 있음
//    => loose-coupling
//    => 이를 "의존성 주입"으로 해결! 의존성 주입: Dependency Injection(DI) ⭐️⭐️⭐️
//    => 이 역할을 대신 해주는 NestJS 기능 => IoC 컨테이너 (알아서 new해서 넣어주는 도구. 즉, DI 해주는 친구)
//                                   => IoC: Inversion of Control

// 3. "의존성 주입"으로 "싱글톤패턴" 구현 가능해짐
//    => "의존성 주입"이면, 반드시 "싱글톤패턴"인가? => 그건 아님❗️ 구현하기 나름이다.

// 상품 API
const productController = new ProductController(cashService, productService); // 의존성 주입
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰 API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon); // 쿠폰 구매하기 API
app.post("/coupons/refund", couponController.refundCoupon); // 쿠폰 환불하기 API

app.listen(3000);
