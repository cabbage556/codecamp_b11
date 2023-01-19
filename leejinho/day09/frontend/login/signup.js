// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
    document.querySelector("#ValidationInputWrapper").style.display = "flex";
    console.log("인증 번호 전송");
    const phone1 = document.querySelector("#PhoneNumber01").value;
    const phone2 = document.querySelector("#PhoneNumber02").value;
    const phone3 = document.querySelector("#PhoneNumber03").value;
    console.log(phone1 + phone2 + phone3);
    let phoneNumber = phone1 + phone2 + phone3;
    console.log("asdkdkdkdkkdkd");
    axios
        .post("http://localhost:3000/tokens/phone", { phoneNumber })
        .then((res) => {
            console.log(res, "휴대폰 토큰 전송됨");
        });
};
console.log("끄아아아")

// 회원 가입 API 요청
const submitSignup = async () => {
    console.log("asd",document.getElementById("PhoneNumber03").value)
console.log(document.getElementById("PhoneNumber01").value)
console.log(document.querySelector("#PhoneNumber01").value)
    // console.log("회원 가입 이메일 전송");
    // console.log(document.querySelector("#SignupPersonal").value)
    // console.log(document.querySelector("#signupName").value)
    const SignupName = document.getElementById("SignupName").value
    console.log(SignupName)
    const SignupPersonal = document.querySelector("#SignupPersonal").value
    const SignupPrefer = document.querySelector("#SignupPrefer").value
    const SignupEmail= document.querySelector("#SignupEmail").value
    const SignupPwd = document.querySelector("#SignupPwd").value
    const SignupPhone =
            document.getElementById("PhoneNumber01").value +"-" +
            document.getElementById("PhoneNumber02").value +"-" +
            document.getElementById("PhoneNumber03").value
          
    axios.post("http://localhost:3000/signup", {SignupName,SignupPersonal,SignupPrefer,SignupEmail,SignupPwd,SignupPhone}).then((res) => {
        console.log(res, "회원가입 데이터 전송됨");
    });
};
