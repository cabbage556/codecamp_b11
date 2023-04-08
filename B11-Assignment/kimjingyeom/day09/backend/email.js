import { getToday } from "./utils.js";
import nodemailer from "nodemailer";

export function checkEmail(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!!! 이메일 주소를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
}

export function makingTemplate({ name, phone, loveSite, email }) {
  const myTemplate = `
      <html>
          <body>
          <div style="display:flex; flex-direction:column; align-items:cneter">
            <div style="width:500px;">
              <h1>${name}님 가입을 환영합니다!!!</h1>
              <hr/>
              <div style="color:red">이름: ${name}</div>
              <div>전화번호: ${phone}</div>
              <div>좋아하는 사이트: ${loveSite}}</div>
              <div>가입일: ${getToday()}</div>
            </div>
            </div>
          </body>
      </html>
      
      `;
  //   console.log(mytemplate)
  return myTemplate;
}

export async function sendWelcomeTemplateToEmail(email, myTemplate) {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const res = await transporter.sendMail({
    from: EMAIL_SENDER,
    to: email,
    subject: "[코드캠프]가입을 축하합니다!!!",
    html: myTemplate,
  });
  console.log(res);
  // console.log(
  //   email + "이메일로 가입환영템플릿" + myTemplate + "룰 전송합니다."
  // );
}
