// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const pn1 = document.getElementById("PhoneNumber01").value;
  const pn2 = document.getElementById("PhoneNumber02").value;
  const pn3 = document.getElementById("PhoneNumber03").value;

  const myphone = pn1 + pn2 + pn3;
  axios
    .post("http://localhost:3000/tokens/phone", {
      myphone,
    })
    .then((res) => {
      console.log(res.data);
    });

  console.log("인증 번호 전송");
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value;
  const privateNum = document.getElementById("SignupPersonal").value;
  const pn1 = document.getElementById("PhoneNumber01").value;
  const pn2 = document.getElementById("PhoneNumber02").value;
  const pn3 = document.getElementById("PhoneNumber03").value;
  const myphone = pn1 + pn2 + pn3;
  const favorite = document.getElementById("SignupPrefer").value;
  const email = document.getElementById("SignupEmail").value;

  axios
    .post("http://localhost:3000/users", {
      name,
      privateNum,
      myphone,
      favorite,
      email,
    })
    .then((res) => {
      console.log(res.data);
    });
  console.log(myphone + "========================================");

  console.log("회원 가입 이메일 전송");
};
