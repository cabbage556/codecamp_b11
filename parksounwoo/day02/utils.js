export function checkEmail(email) {
    if (!email.includes('@') || email === undefined) {
        console.log('에러 발생!! 핸드폰 번호를 올바르게 입력해 주세요!!!');
        return false;
    } else {
        return true;
    }
}

export function checkPhon(phone) {
    phone = phone.split('-').join('');
    if (phone.length < 10 || phone.length > 11) {
        console.log('에러 발생!! 핸드폰 번호를 올바르게 입력해 주세요!!!');
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name, email, uniqueNumber, phone, mysite }) {
    const first = uniqueNumber.split('-')[0];
    const last = uniqueNumber.split('-')[1].split('')[0] + '*'.repeat(6);
    const newUniqeNumber = `${first}-${last}`;
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이메일 : ${email}</div>
                <div>주민번호 : ${newUniqeNumber}</div>
                <div>휴대폰번호 : ${phone}</div>
                <div>내가 좋아하는 사이트 : ${mysite}</div>
            </body>
        </html>
    `;
    return myTemplate;
}

export function sendTemplateToEmail({ myTemplate, email }) {
    console.log(`${email}이메일로 가입환영텝플릿${myTemplate}를 전송합니다.`);
}
