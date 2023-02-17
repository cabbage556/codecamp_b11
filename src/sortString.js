/*
    문자열 정렬

    순서가 뒤섞인 문자열 str이 주어집니다.
    해당 문자열은 몇개의 단어들로 구성되어 있습니다.
    단어들은 공백으로 구분되며, 각 단어에는 하나씩의 숫자가 포함되어 있습니다.

    입력되어 있는 숫자는 해당 문자열의 올바른 순서를 의미합니다.
    문자열을 올바르게 재정렬해서 완성된 문자열을 리턴해 주세요.

    - 각 단어를 구분하는 공백은 한 칸입니다.
    - 리턴되는 문자열에서 숫자는 제거되어야 합니다.
    - 리턴되는 문자열 내 각 단어 또한 한 칸의 공백으로 구분되어야 합니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      sortString('codi2ng to3gether let1s')

    ------------------------------
    output
    ------------------------------

    case1:
      'lets coding together'

*/

function sortString(str) {
  str = str.split(" ");
  const sorted = new Array(str.length);
  const sortNums = [];
  const answer = [];

  for (const el of str) {
    sortNums.push(el.split("").sort()[0]);
  }

  for (const sortNum of sortNums) {
    for (const el of str) {
      if (el.includes(sortNum)) {
        sorted[sortNum - 1] = el;
      }
    }
  }

  for (const string of sorted) {
    let temp = "";

    for (const char of string) {
      if (isNaN(char)) temp += char;
    }

    answer.push(temp);
  }

  return answer.join(" ");
}

module.exports = sortString;
