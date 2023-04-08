import coolsms from "coolsms-node-sdk";

export const checkPhone = ({ phone }) => {
  if (phone.length < 10 || phone.length > 11) {
    console.log("에러 발생! 휴대폰번호를 제대로 입력해 주세요!");
    return false;
  } else {
    return true;
  }
};

export const getToken = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(`생성된 토큰: ${token}`);
  return token;
};

const mySMS = coolsms.default;

export const sendTokenToSMS = async ({ phone, token }) => {
  const msgService = new mySMS(process.env.SMS_KEY, process.env.SMS_SECRET);
  const msg = await msgService.sendOne({
    to: phone,
    from: process.env.SMS_SENDER,
    text: `[11일차 과제] 요청 인증번호: ${token}`,
  });
  console.log(`${phone}로 인증번호 ${token} 전송!`);
  console.log(msg);
};
