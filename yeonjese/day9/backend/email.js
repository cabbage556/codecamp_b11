import { getToday } from "./utils.js";
import nodemailer from "nodemailer";

export function checkEmail(email) {
  if (email && email.includes("@")) return true;
  else {
    console.log("잘못된 메일");
    return false;
  }
}

export function getWelcomeTemplate({ name, prefer, myphone }) {
  const myTemplate = `
                <html>
                    <body>
                        <h1>${name} 가입 환영</h1>
                        <hr />
                        <div>이름: ${name}</div>
                        <div>폰: ${myphone}</div>
                        <div>선호사이트: ${prefer}</div>
                        <div>가입일: ${getToday()}</div>
                    </body>
                </html>
                `;

  // console.log(myTemplate);
  return myTemplate;
}

export async function sendEmail(email, myTemplate) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jsyeon182@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  const res = await transporter.sendMail({
    from: "jsyeon182@gmail.com",
    to: email,
    subject: "코캠가입축하",
    html: myTemplate,
  });
  console.log(res);
}
