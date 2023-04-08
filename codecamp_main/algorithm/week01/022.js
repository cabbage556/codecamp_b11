function calculator(num1, num2, operator) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else {
    console.log("올바른 입력이 아닙니다");
  }
}

calculator(10, 5, "+"); // 15
calculator(10, 5, "-"); // 5
calculator(10, 5, "*"); // 50
calculator(10, 5, "/"); // 2
calculator(10, 5, "a"); // "올바른 입력이 아닙니다"
