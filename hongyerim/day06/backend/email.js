import nodemailer from "nodemailer";
import { getToday } from "./utils.js";

export function checkEmail(myEmail) {
  console.log(myEmail);
}

export function getWelcomeTemplate({ name, age, school }) {
  const myTemplate = `
          <html>
              <body>
                  <h1>${name}님 가입을 환영합니다!!!</h1>
                  <hr />
                  <div>이름: ${name}</div>
                  <div>나이: ${age}</div>
                  <div>학교: ${school}</div>
                  <div>가입일: ${getToday()}</div>
              </body>
          </html>
      `;

  return myTemplate;
}

export async function sendTemplateToEmail(myEmail, myTemplate) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, //보내는 이메일 - 개인정보 하드코딩 안 되게 주의
      pass: process.env.EMAIL_PASS, //보내는 이메일이 지메일인 경우, 앱 패스워드 입력 - 개인정보 하드코딩 안 되게 주의
    },
  });

  const res = await transporter.sendMail({
    from: process.env.EMAIL_SENDER,
    to: myEmail,
    subject: "[코드캠프] 테스트메일 발송 성공",
    html: myTemplate,
  });

  console.log(res);

  // console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.");
}
