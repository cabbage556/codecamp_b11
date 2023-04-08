/*
    팰린드롬

    팰린드롬(회문)이란,
    - 기러기, 토마토, level, rotator
    위와 같이 거꾸로 읽어도 똑바로 읽는 것과 같은 문장, 낱말 등을 말합니다.

    문자열 str이 주어집니다.
    str을 인자로 받아 해당 문자열을 기반으로
    해당 문자열의 앞에 문자를 추가하여 팰린드롬을 만들어야 합니다.
    만들 수 있는 팰린드롬 중에서 "가장 짧은 팰린드롬"을 리턴해 주세요.

    - 문자열을 반환해야 합니다.
    - 문자열 str은 모두 알파벳 소문자로 구성되어 있습니다.
    - (1 <= str.length <= 50)

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      palindrome('abcde')
      eabcde
      edabcde
      edcabcde
      edcbabcde

    case2:
      palindrome('abcbac')
      abcbac
      cabcbac
    case3:
      palindrome('zxcxz')

    ------------------------------
    output
    ------------------------------

    case1:
      'edcbabcde'

    case2:
      'cabcbac'
    
    case3:
      'zxcxz'
*/

function palindrome(str) {
  // 팰린드롬 확인 함수
  function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  // 팰린드롬이면 그대로 리턴
  if (isPalindrome(str)) {
    return str;
  }

  str = str.split("");

  let count = 0;
  let strLength = str.length;
  for (let i = Math.trunc(strLength / 2); i < strLength; i++) {
    str.splice(count, 0, str[str.length - 1]);
    str = str.join("");
    count++;

    if (isPalindrome(str)) {
      return str;
    }
    str = str.split("");
  }
}

module.exports = palindrome;
