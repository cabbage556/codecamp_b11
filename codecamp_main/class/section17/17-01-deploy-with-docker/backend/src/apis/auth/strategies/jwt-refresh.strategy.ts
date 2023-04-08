import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

// import { kakaoStrategy } from 'passport-kakao'; // kakao 기반 인가
// import { naverStrategy } from 'passport-naver'; // naver 기반 인가
// import { googleStrategy } from 'passport-google'; // google 기반 인가

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    // 부모 클래스 PassportStrategy에 리프레시토큰, 비밀키를 넘겨 검증 진행
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
      secretOrKey: '나의리프레시비밀번호', // 비밀키
    });
  }

  // 액세스토큰 검증이 완료되면 payload가 매개변수에 인자로 들어온다.
  validate(payload) {
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');
    console.log('payload in validate');
    console.log(payload); // { sub: user.id }
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');

    return {
      id: payload.sub, // => req.user = { id: payload.sub }
    };
  }
}
