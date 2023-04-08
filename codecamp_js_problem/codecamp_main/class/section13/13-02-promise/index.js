const fetchData = async () => {
  // API 요청

  // 프로미스를 반환하지 않는데, 실행이 오래 걸리는 함수를 기다리려면?
  // new Promise 내부에 실행이 오래 걸리는 함수를 넣는다.

  // axios라고 가정하기
  const result = await new Promise((성공시실행함수, 실패시실행함수) => {
    // 프로미스 내부에 실행이 오래 걸리는 코드를 넣는다.
    setTimeout(() => {
      try {
        console.log("⭐️⭐️이미지 받아왔음⭐️⭐️"); // 5초 뒤에 이미지 받아옴
        성공시실행함수("image.jpg"); // 성공 시 result에 '성공시실행함수'에 전달한 값이 담긴다.
      } catch (error) {
        실패시실행함수("😡😡이미지 받아오기 실패!!😡😡"); // 실패 시 result에 '실패시실행함수'에 전달한 값이 담긴다.
      }
    }, 5000);
  });

  console.log(result);
  console.log("받아온 image.jpg 브라우저에 전달");
};

fetchData();
