import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-kakao';

export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID, // 카카오 clientID(REST API 키)
      clientSecret: process.env.KAKAO_CLIENT_SECRET, // 카카오 client secret
      callbackURL: process.env.KAKAO_CALLBACK_URL,
      scope: ['profile_nickname', 'account_email'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');
    console.log(`JwtKakaoStrategy validate accessToken`);
    console.log(accessToken);
    console.log(`JwtKakaoStrategy validate refreshToken`);
    console.log(refreshToken);
    console.log(`JwtKakaoStrategy validate profile`);
    console.log(profile);
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');

    return {
      name: profile.username,
      email: profile._json.kakao_account.email,
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
