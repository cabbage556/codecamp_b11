/*
    문자열 회전

    두개의 문자열 str과 goal이 주어집니다.
    str의 가장 뒷 문자를 맨 앞으로 보내는 과정만을 반복해
    goal과 완전히 같은 문자열이 될 수 있는지 확인한 뒤,
    가능하다면 true를, 불가능하다면 false를 리턴해 주세요.

    예를 들어, str = 'abcde' goal = 'deabc'라면,
    위에서 언급한 과정을 두번 반복해 str이 goal과 완전히 같아질 수 있으므로 true를 리턴합니다.

    - 문자열 str, goal의 요소는 모두 알파벳 소문자입니다.
    - 두 문자열 내에 공백은 존재하지 않습니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      rotateString('abcde', 'deabc')

    case2:
      rotateString('abcde', 'cdeba')

    ------------------------------
    output
    ------------------------------

    case1:
      true

    case2:
      false
*/

function rotateString(str, goal) {
  if (str === goal) {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    const rotateStr =
      str.slice(str.length - i - 1) + str.slice(0, str.length - i - 1);

    if (rotateStr === goal) {
      return true;
    }
  }

  return false;
}

module.exports = rotateString;
