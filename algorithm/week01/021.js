// function days(month) {
//   if (month === 2) {
//     console.log(28);
//   } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log(30);
//   } else {
//     console.log(31);
//   }
// }

const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function days(month) {
  return monthList[month];
}

days(1); // 31
days(2); // 28
days(4); // 30

console.log(days(1));
console.log(days(2));
console.log(days(4));
