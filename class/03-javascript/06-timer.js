// 타이머 작동 여부를 판단하는 변수
let isStarted = false;

const auth = () => {

  if (isStarted === false) {
    // 타이머가 작동 중이 아닐때 타이머 작동 시작

    // 타이머가 작동 중이므로 타이머 작동 여부를 true로,
    // 인증완료 버튼을 누를 수 있도록 활성화
    isStarted = true;
    document.getElementById("authComplete").disabled = false;

    // 인증번호 생성, 인증번호 띄우기
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("tokenTarget").innerText = token;
  
    // 타이머 시간 설정 변수, setInterval 할당 변수
    let time = 10;
    let timer;
    
    // setInterval이 변수에 할당되면 setInterval 실행
    timer = setInterval(() => {
  
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timerTarget").innerText = `${min}:${sec}`;
        time -= 1;
      } else {
        console.log("타이머를 종료합니다");

        // 타이머 종료 시 다시 타이머를 시작할 수 있도록 타이머 작동 여부를 false로, setInterval을 종료
        // 인증완료 버튼을 누를 수 없도록 비활성화
        isStarted = false;
        document.getElementById("authComplete").disabled = true;
        clearInterval(timer);
      }
  
    }, 1000);

  } else {
    // 타이머가 작동 중일때
  }

};