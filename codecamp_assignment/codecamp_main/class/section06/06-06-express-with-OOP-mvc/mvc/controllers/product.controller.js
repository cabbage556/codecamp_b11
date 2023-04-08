import { CashService } from "./services/cash.service.js";
import { ProductService } from "./services/product.service.js";

export class ProductController {
  buyProduct = (req, res) => {
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
  };

  refundProduct = (req, res) => {
    // 1. 판매 여부 검증 코드 (10줄 => 2줄)
    const productService = new ProductService();
    const isSoldout = productService.checkSoldOut();

    // 2. 상품 환불 코드
    if (isSoldout) {
      res.send("상품 환불 완료");
    }
  };
}
