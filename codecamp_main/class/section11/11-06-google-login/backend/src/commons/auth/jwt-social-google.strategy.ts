import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  // constructor에서 인증 과정 진행
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID, // 구글 clientID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // 시크릿코드 아님! (노션 참고)
      callbackURL: 'http://localhost:3000/login/google', // GET loginGoogle과 동일한 URL
      scope: ['email', 'profile'], // 프로필에서 어떤 걸 받고 싶은지 범위를 지정함
    });
  }

  // constructor의 인증 과정 성공 시 validate 실행
  // 인증 성공 시 구글에서 넘겨주는 accessToken, refreshToken, profile을 받아온다.(ppt 7번)
  validate(accessToken, refreshToken, profile) {
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');
    console.log(`구글 인증 과정 성공!`);
    console.log(`JwtGoogleStrategy validate accessToken`);
    console.log(accessToken);
    console.log(`JwtGoogleStrategy validate refreshToken`);
    console.log(refreshToken);
    console.log(`JwtGoogleStrategy validate profile`);
    console.log(profile);
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');

    // 📌📌📌📌req.user 안에 리턴 값이 들어간다.📌📌📌📌
    return {
      name: profile.displayName,
      email: profile.emails[0].value,
      hashedPassword: '1234',
      age: 0,
    };
  }
}
