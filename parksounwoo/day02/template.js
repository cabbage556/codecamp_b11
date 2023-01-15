import {
    checkEmail,
    checkPhon,
    getWelcomeTemplate,
    sendTemplateToEmail,
} from './utils.js';

function createUser({ name, email, uniqueNumber, phone, mysite }) {
    // 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
    const isValid = checkEmail(email);
    if (isValid === false) return;

    // 휴대폰 번호 체크
    const isPhon = checkPhon(phone);
    if (isPhon === false) return;

    // 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, email, uniqueNumber, phone, mysite });

    // 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail({ myTemplate, email });
}

const name = '코드캠프';
const email = 'test@test.com';
const uniqueNumber = '123456-1234567';
const phone = '010-1234-5678';
const mysite = 'codecamp.co.kr';

createUser({ name, email, uniqueNumber, phone, mysite });
