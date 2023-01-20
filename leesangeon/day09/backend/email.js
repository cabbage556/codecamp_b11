import { getToday } from "./utils.js";
import nodemailer from "nodemailer";

export function emailCheck(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!! 이메일주소를 제대로 입력해주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, privateNum, myphone, favorite }) {
  //구조분해할당에 의해서
  const mytemplate = `
  <html>
      <body>
          <div style="display: flex; flex-direction: column; align-items: center;">
              <div style="width: 500px;">
                  <h1>${name}님 가입을 환영합니다!!!</h1>
                  <hr />
                  <div style="color: red;">이름: ${name}</div>
                  <div>전화번호: ${myphone}</div>
                  <div>좋아하는 사이트: ${favorite}</div>
                  <div>가입일: ${getToday()}</div>
              </div>
          </div>
      </body>
  </html>
`;

  // console.log(mytemplate)
  return mytemplate;
}
export async function sendTemplateToEmail(myemail, result) {
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
    to: myemail,
    subject: "[코드캠프] 가입을 축하합니다!!!",
    html: result,
  });

  console.log(res);
  // console.log(myemail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.");
}

// import, export 할때
// import를 못알아먹으면 터널에, yarn init 치고 다넘기면
// package.json 생성
// package.json 파일 내용에
// "type" : "module" 입력하면
// import를 인식한다.
