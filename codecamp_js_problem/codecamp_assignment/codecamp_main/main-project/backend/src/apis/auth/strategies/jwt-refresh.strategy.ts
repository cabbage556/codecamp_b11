import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache, //
  ) {
    super({
      jwtFromRequest: (req) => {
        console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');
        console.log(req);
        console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');

        // req: @UseGuards에 들어온 http 요청
        const cookie = req.headers.cookie; // refreshToken=nrlkrnrklrn~~
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      }, // 리프레시토큰
      secretOrKey: process.env.REFRESH_SECRET_KEY, // 비밀키
      passReqToCallback: true,
    });
  }

  async validate(req, payload) {
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.dir(req.headers.cookie);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.dir(payload);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const refreshToken = req.headers.cookie.replace('refreshToken=', '');
    const cachedRefToken = await this.cacheManager.get(
      `refreshToken:${refreshToken}`,
    );

    if (cachedRefToken) {
      console.error('레디스에 리프레시 토큰이 이미 저장되어 있음');
      throw new UnauthorizedException();
    }

    return {
      id: payload.sub,
    };
  }
}
