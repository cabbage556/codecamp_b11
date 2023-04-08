import { Token } from "./models/token.model.js";

export const checkDocument = async ({ phone }) => {
  const savedDocument = await Token.findOne().where({ phone });
  console.log(`토큰 도큐먼트 저장확인: ${savedDocument}`);
  return savedDocument;
};

export const createSaveTokenDocument = async ({ phone, token }) => {
  const tokenDocument = new Token({
    phone,
    token,
    isAuth: false,
  });
  const savedDocument = await tokenDocument.save();
  console.log(`생성한 토큰 저장여부확인: ${savedDocument}`);
};

export const updateTokenDocument = async ({ phone, token, isAuth = false }) => {
  console.log(
    `토큰 업데이트: ${await Token.findOneAndUpdate(
      { phone },
      { token, isAuth }
    )}`
  );
};

export const checkTokenIsSame = ({ token, savedToken }) => {
  if (token !== savedToken) {
    console.log("저장 토큰과 입력 토큰이 일치하지 않음!😡😡😡😡😡");
    return false;
  }

  console.log("저장 토큰과 입력 토큰이 일치함!😙😙😙😙😙");
  return true;
};
