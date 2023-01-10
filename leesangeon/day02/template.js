const name = "코드캠프";
const email = "support@codebootcamp.co.kr";
const residentNumber = "210510-1******";
const phoneNumber = "000-0000-0000";
const favoriteSite = "codebootcamp.co.kr";

function emailCheck({ email }) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!!! 이메일 주소를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
}

function getWelcomeTemplate({ name, email, residentNumber, phoneNumber, favoriteSite }) {
  const mytemplate = `
  <html>
    <body>
      <h1>${name}님 가입을 환영합니다.</h1>
      <hr>
      <div>이메일 :${email}</div>
      <div>주민번호 :${residentNumber}</div>
      <div>휴대폰 번호 :${phoneNumber}</div>
      <div>내가 좋아하는 사이트 :${favoriteSite}<div>
    </body>
  </html>
  `;
  return mytemplate;
}

function printTemplate({ myTemplate }) {
  console.log(myTemplate);
}

function createUser({ name, email, residentNumber, phoneNumber, favoriteSite }) {
  //1.이메일이 정상인지 확인 (1-존재여부, 2-"@"포함여부)
  const isValid = emailCheck({ email });
  if (isValid === false) return;
  //2.가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, email, residentNumber, phoneNumber, favoriteSite });
  //3. 이메일에 가입환영 및 템플릿 전송하기

  printTemplate({ myTemplate });
}

createUser({ name, email, residentNumber, phoneNumber, favoriteSite });
