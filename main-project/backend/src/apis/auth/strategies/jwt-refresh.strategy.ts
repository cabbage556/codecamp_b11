import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');
        console.log(req);
        console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');

        // req: @UseGuards에 들어온 http 요청
        const cookie = req.headers.cookie; // refreshToken=lmdfldmfldkamflfald
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      }, // 리프레시토큰
      secretOrKey: process.env.REFRESH_SECRET_KEY, // 비밀키
    });
  }

  validate(payload) {
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.dir(payload);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    return {
      id: payload.sub,
    };
  }
}
