// 데이터 타입과 연산자
1 + 1      // 2
1 + "만원"  // '1만원'
1 + "1"    // '11'
1 - "1"    // 0
"코드" + "캠프"   // '코드캠프'

"123" == 123    // true
"123" === 123   // false

true && true    // true
true && false   // false
false || true   // true
!false          // true

// 조건문 실습1
if (1+1 === 2) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1220:2 정답입니다

if (true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1497:2 정답입니다

if (!true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1777:4 틀렸습니다

if (0) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1837:4 틀렸습니다

if(1) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1875:2 정답입니다

// 조건문 실습2
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교"
};

let age = profile.age;

if(age >= 20) {
  console.log("성인입니다");
} else if(age >= 8) {
  console.log("학생입니다");
} else if(age > 0) {
  console.log("어린이입니다");
} else {
  console.log("잘못 입력하셨습니다");
}
// VM3431:4 학생입니다