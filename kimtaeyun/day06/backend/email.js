import { getToday } from "./utils.js";
import nodemailer from "nodemailer";

export const checkEmail = function ({ email }) {
  if (email === undefined || email === "" || !email.includes("@")) {
    console.log("에러 발생!! 이메일을 제대로 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
};

export const createWelcomeTemplate = function ({
  name,
  phoneNumber,
  favoriteSite,
}) {
  // 템플릿은 구버전 html, css를 사용해야 함 => 최신 html, css가 적용되지 않는 이메일이 존재하므로 최신 문법 사용하지 않기
  const welcomeTemplate = `
  <html>
    <body>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div style="width: 500px;">
          <h1>${name}님 가입을 환영합니다!!!</h1>
          <hr>
          <div>이름: ${name}</div>
          <div>전화번호: ${phoneNumber}</div>
          <div>좋아하는 사이트: ${favoriteSite}</div>
          <div>가입일: ${getToday()}</div>
        </div>
      </div>
    </body>
  </html>
  `;

  return welcomeTemplate;
};

export const sendWelcomeTemplateToEmail = async function ({
  name,
  email,
  welcomeTemplate,
}) {
  const mailSubject = "가입을 환영합니다^^";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // .env 환경변수 파일에서 가져오기
      user: `${process.env.GMAIL_SENDER}`,
      pass: `${process.env.GMAIL_PASSWORD}`, // 2차 비밀번호
    },
  });

  const res = await transporter.sendMail({
    from: `${process.env.GMAIL_SENDER}`,
    to: `${email}`,
    subject: `${mailSubject}`,
    html: welcomeTemplate,
  });
  console.log(res);

  console.log(
    `${name}님의 이메일 ${email}로 가입환영 템플릿 ${welcomeTemplate}을 전송했습니다!`
  );
};
