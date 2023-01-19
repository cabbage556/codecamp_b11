import { getToday } from './utils.js';
import nodemailer from 'nodemailer';

export function checkEmail(email) {
    if (!email.includes('@') || email === undefined) {
        console.log('에러 발생!! 이메일을 올바르게 입력해 주세요!!!');
        return false;
    } else {
        return true;
    }
}
export function getWelcomeTemplate({ name, personal, prefer, email, myphone }) {
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름 : ${name}</div>
                <div>전화번호 : ${myphone}</div>
                <div>좋아하는 사이트 : ${prefer}</div>
                <div style="color : red;">가입일 : ${getToday()}</div>
            </body>
        </html>
    `;
    return myTemplate;
}
export async function sendTemplateToEmail({ myTemplate, email }) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const res = await transporter.sendMail({
        from: process.env.EMAIL_SENDER,
        to: email,
        subject: '가입을 환영합니다.^^',
        html: myTemplate,
    });
    console.log(res);
}
