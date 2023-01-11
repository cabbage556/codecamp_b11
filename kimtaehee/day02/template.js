function getWelcomeTemplate({ name, number, phone, likeSite }) {
  const num = number.slice(0, 8) + "******";
  const mytemplate = `
          <html>
              <body>
                  <h1>${name}님 가입을 환영합니다!!!</h1>
                  <hr />
                  <div>주민번호: ${num}</div>
                  <div>휴대폰 번호: ${phone}</div>
                  <div>내가 좋아하는 사이트: ${likeSite}</div>
              </body>
          </html>
      `;
  console.log(mytemplate);
  return mytemplate;
}

const name = "코드캠프";
const number = "210510-1234567";
const phone = "000-0000-0000";
const likeSite = "codebootcamp.co.kr";

getWelcomeTemplate({ name, number, phone, likeSite });
