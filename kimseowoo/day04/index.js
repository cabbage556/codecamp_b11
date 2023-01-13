import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

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

app.listen(3000)






