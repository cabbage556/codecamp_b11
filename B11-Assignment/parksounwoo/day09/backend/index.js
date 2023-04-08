import express from 'express';
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';
import mongoose from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', (req, res) => {
    const result = [
        {
            email: 'test@test.com',
            name: '철수',
            phone: '010-1234-5678',
            personal: '120110-1111111',
            prefer: 'https://test.com',
        },
        {
            email: 'test1@test.com',
            name: '영희',
            phone: '010-2234-5678',
            personal: '210110-2222222',
            prefer: 'https://test1.com',
        },
        {
            email: 'test2@test.com',
            name: '은희',
            phone: '010-3234-5678',
            personal: '320110-3333333',
            prefer: 'https://test3.com',
        },
        {
            email: 'test4@test.com',
            name: '훈이',
            phone: '010-4234-5678',
            personal: '420110-4444444',
            prefer: 'https://test4.com',
        },
        {
            email: 'test5@test.com',
            name: '유리',
            phone: '010-5234-5678',
            personal: '520110-5555555',
            prefer: 'https://test5.com',
        },
    ];

    res.send(result);
});

app.get('/starbucks', (req, res) => {
    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라떼', kcal: 10 },
        { name: '콜드브루', kcal: 15 },
        { name: '카페모카', kcal: 50 },
        { name: '돌체라떼', kcal: 500 },
        { name: '카라멜라떼', kcal: 200 },
        { name: '바닐라라떼', kcal: 20 },
        { name: '에스프레소', kcal: 1 },
        { name: '디카페인', kcal: 5 },
        { name: '오토라떼', kcal: 300 },
    ];
    res.send(result);
});

app.post('/tokens/phone', function (req, res) {
    const { myphone } = req.body;
    console.log(myphone);
    // 1. 휴대폰번호 자릿수 확인(10~11자리)
    const isValid = checkPhone(myphone);
    if (isValid === false) return;

    // 2. 핸드폰 토큰 6자리 만들기
    const myToken = getToken();

    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);

    res.send('인증완료');
});

app.post('/users', function (req, res) {
    const { name, personal, prefer, email, myphone } = req.body;
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
    const isValid = checkEmail(email);
    if (isValid === false) return;

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, personal, prefer, email, myphone });

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail({ myTemplate, email });

    res.send('가입완료!');
});

mongoose
    .connect('mongodb://mongodb:27017/MongoDB-connerct')
    .then(() => {
        console.log('🐶 DB접속!!');
    })
    .catch(() => {
        console.log('⛔️ DB접속 실패!');
    });

app.listen(port, () => {
    console.log('🐶 백엔드 API 서버가 켜졌어요!!');
});
