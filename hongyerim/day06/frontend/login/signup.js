// ====================휴대폰 인증 토큰 전송하기====================
export const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");

  const userInput = {
    name: document.getElementById("SignupName").value,
    personal: document.getElementById("SignupPersonal").value,
    phoneNumber:
      document.getElementById("PhoneNumber01").value +
      document.getElementById("PhoneNumber02").value +
      document.getElementById("PhoneNumber03").value,
    preferSite: document.getElementById("SignupPrefer").value,
    email: document.getElementById("SignupEmail").value,
    pw: document.getElementById("SignupPwd").value,
  };

  axios.post("http://localhost:3003/userinfo", userInput).then((res) => {
    console.log(userInput);

    const myPhone = res.data[0].phoneNumber;
    const myToken = getToken(myPhone);

    console.log(myPhone);

    if (myPhone.length < 10 || myPhone.length > 11) {
      console.log("에러 발생!! 번호를 제대로 입력해주세요.");
      return false;
    }

    res.send(myPhone);
    res.send(myToken);
  });

  return;
};

// ====================회원 가입 API 요청 // 이메일 발송 ====================
export const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");
  console.log(userInput);

  axios.post("http://localhost:3003/useremail", userInput).then((res) => {
    const myEmail = res.data[0].email;
    console.log(myEmail);

    if (email === undefined || email.includes("@") === false) {
      console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
      return false;
    }

    res.send(myEmail);
  });
};
