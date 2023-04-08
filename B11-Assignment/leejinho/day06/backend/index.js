// express
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors"
import {checkPhone,getToken,sendTokenToSMS} from "./phone.js"
import {checkEmail,makeTemplate,sendTemplateToEmail} from "./email.js"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express(); 
app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(express.json())

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

app.post("/tokens/phone", function (req, res) {
    console.log(req);
    
    let {phoneNumber} = req.body

    const isValid = checkPhone(phoneNumber);
    if (isValid == false) res.send("인증실패")

    const myToken = getToken();

    sendTokenToSMS(phoneNumber, myToken);

    res.send("인증 완료!");
});    

app.post("/signup", function(req, res){
 
    const {SignupName,SignupPersonal,SignupPrefer,SignupEmail,SignupPwd,SignupPhone} = req.body // 구조분해할당
    console.log(SignupName,SignupPersonal,SignupPrefer,SignupEmail,SignupPwd,SignupPhone)
    // 1. 이메일이 정상인지 확인(1- 존재여부, 2 @포함 여부)
    const isValid = checkEmail(SignupEmail)
    if(isValid == false) return
    
    // 2. 가입환영 템플릿 만들기
    let template = makeTemplate(SignupName,SignupPhone,SignupPrefer)
    
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(SignupEmail, template)
    
    res.send("가입완료")
    console.log(`${SignupEmail}로, ${template}전달하였씁니당`)
})

app.listen(3000);

