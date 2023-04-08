import { getToday } from "./utils.js"
import nodemailer from 'nodemailer'

export function checkEmail(email){
    if(email === undefined || email.includes("@")=== false){
        console.log("이메일 올바르지 않음")
        return false
    } else {
        return true
    }
}

// css 최신문법 사용하지 않기 // 각기 브라우저마다 적용하는 방식 다름
export function makeTemplate(name,age,school) {
    const myTemplate = `
    <html>
        <body>
            <div>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div style="color:red;">이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${getToday()}</div>
            </div>
        </body>
    </html>
    `
    return myTemplate
}

export async function sendTemplateToEmail(email, template){
    const EMAIL_ID = process.env.EMAIL_ID
    const EMAIL_PW = process.env.EMAIL_PW
    
    const transporter = nodemailer.createTransport({

        service : "gmail",
        auth : {
            user : EMAIL_ID,
            pass : EMAIL_PW
        }
    })

    const res = await transporter.sendMail({
        from: "jw9491@gmail.com",
        to : email,
        subject : "가입을 축하합니당",
        html : template
    })
    console.log(res)



    // console.log(`${email} 이메일로, 가입환영 탬플릿 ${template} 전송합니다.`)
}