const checkEmail = function (inputEmail) {
  if (
    inputEmail === undefined ||
    inputEmail === "" ||
    !inputEmail.includes("@")
  ) {
    console.log("에러 발생!! 이메일을 제대로 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
};

const createWelcomeTemplate = function ({ name, age, school, createdAt }) {
  return `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr>
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>가입일: ${createdAt}</div>
      </body>
    </html>
  `;
};

const sendWelcomeTemplateToEmail = function ({ name, email, welcomeTemplate }) {
  console.log(
    `${name}님의 이메일 ${email}로 가입환영 템플릿 ${welcomeTemplate}을 전송했습니다!`
  );
};

const createUser = function ({ name, age, school, email, createdAt }) {
  // 1. 이메일이 정상인지 확인하기 (존재여부, "@" 포함여부)
  if (!checkEmail(email)) return;

  // 2. 가입환영 템플릿 만들기
  const welcomeTemplate = createWelcomeTemplate({
    name,
    age,
    school,
    createdAt,
  });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail({ name, email, welcomeTemplate });
};

const getToday = function () {
  const today = new Date();
};

const name = "철수";
const age = 10;
const school = "다람쥐초등학교";
const email = "123@g.c";
const createdAt = "2023-01-10"; // new Date()를 활용해서 수정하기
createUser({ name, age, school, email, createdAt });
