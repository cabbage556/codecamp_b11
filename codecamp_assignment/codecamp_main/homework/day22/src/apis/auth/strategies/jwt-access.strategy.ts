import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'myAuth') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: `${process.env.TOKEN_SECRET_KEY}`,
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
