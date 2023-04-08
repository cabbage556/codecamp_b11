// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");
  let ph1 = "010";
  let ph2 = document.getElementById("PhoneNumber02").value;
  let ph3 = document.getElementById("PhoneNumber03").value;
  let myphone = ph1 + ph2 + ph3;
  axios
    .post("http://localhost:2600/tokens/phone", {
      qqq: myphone,
      // qqq에서 number로 변경함 (에러)
    })
    .then((res) => {
      console.log(res.data);
    });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");
  let name = document.getElementById("SignupName").value;
  let personal = document.getElementById("SignupPersonal").value;
  let prefer = document.getElementById("SignupPrefer").value;
  let email = document.getElementById("SignupEmail").value;
  let pwd = document.getElementById("SignupPwd").value;
  let ph1 = "010";
  let ph2 = document.getElementById("PhoneNumber02").value;
  let ph3 = document.getElementById("PhoneNumber03").value;
  let myphone = ph1 + ph2 + ph3;

  axios
    .post("http://localhost:2600/sendMail", {
      name,
      personal,
      myphone,
      prefer,
      email,
      pwd,
    })
    .then((res) => {
      console.log(res.data);
    });
};
