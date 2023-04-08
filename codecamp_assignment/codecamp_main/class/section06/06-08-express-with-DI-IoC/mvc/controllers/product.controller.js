export class ProductController {
  cashService;
  productService;

  // 객체 생성 시 CashService 객체를 전달 받음 => 의존성 주입
  constructor(cashService, productService) {
    this.cashService = cashService;
    this.productService = productService;
  }

  buyProduct = (req, res) => {
    // 1. 잔액 검증 코드 (10줄 => 2줄)
    // const cashService = new CashService();  // 강한 결합
    const hasCash = this.cashService.checkValue();

    // 2. 판매 여부 검증 코드 (10줄 => 2줄)
    // const productService = new ProductService();  // 강한 결합
    const isSoldout = this.productService.checkSoldOut();

    // 3. 상품 구매 코드
    if (hasCash && !isSoldout) {
      res.send("상품 구매 완료");
    }
  };

  refundProduct = (req, res) => {
    // 1. 판매 여부 검증 코드 (10줄 => 2줄)
    // const productService = new ProductService();
    const isSoldout = this.productService.checkSoldOut();

    // 2. 상품 환불 코드
    if (isSoldout) {
      res.send("상품 환불 완료");
    }
  };
}
