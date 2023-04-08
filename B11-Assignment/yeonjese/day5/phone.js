//퍼사드 패턴으로 리팩토링
//1. 번호검증 함수
//2. 토큰함수
//3. 전송함수

export function checkPhone(myPhone) {
  if (myPhone.length > 11 || myPhone.length < 10) {
    console.log("번호잘못됨");
    return false;
  } else return true;
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export function sendTokenToSMS(myPhone, myToken) {
  console.log(`${myPhone}로 인증번호 ${myToken}를 전송함`);
}

// function createTokenOfPhone(myPhone) {
//   if (myPhone.length === 11 || myPhone.length === 10) {
//     const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//     console.log(result);
//     console.log(`${myPhone}로 인증번호 ${result}를 전송함`);
//   } else console.log("폰번호제대로입력하세요!!");
// }

// createTokenOfPhone("0101234225");
