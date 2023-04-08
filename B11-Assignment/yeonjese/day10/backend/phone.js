//퍼사드 패턴으로 리팩토링
//1. 번호검증 함수
//2. 토큰함수
//3. 전송함수
import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;

export function checkPhone(myphone) {
  if (myphone.length > 11 || myphone.length < 10) {
    console.log("번호잘못됨");
    return false;
  } else return true;
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export async function sendTokenToSMS(myphone, myToken) {
  const messageService = new mysms(process.env.SMS_KEY, process.env.SMS_SEC);
  try {
    const res = await messageService.sendOne({
      to: myphone,
      from: "01041892549",
      text: `[코캠] 안녕 요청한 인증번호는 ${myToken}입니다`,
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
