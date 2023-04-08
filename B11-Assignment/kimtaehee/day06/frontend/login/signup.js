// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  //가져와서 문자열로 합친다고?
  const num1 = document.getElementById("PhoneNumber01").value;
  const num2 = document.getElementById("PhoneNumber02").value;
  const num3 = document.getElementById("PhoneNumber03").value;
  const phone = num1 + num2 + num3;

  console.log("인증 번호 전송");
  console.log(phone);
  axios.post("http://localhost:3000/tokens/phone", {
    phone,
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");
  const num1 = document.getElementById("PhoneNumber01").value;
  const num2 = document.getElementById("PhoneNumber02").value;
  const num3 = document.getElementById("PhoneNumber03").value;
  const phone = num1 + num2 + num3;

  const name = document.getElementById("SignupName").value;
  const email = document.getElementById("SignupEmail").value;
  const likeSite = document.getElementById("SignupPrefer").value;

  axios.post("http://localhost:3000/users", {
    phone,
    name,
    email,
    likeSite,
  });
};
