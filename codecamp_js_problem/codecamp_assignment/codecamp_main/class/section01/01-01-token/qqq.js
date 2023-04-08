console.log("안녕하세요:)");

// 토큰 생성 함수
function getToken() {
  // 6자리 토큰 생성
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
}

getToken();
