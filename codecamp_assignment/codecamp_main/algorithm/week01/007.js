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
