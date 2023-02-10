/*
    문자열 패턴

    문자열 pattern과 str이 주어집니다.
    두 문자열이 입력된 패턴이 완전히 같은지 확인한 뒤,
    같은 패턴일 경우 true를,
    패턴이 다를 경우 false를 리턴해주세요.

    - 문자열 pattern은 공백이 존재하지 않습니다.
    - 문자열 str은 단어 사이에 공백이 존재합니다.
    - pattern과 str 내 단어가 반복되는 횟수까지도 같아야 완전히 같은 패턴입니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      const pattern = 'abba'
      const str = 'dog cat cat dog'
      stringPattern(pattern, str)

    case2:
      const pattern = 'abcaba';
      const str = 'cup ice coffee cup ice coffee';
      stringPattern(pattern, str)

    case3:
      const pattern = 'abbab';
      const str = 'a b b a b a b b a b';
      stringPattern(pattern, str)

    ------------------------------
    output
    ------------------------------

    case1:
      true

    case2:
      false
      
    case3:
      false
*/

function stringPattern(pattern, str) {
  const ptrArr = pattern.split("");
  const strArr = str.split(" ");
  const pattern1 = []; // ptrArr 앞뒤문자열 비교 결과 저장 배열
  const pattern2 = []; // strArr 앞뒤문자열 비교 결과 저장 배열

  // 단어 반복 횟수가 다르면 false 리턴
  if (ptrArr.length !== strArr.length) return false;

  // 오름차순 정렬
  ptrArr.sort();
  strArr.sort();

  // 1번. 📌
  // ptrArr 정렬 후 앞뒤문자열 비교
  for (let i = 0; i < ptrArr.length - 1; i++) {
    ptrArr[i] !== ptrArr[i + 1] ? pattern1.push(false) : pattern1.push(true);
  }

  // strArr 정렬 후 앞뒤문자열 비교
  for (let i = 0; i < strArr.length - 1; i++) {
    strArr[i] !== strArr[i + 1] ? pattern2.push(false) : pattern2.push(true);
  }

  // 패턴이 일치하지 않으면 false 리턴
  for (let i = 0; i < pattern1.length; i++) {
    if (pattern1[i] !== pattern2[i]) return false;
  }

  // 모든 조건 통과 후 true 리턴
  return true;

  // 2번. 📌
  // // ptrArr 정렬 후 앞뒤문자열 비교
  // for (let i = 0; i < ptrArr.length - 1; i++) {
  //   ptrArr[i] !== ptrArr[i + 1] ? pattern1.push(false) : pattern1.push(true);
  // }

  // // strArr 정렬 후 앞뒤문자열 비교
  // for (let i = 0; i < strArr.length - 1; i++) {
  //   if (strArr[i] !== strArr[i + 1]) {
  //     // strArr 앞뒤문자열이 다른 경우 ptrArr 앞뒤문자열이 같으면 false 리턴
  //     if (pattern1[i]) return false;
  //   } else {
  //     // strArr 앞뒤문자열이 같은 경우 ptrArr 앞뒤문자열이 다르면 false 리턴
  //     if (!pattern1[i]) return false;
  //   }
  // }

  // // 모든 조건 통과 후 true 리턴
  // return true;
}

module.exports = stringPattern;
