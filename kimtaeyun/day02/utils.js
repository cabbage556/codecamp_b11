const format = function (time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
};

export const getToday = function () {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = format(today.getMonth() + 1);
  const dd = format(today.getDate());
  const hour = format(today.getHours());
  const minute = format(today.getMinutes());
  const sec = format(today.getSeconds());

  return `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${minute}:${sec}입니다.`;
};

const replaceRegNumber = function (regNumber) {
  const count = regNumber.length - 6;
  const replacedRegNumber = regNumber.slice(0, count) + "******";
  return replacedRegNumber;
};

export const getWelcomeTemplate = function ({
  email,
  regNumber,
  phoneNumber,
  favoriteSite,
}) {
  return `
    <html>
      <body>
        <h1>코드캠프님 가입을 환영합니다.</h1>
        <hr>
        <div>이메일: ${email}</div>
        <div>주민번호: ${replaceRegNumber(regNumber)}</div>
        <div>휴대폰 번호: ${phoneNumber}</div>
        <div>내가 좋아하는 사이트: ${favoriteSite}</div>
      </body>
    </html>
  `;
};
