// 인증번호 발급 API 만들기 실습

// 좋지 않은 코드 예시
// if, if 들여쓰기로 코드가 길어지면 읽기가 어려움
// 유지보수가 어려운 코드
// function createTokenOfPhone(qqq) {
//   // parameter: qqq
//   // 1. 휴대폰번호 자릿수 확인(10~11자리)
//   if (qqq.length >= 10) {
//     if (qqq.length <= 11) {
//       // 2. 토큰 6자리 생성
//       const result = String(Math.floor(Math.random() * 1000000)).padStart(
//         6,
//         "0"
//       );
//       console.log(result);

//       // 3. 휴대폰번호로 토큰 6자리 전송
//       console.log(`${qqq} 번호로 인증번호 ${result} 전송!`);
//     } else {
//       console.log("에러 발생! 휴대폰번호를 제대로 입력해 주세요!");
//     }
//   } else {
//     console.log("에러 발생! 휴대폰번호를 제대로 입력해 주세요!");
//   }
// }

// 좋은 코드 예시
// 코드 읽기가 쉽기 때문에 유지보수가 좋은 코드 작성 방법
function createTokenOfPhone(qqq) {
  // parameter: qqq
  // 1. 휴대폰번호 자릿수 확인 (10~11자리)
  // 먼저, 에러가 발생하는 경우를 처리
  // 에러를 뱉고 함수를 종료해서 아래에 위치한 코드가 실행되지 않도록 함: early-exit
  if (qqq.length < 10 || qqq.length > 11) {
    console.log("에러 발생! 휴대폰번호를 제대로 입력해 주세요!");
    return;
  }

  // 2. 토큰 6자리 생성
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);

  // 3. 휴대폰번호로 토큰 6자리 전송
  console.log(`${qqq} 번호로 인증번호 ${result} 전송!`);
}

createTokenOfPhone("01012345678"); // argument: 유저 휴대폰번호
