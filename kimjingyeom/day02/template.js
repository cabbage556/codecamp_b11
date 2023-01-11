import {
  checkEmail,
  makingBlur,
  makingTemplate,
  sendWelcomeTemplateToEmail,
} from "./utils.js";

function createUser({ email, resisterNumber, phoneNumber, loveSite }) {
  //   console.log(email);
  //1.이메일이 정상인지 확인(1-존재 여부,2-"@"포함여부)
  const isValid = checkEmail({ email });
  if (isValid === false) return;
  //2. 주민번호 블러처리
  const getNumber = makingBlur({ resisterNumber });

  //3.가입환영 템플릿 만들기
  const getTemplate = makingTemplate({
    email,
    getNumber,
    phoneNumber,
    loveSite,
  });
  //4.이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail(email, getTemplate); ///이부분복습
}

const email = "id@gmail";
const resisterNumber = "210510-1010101";
const phoneNumber = "010-1234-5678";
const loveSite = "codeCamp.co.kr";

createUser({ email, resisterNumber, phoneNumber, loveSite });
