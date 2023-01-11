import { getCreateAt } from "./date.js";

export function checkEmail({ email }) {
  console.log(email);
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!!! 이메일 주소를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
}

export function makingBlur({ resisterNumber }) {
  const sliceNumber = resisterNumber.slice(0, 8);
  // console.log(sliceNumber);
  const EndNumber = String(sliceNumber.padEnd(14, "*"));
  return EndNumber;
}

export function makingTemplate({ email, getNumber, phoneNumber, loveSite }) {
  const myTemplate = `
      <html>
          <body>
              <h1>철수님 가입을 환영합니다!!!</h1>
              <hr/>
              <div>이메일: ${email}</div>
              <div>주민번호: ${getNumber}</div>
              <div>휴대폰 번호: ${phoneNumber}</div>
              <div>내가 좋아하는 사이트: ${loveSite}</div>
              <div>가입일: ${getCreateAt()}</div>
          </body> 
      </html>
      
      `;
  console.log(myTemplate);
  return myTemplate;
}

export function sendWelcomeTemplateToEmail({ email, myTemplate }) {
  console.log(
    { email } + "이메일로 가입환영템플릿" + myTemplate + "룰 전송합니다."
  );
}
