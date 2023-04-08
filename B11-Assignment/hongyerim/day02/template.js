import {
  checkEmail,
  customRegistrationNumber,
  checkPhone,
  checkSite,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./index.js";

function createUser({ name, email, regNumber, phone, favSite }) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  // 1-1. 주민번호가 정상인지 확인()
  const isReg = customRegistrationNumber(regNumber);
  if (isReg === false) return;

  // 1-2. 휴대폰번호가 정상인지 확인
  const isPhone = checkPhone(phone);
  if (isPhone === false) return;

  // 1-3. 사이트주소가 정상인지 확인 :: 콘솔로그로 임시대체
  const isSite = checkSite(favSite);

  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({
    name,
    email,
    regNumber,
    phone,
    favSite,
  });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, myTemplate);
}

const name = "코드캠프";
const email = "aaa@fdsffas.com";
const regNumber = "210510-1010101";
const phone = "01012345678";
const favSite = "www.codecamp.com";

createUser({ name, email, regNumber, phone, favSite });
