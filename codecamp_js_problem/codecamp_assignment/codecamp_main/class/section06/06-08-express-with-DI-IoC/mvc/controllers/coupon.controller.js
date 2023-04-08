import { CashService } from "./services/cash.service.js";

export class CouponController {
  cashService;

  constructor(cashService) {
    this.cashService = cashService;
  }

  buyCoupon = (req, res) => {
    // 1. 잔액 검증 코드
    // const cashService = new CashService();
    const hasCash = this.cashService.checkValue();

    // 2. 쿠폰 구매 코드
    if (hasCash) res.send("쿠폰 구매 완료!");
  };

  refundCoupon = (req, res) => {
    this.cashService.checkValue();
  };
}
