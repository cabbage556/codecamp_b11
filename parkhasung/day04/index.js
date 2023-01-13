import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/users", function (req, res) {
    //1.DB에 접속후,데이터를 조회=> 데이터를 조회했다고 가정
    const result = [
        {
            email: "aaa@gmail.com",
            name: "철수",
            phone: "010-1111-5678",
            personal: "220110-2222222",
            prefer: "https://naver.com",
        },
        {
            email: "bbb@gmail.com",
            name: "주디",
            phone: "010-2222-5678",
            personal: "220110-3333333",
            prefer: "https://naver.com",
        },
        {
            email: "ccc@gmail.com",
            name: "영희",
            phone: "010-3333-5678",
            personal: "220110-4444444",
            prefer: "https://naver.com",
        },
        {
            email: "ddd@gmail.com",
            name: "훈이",
            phone: "010-4444-5678",
            personal: "220110-5555555",
            prefer: "https://naver.com",
        },
        {
            email: "eee@gmail.com",
            name: "맹구",
            phone: "010-5555-5678",
            personal: "220110-6666666",
            prefer: "https://naver.com",
        },
    ];

    //2. DB에서 꺼내온 결과를 브라우저에 응답(response)주기
    res.send(result);
});

app.get("/starbucks", function (req, res) {
    const result = [
        { name: "아메리카노", kcal: 5 },
        { name: "카페라떼", kcal: 10 },
        { name: "콜드브루", kcal: 7 },
        { name: "카페모카", kcal: 50 },
        { name: "돌체라떼", kcal: 500 },
        { name: "캬라멜라떼", kcal: 300 },
        { name: "바닐라라뗴", kcal: 200 },
        { name: "에스프레소", kcal: 1 },
        { name: "디카페인", kcal: 3 },
        { name: "오트라뗴", kcal: 520 },
    ];

    res.send(result);
});
app.listen(3000, () => {
    console.log("서버 작동중");
}); //3000 포트번호
