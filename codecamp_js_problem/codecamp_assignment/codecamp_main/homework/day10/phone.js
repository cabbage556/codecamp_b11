import coolsms from "coolsms-node-sdk";

export const checkPhone = (phoneNumber) => {
  if (phoneNumber.length < 10 || phoneNumber.length > 11) {
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

export const sendTokenToSMS = async (phoneNumber, result) => {
  const msgService = new mySMS(process.env.SMS_KEY, process.env.SMS_SECRET);
  const msg = await msgService.sendOne({
    to: phoneNumber,
    from: process.env.SMS_SENDER,
    text: `[10일차 과제] 요청 인증번호: ${result}`,
  });
  console.log(`${phoneNumber}로 인증번호 ${result} 전송!`);
  console.log(msg);
};

export const formatPhone = ({ phone }) => {
  return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(
    7,
    phone.length
  )}`;
};
