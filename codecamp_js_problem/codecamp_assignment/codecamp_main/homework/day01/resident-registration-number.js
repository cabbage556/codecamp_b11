const checkRegNumber1 = function (regNumber) {
  // a. 주민번호 가운데가 "-"로 구성되어야 함
  if (!regNumber.includes("-")) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
};

const checkRegNumber2 = function (regNumber) {
  // b. 주민번호 앞 6자리, 뒤 7자리로 구성되어야 함
  const firstRegNumber = regNumber.split("-")[0];
  const secondRegNumber = regNumber.split("-")[1];

  if (firstRegNumber.length !== 6 || secondRegNumber.length !== 7) {
    console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
};

const replaceRegNumber = function (regNumber) {
  // c. 뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력하기
  const regNumberMaxLength = regNumber.length;
  const count = regNumber.length - 6;
  // const replacedRegNumber = regNumber.slice(0, count) + "******";
  const replacedRegNumber = regNumber
    .slice(0, count)
    .padEnd(regNumberMaxLength, "*");
  console.log(replacedRegNumber);
};

// d. 함수는 퍼사드 패턴이 적용되어야 함
const customRegistrationNumber = function (regNumber) {
  if (!checkRegNumber1(regNumber)) return;
  if (!checkRegNumber2(regNumber)) return;

  replaceRegNumber(regNumber);
};

customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");
