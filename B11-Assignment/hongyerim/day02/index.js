// ========== 이메일 체크 ==========
export function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

// ========== 주민번호 체크 ==========
export function checkHyphen(qqq) {
  if (qqq[6] !== "-") {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

export function lengthCheck(aaa) {
  const frontNum = aaa.slice(0, 6);
  const endNum = aaa.slice(7);

  if (frontNum.length !== 6 || endNum.length !== 7)
    console.log("에러 발생!!! 개수를 제대로 입력해주세요!!!");
  return;
}

export function customRegistrationNumber(customerNum) {
  const isHyphen = checkHyphen(customerNum);
  if (isHyphen === false) return;

  const myNumber = lengthCheck(customerNum);
  console.log(myNumber);
  return myNumber;
}

// ========== 핸드폰번호 체크 ==========
export function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러 발생!! 번호를 제대로 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

// ========== 사이트주소 체크 ========== : 콘솔로그로 임시대체
export function checkSite(www) {
  console.log(www);
}

// ========== 가입환영 템플릿 ==========
export function getWelcomeTemplate({ name, email, regNumber, phone, favSite }) {
  const one = phone.slice(0, 3);
  const two = phone.slice(3, 7);
  const three = phone.slice(7);
  const phoneHyphen = `${one}-${two}-${three}`;

  const first = regNumber.slice(0, 6);
  const last = regNumber.slice(7);
  const regNumberMasking = `${first}-${last[0]}******`;

  const myTemplate = `
            <html>
                <body>
                    <h1>${name}님 가입을 환영합니다.</h1>
                    <hr />
                    <div>이메일: ${email}</div>
                    <div>주민번호: ${regNumberMasking}</div>
                    <div>휴대폰 번호: ${phoneHyphen}</div>
                    <div>내가 좋아하는 사이트: ${favSite}</div>
                </body>
            </html>
        `;

  return myTemplate;
}

export function sendTemplateToEmail(myEmail, result) {
  console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.");
}
