import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';
import 'dotenv/config'


import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js"; // export 가져오기
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/users', function (req, res) {

    const pi = [
        {email : "aaa@gmail.com", 
        name : "철수",
        phone : "010-1234-5678",
        personal : "220110-2222222",
        prefer : "https://google.com"},
        
        {email : "bbb@gmail.com", 
        name : "짱구",
        phone : "010-1234-5678",
        personal : "220110-2222222",
        prefer : "https://naver.com"},

        {email : "ccc@gmail.com", 
        name : "흰둥이",
        phone : "010-1234-5678",
        personal : "220110-2222222",
        prefer : "https://naver.com"},

        {email : "ddd@gmail.com", 
        name : "유리",
        phone : "010-1234-5678",
        personal : "220110-2222222",
        prefer : "https://naver.com"},

        {email : "eee@gmail.com", 
        name : "맹구",
        phone : "010-1234-5678",
        personal : "220110-2222222",
        prefer : "https://naver.com"}
    ]


    res.send(pi)
  })

  app.get('/starbucks', function (req, res) {

    const cof = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라떼', kcal: 10 },
        { name: '아보카도커피', kcal: 15 },
        { name: '코코넛스무디', kcal: 20 },
        { name: '바닐라라떼', kcal: 25 },
        { name: '카페모카', kcal: 30 },
        { name: '플레인스무디', kcal: 35 },
        { name: '블루베리스무디', kcal: 40 },
        { name: '에스프레소', kcal: 45 },
        { name: '크림라떼', kcal: 50 }
    ]

    res.send(cof)
})

app.post("/tokens/phone", function(req, res){
    const {myPhone} = req.body;
    console.log(myPhone)

   // 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
   const isValid = checkPhone(myPhone) // argument
   if(isValid === false) return
  
   // 2. 핸드폰 토큰(인증번호) 6자리 만들기
   const myToken = getToken()

   // 3. 핸드폰 번호에 토큰 전송하기
   sendTokenToSMS(myPhone, myToken)

   res.send("인증완료!!!")
    
})


app.post("/users", (req, res) => {
    const {name, age, school, email} = req.body

        // 1. 이메일이 정상인지 확인 (1-존재여부, 2-'@'포함여부)
        const isValid = checkEmail(email)
        if(isValid === false) {
            return // 함수 종료
        }
        // 2. 가입환영 템플릿 만들기
        const myTemplate = getWelcomeTemplate({name, age, school, email})
    
        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(email, myTemplate)

        res.send("가입완료!!!")


})

app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!")
  })






