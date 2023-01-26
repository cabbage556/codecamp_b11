import {
  getAllUsers,
  getOgContent,
  createSaveUserDocument,
} from "./services/user.services.js";
import { checkTokenDocument } from "./services/token.services.js";
import {
  checkEmail,
  createWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./services/email.services.js";

export class UserController {
  getUsers = async (_, res) => {
    return res.status(200).send(await getAllUsers());
  };

  signUpUser = async (req, res) => {
    const { name, email, personal, prefer, pwd, phone } = req.body;

    if (!(await checkTokenDocument({ phone }))) {
      // 핸드폰 번호가 없거나, isAuth가 false라면 422 상태코드와 함께 에러 문구 반환
      return res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다.");
    }

    if (!checkEmail({ email })) {
      return res.status(422).send("에러!! 이메일 형식이 올바르지 않습니다.");
    }

    const og = await getOgContent({ prefer });
    const _id = await createSaveUserDocument({
      name,
      email,
      personal,
      prefer,
      pwd,
      phone,
      og,
    });
    const welcomeTemplate = createWelcomeTemplate({ name, phone, prefer });
    sendWelcomeTemplateToEmail({ name, email, welcomeTemplate });

    return res.status(200).send(_id);
  };
}
