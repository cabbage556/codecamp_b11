// 003. 배열의 선언과 할당
// const fruits = [];

// 배열에 데이터를 추가할 때 실무에서 자주 사용하는 방식
// fruits.push("사과");
// fruits.push("바나나");
// fruits.push("파인애플");

// 잘못된 인덱스에 데이터를 추가하면 배열에 빈 공간이 생기기 때문에 잘 사용하지 않는 방식
// fruits[0] = "사과";
// fruits[1] = "바나나";
// fruits[2] = "파인애플";

// console.log(fruits);

// 004. 배열의 기능
// const fruits = ["사과", "바나나", "파인애플"];
// const newFruits = [];

// // fruits.length - 1: 배열의 마지막 인덱스 값
// newFruits.push(fruits[fruits.length - 1]);

// console.log(newFruits);

// 005. 배열의 기능
// let students = ["철수", "영희", "훈이", "짱구", "유리"];
// const newArr = students.slice(0, 3);

// console.log(newArr);

// 006. 배열의 기능
// let fruits = ["사과", "바나나"];

// for (let i = 0; i < fruits.length; i++) {
//   fruits[i] = "맛있는 " + fruits[i];
// }

// console.log(fruits);

// 007. 문자열 배열
const number = "01012345678";
const arr = [];
let num = "";

for (let i = 0; i < number.length; i++) {
  num = num + number[i];

  if (i === 2 || i === 6 || i === number.length - 1) {
    arr.push(num);
    num = "";
  }
}

console.log(arr);
