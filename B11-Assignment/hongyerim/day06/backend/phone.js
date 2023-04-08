import coolsms from "coolsms-node-sdk";
import axios from "axios";
const mysms = coolsms.default;

export function checkPhone(myPhone) {
  console.log(myPhone);
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export async function sendTokenToSMS(myPhone, myToken) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;

  const messageService = new mysms(SMS_KEY, SMS_SECRET);

  const message = await messageService.sendOne({
    to: myPhone,
    from: SMS_SENDER,
    text: `[코드캠프테스트] 안녕하세요. 요청하신 인증번호는 ${myToken} 입니다`,
  });
  return message;

  // console.log(myPhone + "번호로 인증번호" + res + "를 전송합니다.");
}
