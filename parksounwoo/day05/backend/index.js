import express from 'express';

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

app.listen(port, () => {
    console.log('🐶 백엔드 API 서버가 켜졌어요!!');
});
