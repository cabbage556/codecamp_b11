import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import { kakaoStrategy } from 'passport-kakao'; // kakao 기반 인가
// import { naverStrategy } from 'passport-naver'; // naver 기반 인가
// import { googleStrategy } from 'passport-google'; // google 기반 인가

// Strategy => JWT 기반 인가(전략 패턴의 부품)
// PassportStrategy => JWT 기반 인가 처리 담당(전략 패턴의 몸통)
//    // 1. 비밀키 검증
//    // 2. 만료시간 검증
//    // => 검증 실패 시 바로 에러 반환
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'myAuth') {
  constructor() {
    // 부모 클래스 PassportStrategy에 액세스토큰, 비밀키를 넘겨 검증 진행
    super({
      // jwtFromRequest: (req) => {
      //   // req: @UseGuards에 들어온 http 요청
      //   const temp = req.headers.Authorization; // Bearer dfkdkajfk... ('Bearer ' + '액세스토큰')
      //   const accessToken = temp.toLowerCase().replace('bearer ', '');
      //   return accessToken;
      // }, // 액세스토큰
      //
      // 위 방법을 제공해주는 라이브러리
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '나의비밀번호', // 비밀키
    });
  }

  // 액세스토큰 검증이 완료되면 payload가 매개변수에 인자로 들어온다.
  validate(payload) {
    console.log(payload); // { sub: user.id }

    return {
      id: payload.sub, // => req.user = { id: payload.sub }
    };
  }
}
