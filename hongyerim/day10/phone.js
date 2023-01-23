import coolsms from "coolsms-node-sdk";

const mysms = coolsms.default;

export function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러 발생!! 번호를 제대로 입력해주세요.");
    return false;
  }
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}

export async function sendTokenToSMS(myPhone, myToken) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;

  const messageService = new mysms(SMS_KEY, SMS_SECRET);

  const sendMessage = await messageService.sendOne({
    to: myPhone,
    from: SMS_SENDER,
    text: `[핸드폰 인증 토큰 테스트] 안녕하세요. 요청하신 인증번호는 ${myToken} 입니다`,
  });
  return sendMessage;
}

export const message = (myphone) => {
  const first = myphone.slice(0, 3);
  const mid = myphone.slice(3, 7);
  const last = myphone.slice(7);

  return `${first}-${mid}-${last}`;
};
