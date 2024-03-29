/*
    직각삼각형

    함수 triangle에 세변의 길이(a, b, c)가 주어집니다. 
    a의 제곱 + b의 제곱이 c의 제곱이면 직각 삼각형입니다. 

    삼각형이 직각삼각형이라면 "right", 아니라면 "wrong"을 리턴하세요.

        입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      triangle(3, 4, 5)

    ------------------------------
    output
    ------------------------------

    case1:
      'right'

*/

function triangle(a, b, c) {
  return a ** 2 + b ** 2 === c ** 2 ? "right" : "wrong";
}

module.exports = triangle;
