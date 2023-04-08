import { getToday } from "./utils.js";

export const checkEmail = function ({ email }) {
  if (email === undefined || email === "" || !email.includes("@")) {
    console.log("에러 발생!! 이메일을 제대로 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
};

export const createWelcomeTemplate = function ({ name, age, school }) {
  const welcomeTemplate = `
  <html>
    <body>
      <h1>${name}님 가입을 환영합니다!!!</h1>
      <hr>
      <div>이름: ${name}</div>
      <div>나이: ${age}</div>
      <div>학교: ${school}</div>
      <div>가입일: ${getToday()}</div>
    </body>
  </html>
  `;

  return welcomeTemplate;
};

export const sendWelcomeTemplateToEmail = function ({
  name,
  email,
  welcomeTemplate,
}) {
  console.log(
    `${name}님의 이메일 ${email}로 가입환영 템플릿 ${welcomeTemplate}을 전송했습니다!`
  );
};
