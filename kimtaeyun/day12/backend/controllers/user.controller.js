import { UserService } from "./services/user.services.js";
import { TokenService } from "./services/token.services.js";
import { EmailService } from "./services/email.services.js";

export class UserController {
  getUsers = async (_, res) => {
    const userService = new UserService();
    return res.status(200).send(await userService.getAllUsers());
  };

  signUpUser = async (req, res) => {
    const { name, email, personal, prefer, pwd, phone } = req.body;
    const tokenService = new TokenService();

    if (!(await tokenService.checkTokenDocument({ phone }))) {
      // 핸드폰 번호가 없거나, isAuth가 false라면 422 상태코드와 함께 에러 문구 반환
      return res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다.");
    }

    const emailService = new EmailService();
    if (!emailService.checkEmail({ email })) {
      return res.status(422).send("에러!! 이메일 형식이 올바르지 않습니다.");
    }

    const userService = new UserService();
    const og = await userService.getOgContent({ prefer });
    const _id = await userService.createSaveUserDocument({
      name,
      email,
      personal,
      prefer,
      pwd,
      phone,
      og,
    });
    const welcomeTemplate = emailService.createWelcomeTemplate({
      name,
      phone,
      prefer,
    });
    emailService.sendWelcomeTemplateToEmail({ name, email, welcomeTemplate });

    return res.status(200).send(_id);
  };
}
