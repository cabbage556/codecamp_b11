import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { Phone } from './models/token.model.js';
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';
dotenv.config();

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.post('/tokens/phone', async (req, res) => {
    let { phone } = req.body;
    phone = phone.split('-').join('');
    const phoneToken = await Phone.findOne({ phone });
    const token = getToken();
    sendTokenToSMS(phone, token);

    if (!phoneToken) {
        const isValid = checkPhone(phone);
        if (isValid === false) return;
        new Phone({ token, phone, isAuth: false }).save();
    } else {
        await Phone.updateOne({ phone }, { token });
    }

    res.send(`${phone}으로 인증 문자가 전송되었습니다.`);
});

app.patch('/tokens/phone', async (req, res) => {
    let { phone, token } = req.body;
    phone = phone.split('-').join('');

    const tokenCking = await Phone.findOne({ phone });

    if (tokenCking && tokenCking.token === token) {
        await Phone.update({ phone }, { token, isAuth: true });
        return res.send('true');
    } else {
        return res.send('false');
    }
});

mongoose
    .connect('mongodb://phone-database:27017/myPhone')
    .then(() => {
        console.log('🐶 DB접속!!');
    })
    .catch(() => {
        console.log('⛔️ DB접속 실패!');
    });

app.listen(port, () => {
    console.log('🐶 백엔드 API 서버가 켜졌어요!!');
});
