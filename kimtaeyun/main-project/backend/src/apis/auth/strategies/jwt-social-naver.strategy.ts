import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-naver-v2';

export class JwtNaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor() {
    super({
      clientID: process.env.NAVER_CLIENT_ID, // 네이버 clientID
      clientSecret: process.env.NAVER_CLIENT_SECRET, // 네이버 client secret,
      callbackURL: process.env.NAVER_CALLBACK_URL, // GET과 동일한 URL,
      scope: ['email', 'name'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');
    console.log(`JwtNaverStrategy validate accessToken`);
    console.log(accessToken);
    console.log(`JwtNaverStrategy validate refreshToken`);
    console.log(refreshToken);
    console.log(`JwtNaverStrategy validate profile`);
    console.log(profile);
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');

    return {
      name: profile.name,
      email: profile.email,
      password: '1234',
      phone: null,
      address: null,
      detailAddress: null,
      latestAddress: null,
      latestDetailAddress: null,
      createdAt: `${new Date()}`,
      deletedAt: null,
    };
  }
}
