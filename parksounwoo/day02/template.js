function getWelcomeTemplate({ name, email, uniqueNumber, phone, mysite }) {
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이메일 : ${email}</div>
                <div>주민번호 : ${uniqueNumber}</div>
                <div>휴대폰번호 : ${phone}</div>
                <div>내가 좋아하는 사이트 : ${mysite}</div>
            </body>
        </html>
    `;
    console.log(myTemplate);
}

const name = '코드캠프';
const email = 'test@test.com';
const uniqueNumber = '123456 - 1*******';
const phone = '010-1234-5678';
const mysite = 'codecamp.co.kr';

getWelcomeTemplate({ name, email, uniqueNumber, phone, mysite });
