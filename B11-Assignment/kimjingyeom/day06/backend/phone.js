import coolsms from "coolsms-node-sdk";
import "dotenv/config";
const mysms = coolsms.default;

export function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러발생!!! 핸드폰번호를 제대로 입력해주세요");
    return false; //Early-exit 패턴
  } else {
    return true;
  }
}
export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export async function sendTokenToSMS(myPhone, result) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;
  console.log(SMS_SECRET); //undefined
  const messageService = new mysms(SMS_KEY, SMS_SECRET);
  const res = await messageService.sendOne({
    to: myPhone,
    from: SMS_SENDER,
    text: `[코드캠프]안녕하세요 요청하신 인증번호는 ${result} 입니다.`,
  });
  console.log(res);
  console.log(SMS_KEY);
  console.log(SMS_SECRET); //undefined가 나오고 있어
  console.log(SMS_SENDER); // 못받아오고 있어. 받아오지 못하는게 문제야
}
