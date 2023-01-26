import { Token } from "../../models/token.model.js";

export class TokenService {
  getTokenDocument = async ({ phone }) => {
    return await Token.findOne().where({ phone });
  };

  checkTokenDocument = async ({ phone }) => {
    const savedTokenDocument = await this.getTokenDocument({ phone });
    console.log(`저장토큰확인: ${savedTokenDocument}`);

    if (!savedTokenDocument || !savedTokenDocument.isAuth) return false;
    else return true;
  };

  checkTokenDocumentInDB = async ({ phone }) => {
    const savedTokenDocument = await this.getTokenDocument({ phone });
    if (!savedTokenDocument) {
      console.log("저장된 토큰 도큐먼트가 없음!!😡😡😡");
      return false;
    } else {
      console.log("저장된 토큰 도큐먼트가 있음!!😆😆😆");
      return true;
    }
  };

  createSaveTokenDocument = async ({ phone, token }) => {
    const tokenDocument = new Token({
      phone,
      token,
      isAuth: false,
    });
    const savedDocument = await tokenDocument.save();
    console.log(`생성한 토큰 저장여부확인: ${savedDocument}`);
  };

  updateTokenDocument = async ({ phone, token, isAuth = false }) => {
    console.log(
      `토큰 업데이트: ${await Token.findOneAndUpdate(
        { phone },
        { token, isAuth }
      )}`
    );
  };

  checkTokenIsSame = ({ token, savedToken }) => {
    if (token !== savedToken) {
      console.log("저장 토큰과 입력 토큰이 일치하지 않음!😡😡😡😡😡");
      return false;
    }

    console.log("저장 토큰과 입력 토큰이 일치함!😙😙😙😙😙");
    return true;
  };
}
