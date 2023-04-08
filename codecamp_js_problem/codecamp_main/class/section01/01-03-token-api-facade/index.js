// 인증번호 발급 API 만들기 퍼사드 패턴 리팩토링

function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러 발생! 휴대폰번호를 제대로 입력해 주세요!");
    return false;
  } else {
    return true;
  }
}

function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

function sendTokenToSMS(myPhone, result) {
  console.log(`${myPhone} 번호로 인증번호 ${result} 전송!`);
}

// parameter: myPhone
function createTokenOfPhone(myPhone) {
  // 1. 휴대폰번호 자릿수 확인 (10~11자리)
  // 먼저, 에러가 발생하는 경우를 처리
  // 에러를 뱉고 함수를 종료해서 아래에 위치한 코드가 실행되지 않도록 함: early-exit
  const isValid = checkPhone(myPhone);
  if (!isValid) return;

  // 2. 토큰 6자리 생성
  const myToken = getToken();

  // 3. 휴대폰번호로 토큰 6자리 전송
  sendTokenToSMS(myPhone, myToken);
}

createTokenOfPhone("01012345678"); // argument: 유저 휴대폰번호
