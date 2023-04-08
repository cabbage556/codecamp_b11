// 가입 환영 템플릿 만들기 (이메일, 주민번호, 휴대폰 번호, 내가 좋아하는 사이트)
// html태그가 포함된 텍스트로 콘솔 출력
// 회원가입 템플릿 출력

function joinWelcome({email, userNumber, userPhone, favSite}){
    const welcomeTemplate = `
    <html>
         <body>
            <h1>코드캠프님 가입을 환영합니다.</h1>
            <div>이메일: ${email}</div>
            <div>주민번호: ${userNumber}/div>
            <div>휴대폰 번호: ${userPhone}</div>
            <div>내가 좋아하는 사이트: ${favSite}</div>
        </body>
    </html>
    `
    console.log(welcomeTemplate)
    return welcomeTemplate;
}


const email = 'aaaaaa@gmail.com'
const userNumber = '210510-1******'
const userPhone = '010-0000-0000'
const favSite = 'codeBootCamp.co.kr'

joinWelcome({email, userNumber, userPhone,favSite})