import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID, // 구글 clientID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // 구글 client secret,
      callbackURL: process.env.GOOGLE_CALLBACK_URL, // GET 과 동일한 URL,
      scope: ['profile', 'email'],
    });
  }

  validate(accessToken, refreshToken, profile) {
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');
    console.log(`JwtGoogleStrategy validate accessToken`);
    console.log(accessToken);
    console.log(`JwtGoogleStrategy validate refreshToken`);
    console.log(refreshToken);
    console.log(`JwtGoogleStrategy validate profile`);
    console.log(profile);
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');

    // req.user 안에 리턴 값이 들어감
    return {
      name: profile.displayName,
      email: profile.emails[0].value,
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
