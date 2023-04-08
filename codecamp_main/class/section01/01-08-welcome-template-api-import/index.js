import {
  checkEmail,
  createWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";

const createUser = function ({ name, age, school, email }) {
  // 1. 이메일이 정상인지 확인하기 (존재여부, "@" 포함여부)
  if (!checkEmail({ email })) return;

  // 2. 가입환영 템플릿 만들기
  const welcomeTemplate = createWelcomeTemplate({
    name,
    age,
    school,
  });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail({ name, email, welcomeTemplate });
};

const name = "철수";
const age = 10;
const school = "다람쥐초등학교";
const email = "123@g.c";
createUser({ name, age, school, email });
