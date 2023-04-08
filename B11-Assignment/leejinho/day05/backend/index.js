// express
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors"

const app = express(); 
app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/users", function (req, res) {

    const pi = [
        {
            email : "aaa@aaa.com",
            name : "철수",
            phone : "010-1234-5678",
            personal : "220110-2222222",
            prefer : "https://naver.com"
        },
        {
            email : "nick@nick.com",
            name : "짱구",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
        {
            email : "judy@judy.com",
            name : "흰둥이",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
        {
            email : "anna@anna.com",
            name : "유리",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
        {
            email : "elsa@elsa.com",
            name : "맹구",
            phone : "010-1234-5678",
            personal : "220219-0000000",
            prefer : "https://naver.com"
        },
    ]
    res.send(pi);
});

app.get("/starbucks", function (req, res) {
    const cof = [
        {
            name : "아메리카노",
            kcal : 5
        },
        {
            name : "카페라떼",
            kcal : 10
        },
        {
            name : "콜드브루",
            kcal : 15
        },
        {
            name : "카페모카",
            kcal : 50
        },
        {
            name : "돌체라떼",
            kcal : 500
        },
        {
            name : "카라멜라떼",
            kcal : 200
        },
        {
            name : "바닐라라떼",
            kcal : 20
        },
        {
            name : "에스프레소",
            kcal : 1
        },
        {
            name : "디카페인",
            kcal : 5
        },
        {
            name : "오트라떼",
            kcal : 300
        },
    ]
    
    res.send(cof);
});



app.listen(3000);

