import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache, //
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.TOKEN_SECRET_KEY,
      passReqToCallback: true,
    });
  }

  async validate(req, payload) {
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.dir(req.headers.authorization);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.dir(payload);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const accessToken = req.headers.authorization.replace('Bearer ', '');
    const cachedAccToken = await this.cacheManager.get(
      `accessToken:${accessToken}`,
    );

    if (cachedAccToken) {
      throw new UnauthorizedException();
    }

    return {
      id: payload.sub,
    };
  }
}
