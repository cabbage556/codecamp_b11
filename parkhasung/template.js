function masking(userNumber) {
    let arr = [...userNumber];
    for (let i = 0; i < userNumber.length; i++) {
        if (i > 7) {
            arr[i] = "*";
        }
    }
    return arr.join("");
}

function welcomeTemplate({ name, email, userNumbermask, phone, mysite }) {
    //1.이메일, 주민번호, 휴대폰 번호, 내가 좋아하는 사이트
    const mytemplate = `
<html>
<body>
<h1>${name}님 가입을 환영합니다!!!</h1>
<hr/>
<div>이메일: ${email}</div>
<div>주민번호: ${userNumbermask}</div>
<div>전화번호: ${phone}</div>
<div>내가좋아하는사이트:${mysite}</div>
</body>
</html>

`;
    console.log(mytemplate);
}
const name = "박하성";
const email = "wjdiedjfijw@naver.com";
const userNumber = "210510-1010101";
const phone = "010-0000-0000";
const mysite = "codebootcamp.co.kr";
const userNumbermask = masking(userNumber);

welcomeTemplate({ name, email, userNumbermask, phone, mysite });
