function getWelcomeTemplate({ name, age, school, createdAt }) {
  // 구조분해할당
  // const { name, age, school, createdAt } = { name, age, school, createdAt };
  const myTemplate = `
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

  console.log(myTemplate);
}

const name = "철수";
const age = 10;
const school = "공룡초등학교";
const createdAt = "2023-01-10";
getWelcomeTemplate({ name, age, school, createdAt }); // shorthand-property
