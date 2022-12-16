const changeFocusFirstToSecond = () => {
  const firstPhoneNum = document.getElementById("firstPhoneNum").value;

  // 첫번째 칸에서 3자리 입력 시 두번째 칸으로 포커스 이동
  if (firstPhoneNum.length === 3) {
    document.getElementById("secondPhoneNum").focus();
  }
}

const changeFocusSecondToThird = () => {
  const secondPhoneNum = document.getElementById("secondPhoneNum").value;

  // 두번째 칸에서 4자리 입력 시 세번째 칸으로 이동
  if (secondPhoneNum.length === 4) {
    document.getElementById("thirdPhoneNum").focus();
  }
}

const activateTokenSendButton = () => {
  const firstPhoneNum = document.getElementById("firstPhoneNum").value;
  const secondPhoneNum = document.getElementById("secondPhoneNum").value;
  const thirdPhoneNum = document.getElementById("thirdPhoneNum").value;

  // 인증번호 전송 버튼 활성화
  if (firstPhoneNum.length === 3 && secondPhoneNum.length === 4 && thirdPhoneNum.length === 4) {
    const tokenSendButton = document.getElementById("tokenSendButton");
    tokenSendButton.disabled = false;
    tokenSendButton.style.color = "#0068ff";
    tokenSendButton.style.cursor = "pointer";
  }
}

let isTimerStarted = false;
let timer;
const startTimer = () => {
  if (!isTimerStarted) {
    isTimerStarted = true;

    // 토큰 생성하고 보여주기
    generateToken();

    // 인증 완료 버튼 활성화
    activateAuthCompleteButton();

    // 타이머 설정
    let time = 180;
    timer = setInterval(() => {
      if (time >= 0) {
        // 타이머 출력
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timeText").innerText = `${min}:${sec}`;
        time -= 1;
      } else {
        // 타이머 재시작 설정
        isTimerStarted = false;
        time = 10;

        // 인증확인 버튼 비활성화
        deactivateAuthCompleteButton();

        // 토큰 "000000"으로, 시간 "3:00"으로 초기화
        document.getElementById("tokenText").innerText = "000000";
        document.getElementById("timeText").innerText = "3:00";

        // 타이머 종료
        clearInterval(timer);

        console.log("타이머 종료");
      }
    }, 1000);
  } else {
    // 타이머 작동 중
  }
};

const generateToken = () => {
  // 토큰을 생성하고 보여주기
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("tokenText").innerText = token;
}

const activateAuthCompleteButton = () => {
  const authCompleteButton = document.getElementById("authCompleteButton");
  authCompleteButton.disabled = false;
  authCompleteButton.style.backgroundColor = "#0068ff";
  authCompleteButton.style.color = "#ffffff";
  authCompleteButton.style.cursor = "pointer";
}

const deactivateAuthCompleteButton = () => {
  const authCompleteButton = document.getElementById("authCompleteButton");
  authCompleteButton.disabled = true;
  authCompleteButton.style.backgroundColor = "white";
  authCompleteButton.style.color = "#d2d2d2";
  authCompleteButton.style.cursor = "default";
}

const completeAuth = () => {
  const isAuthCompleted = confirm("인증이 완료되었습니다.");

  if (isAuthCompleted) {
    // 인증확인 버튼 내용 변경 후 비활성화
    document.getElementById("authCompleteButton").innerText = "인증완료";
    deactivateAuthCompleteButton();

    clearInterval(timer);

    // 가입하기 버튼 활성화
    document.getElementById("signUp__button").disabled = false;
    document.getElementById("signUp__button").style.cursor = "pointer";
    document.getElementById("signUp__button").style.color = "#0068ff";
    document.getElementById("signUp__button").style.border = "1px solid #0068ff"
  }
}

const checkInputs = () => {
  const email = document.getElementById("emailInput").value;
  const name = document.getElementById("nameInput").value;
  const password1 = document.getElementById("passwordInput1").value;
  const password2 = document.getElementById("passwordInput2").value;
  const regionSelectIndex = document.getElementById("regionSelect").selectedIndex; // (0), 1, 2, 3
  const isWomanSelected = document.getElementById("genderWoman").checked;  // 라디오 버튼 체크 여부 확인
  const isManSelected = document.getElementById("genderMan").checked;      // 라디오 버튼 체크 여부 확인

  // 이메일 에러 메세지 보이기
  if (email === "") {
    document.getElementById("emailError").innerText = "이메일이 올바르지 않습니다."
    document.getElementById("emailError").style.visibility = "visible";
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "@가 포함되어야 합니다."
    document.getElementById("emailError").style.visibility = "visible";
  } else {
    document.getElementById("emailError").style.visibility = "hidden";
  }

  // 이름 에러 메세지 보이기
  if (name === "") {
    document.getElementById("nameError").style.visibility = "visible";
  } else {
    document.getElementById("nameError").style.visibility = "hidden";
  }

  // 비밀번호1 에러 메세지 보이기
  if (password1 === "") {
    document.getElementById("passwordError1").innerText = "비밀번호를 입력해 주세요.";
    document.getElementById("passwordError1").style.visibility = "visible";
  } else if (password1 !== password2) {
    document.getElementById("passwordError1").innerText = "비밀번호1과 비밀번호2가 동일해야 합니다."
    document.getElementById("passwordError1").style.visibility = "visible";
  } else {
    document.getElementById("passwordError1").style.visibility = "hidden";
  }
  
  // 비밀번호2 에러 메세지 보이기
  if (password2 === "") {
    document.getElementById("passwordError2").innerText = "비밀번호를 입력해 주세요.";
    document.getElementById("passwordError2").style.visibility = "visible";
  } else if (password1 !== password2) {
    document.getElementById("passwordError2").innerText = "비밀번호1과 비밀번호2가 동일해야 합니다."
    document.getElementById("passwordError2").style.visibility = "visible";
  } else {
    document.getElementById("passwordError2").style.visibility = "hidden";
  }

  // 지역 선택 에러 메세지 보이기
  if (regionSelectIndex === 0) {
    document.getElementById("regionError").style.visibility = "visible";
  } else {
    document.getElementById("regionError").style.visibility = "hidden";
  }

  // 성별 선택 에러 메세지 보이기
  if (!isWomanSelected && !isManSelected) {
    document.getElementById("genderError").style.visibility = "visible";
  } else {
    document.getElementById("genderError").style.visibility = "hidden";
  }

  // 코드캠프 가입 축하
  if (completeSignUp(email, name, password1, password2, regionSelectIndex, isWomanSelected, isManSelected)) {
    setTimeout(alert("코드캠프 가입을 축하합니다."), 1000);
  }
}

const completeSignUp = (email, name, password1, password2, regionSelectIndex, isWomanSelected, isManSelected) => {
  const isEmailValid = email !== "";
  const isNameValid = name !== "";
  const isPasswordValid = (password1 !== "") && (password2 !== "") && (password1 === password2);
  const isRegionSelected = regionSelectIndex !== 0;
  const isGenderSelected = isWomanSelected || isManSelected;

  if (isEmailValid && isNameValid && isPasswordValid && isRegionSelected && isGenderSelected) {
    return true;
  }
  
  return false;
}