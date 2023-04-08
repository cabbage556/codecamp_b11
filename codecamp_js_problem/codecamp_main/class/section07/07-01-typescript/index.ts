let qustn = "안녕하세요."; // 타입 추론
// qustn = 3;

let qustn2: string = "반갑습니다."; // 타입 명시
// qustn2 = 10;

let qustn3: number | string = 1000; // 타입 명시가 필요한 상황
qustn3 = "1000원";

// 숫자 타입
let qustn4: number = 10;

// 불리언 타입
let qustn5: boolean = true;
qustn5 = false;
// qustn5 = "false"; // 자바스크립트에서 "false"는 truthy한 값이므로 true로 평가되는 값이다.

// let qustn6: number[] = [1, 2, 3, 4, 5, "hi"];
// let qustn7: string[] = ["a", "b", "c", 4];
let qustn8: (string | number)[] = ["a", "b", "c", 4];

// 객체 타입
interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; // 있어도 되고 없어도 되는 것을 나타내기 위해 ?를 붙임
}
const profile: IProfile = {
  name: "철수",
  age: 10,
  school: "코드초등학교",
};
profile.name = "훈이"; // 타입 추론으로는 이것만 가능
profile.age = "8살";
profile.hobby = "수영";

// 함수 타입 => 어디서 몇번이든 호출 가능하므로 타입 추론을 할 수 없음 => 반드시 타입 명시 필요
function add(num1: number, num2: number, unit: string): string {
  return num1 + num2 + unit;
}

const result = add(1000, 2000, "원"); // 결과의 리턴 타입 예측 가능!

const add2 = (num1: number, num2: number, unit: string): string => {
  return num1 + num2 + unit;
};

const result2 = add2(1000, 2000, "원"); // 결과의 리턴 타입 예측 가능!

// any 타입 => 어쩔 수 없는 상황에서만 사용할 것
let anyVar: any = "cㅓㄹ수"; // 자바스크립트 변수와 동일
anyVar = 123;
anyVar = true;

const isActiveList: any[] = [true, false, "false", "true"];

interface IUpdateBoardInput {
  writer: string;
  title?: string;
  contents: string;
}

const updateBoardInput: IUpdateBoardInput = {
  writer: "영희",
  title: "좋은날씨~!",
  contents: "오늘 날씨가 조하요",
};

const updateBoardInput2: IUpdateBoardInput = {
  writer: "훈이",
  contents: "수정~~",
};
