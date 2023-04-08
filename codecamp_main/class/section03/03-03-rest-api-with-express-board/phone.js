// export => 골라서 가져올 수 있음
export function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러 발생! 휴대폰번호를 제대로 입력해 주세요!");
    return false;
  } else {
    return true;
  }
}

// export => 골라서 가져올 수 있음
export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

// export default => 기본적으로 가져옴, 한번만 사용 가능하므로 import 할 때 이름 변경 가능
export default function sendTokenToSMS(myPhone, result) {
  console.log(`${myPhone} 번호로 인증번호 ${result} 전송!`);
}
