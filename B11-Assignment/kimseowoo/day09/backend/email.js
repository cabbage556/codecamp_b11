import { getToday } from "./utils.js"
import nodemailer from "nodemailer";

export function checkEmail(email){
    if(email === undefined || email.includes('@') === false){
        console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}
 
 export function getWelcomeTemplate({SignupName,SignupPersonal,PhoneNumber01,PhoneNumber02,PhoneNumber03,SignupPrefer,SignupEmail}){ // 메일은 아직 구버전 html, css 사용하는 플랫폼이 있기 때문에 최신문법 사용하지 말 것
    const myTemplate = `
        <html>
            <body>
                <div style="display: flex; flex-direction:column; align-items:center;">
                    <div style="width: 500px;">
                        <h1>${SignupName}님 가입을 환영합니다!!!</h1>
                        <hr />
                        <div>이름: ${SignupName}</div>
                        <div style="color: green;">전화번호: ${PhoneNumber01}${PhoneNumber02}${PhoneNumber03}</div>
                        <div style="color: green;">좋아하는 사이트: ${SignupPrefer}</div>
                        <div style="color: red;">가입일: ${getToday()}</div>
                    </div>
                </div>
            </body>
        </html>
    `;
    // console.log(join)
    return myTemplate;
}

export async function sendMy(myEmail, result){
    // const EMAIL_USER = process.env.EMAIL_USER;
    // const EMAIL_PASS = process.env.EMAIL_PASS;
    // const EMAIL_SENDER = process.env.EMAIL_SENDER;
    
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });
    
    let res = await transporter.sendMail({
        from: process.env.EMAIL_SENDER,
        to: myEmail,
        subject: "[코드캠프] 가입을 축하합니다!!!",
        html: result
    })

    console.log(res)

    // console.log(myEmail + "으로" + result + "를 전송합니다.")
}   

// export { checkEmail, getWelcomeTemplate, sendTemplateToEmail }