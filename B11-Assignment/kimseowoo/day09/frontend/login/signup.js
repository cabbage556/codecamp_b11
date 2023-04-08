
// 휴대폰 인증 토큰 전송하기

    // 1. 입력한 휴대폰 번호 가져오기
  const getValidationNumber = async () => {
  const MyPhone01 = document.getElementById("PhoneNumber01").value
  const MyPhone02 = document.getElementById("PhoneNumber02").value
  const MyPhone03 = document.getElementById("PhoneNumber03").value
  const myPhone = MyPhone01 + MyPhone02 + MyPhone03
  console.log("나의 핸드폰번호: ", myPhone)

      // 1. 입력한 휴대폰 번호 가져오기
      // const myPhone = document.getElementById("myPhone").value
      // 2. 해당 휴대폰 번호로 인증번호 API 요청하기(fetch, axios 등 사용)
      axios.post("http://localhost:3000/tokens/phone", {
          qqq: myPhone
      }).then((res) => {      //응답받기
          console.log(res.data)
      })

      document.querySelector('#ValidationInputWrapper').style.display = 'flex'
      console.log('인증 번호 전송')
  }
  
// 휴대폰 번호를 입력하고 `인증 번호 전송` 버튼을 클릭하면, 
//`frontend/login/signup.js` 파일에 있는 `getValidationNumber` 함수가 실행
// HINT) 3개의 input을 가져와 하나의 문자열(”01012345678”)로 합쳐야합니다.
// 휴대폰 인증 토큰 발급 API 요청시, 휴대폰 인증 토큰이 실제 휴대폰 SMS로 발송

// 회원 가입 API 요청
const submitSignup = async () => {
  const MyPhone01 = document.getElementById("PhoneNumber01").value
  const MyPhone02 = document.getElementById("PhoneNumber02").value
  const MyPhone03 = document.getElementById("PhoneNumber03").value
  const name = document.getElementById("SignupName").value
  const personal = document.getElementById("SignupPersonal").value
  const site = document.getElementById("SignupPrefer").value
  const email = document.getElementById("SignupEmail").value
  const password = document.getElementById("SignupPwd").value
  axios.post("http://localhost:3000/login", {
    name,
    personal,
    myPhone: MyPhone01 + MyPhone02 + MyPhone03,
    email,
    site,
    password
  })
  console.log('회원 가입 이메일 전송')
}

// 모든 정보를 입력한 후  `회원 가입` 버튼을 클릭하면, 
// `frontend/login/signup.js` 파일에 있는 `submitSignup` 함수가 실행
// 회원 가입 API를 요청할 때 회원가입 페이지에서 입력한 이름, 주민등록번호, 핸드폰 번호, 좋아하는 사이트, 비밀번호, 이메일을 같이 보내주세요.
// 9. 회원가입 API 요청시, 가입 환영 템플릿이 실제 이메일로 발송되어야 합니다.
// 이메일에는 **이름, 전화번호, 좋아하는 사이트, 가입일**이 포함되어야합니다.