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

    const phones = await Phone.findOne({ phone });
    const token = getToken();
    console.log(phones.phone);
    if (!phones.phone) {
        const isValid = checkPhone(phone);
        if (isValid === false) return;

        sendTokenToSMS(phone, token);

        const myphone = new Phone({
            token,
            phone,
            isAuth: false,
        });
        await myphone.save();
    } else {
        sendTokenToSMS(phones.phone, token);

        const a = await Phone.updateOne({ phone: phones.phone }, { token });
        console.log(a);
    }

    res.send(`${phone}으로 인증 문자가 전송되었습니다.`);
});

app.patch('/tokens/phone', async (req, res) => {
    let { phone, token } = req.body;
    phone = phone.split('-').join('');

    const tokenCking = await Phone.findOne({ phone });

    if (!tokenCking) {
        res.send('false');
        return;
    }
    if (tokenCking.token === token) {
        await Phone.update({ phone }, { token, isAuth: true });
        res.send('true');
        return;
    } else {
        res.send('false');
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
