// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const firstPhoneNumber = document.getElementById("PhoneNumber01").value;
  const secondPhoneNumber = document.getElementById("PhoneNumber02").value;
  const thirdPhoneNumber = document.getElementById("PhoneNumber03").value;
  const phoneNumber = firstPhoneNumber + secondPhoneNumber + thirdPhoneNumber;
  const tokenAPI = "http://localhost:3000/tokens/phone";

  console.log(`입력된 번호: ${phoneNumber}`);

  // SMS 인증 요청 API 호출
  axios.post(tokenAPI, { phoneNumber }).then((res) => {
    console.log(res.data);
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value;
  const firstPhoneNumber = document.getElementById("PhoneNumber01").value;
  const secondPhoneNumber = document.getElementById("PhoneNumber02").value;
  const thirdPhoneNumber = document.getElementById("PhoneNumber03").value;
  const phoneNumber = firstPhoneNumber + secondPhoneNumber + thirdPhoneNumber;
  const favoriteSite = document.getElementById("SignupPrefer").value;
  const email = document.getElementById("SignupEmail").value;
  const signUpAPI = "http://localhost:3000/users";

  console.log(`입력된 값: ${name} ${phoneNumber} ${favoriteSite} ${email}`);

  // 회원가입 API 호출
  axios
    .post(signUpAPI, {
      name,
      phoneNumber,
      favoriteSite,
      email,
    })
    .then((res) => {
      console.log(res.data);
    });

  console.log("회원 가입 이메일 전송");
};
