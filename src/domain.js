/*
    도메인

    도메인이란, 웹사이트를 접속하는 과정에서 복잡한 IP 주소를 대신해
    직관적이고 외우기 쉬운 이름으로 대체해준 것을 말합니다.
    도메인은 최상위 도메인, 2차 도메인, 3차 도메인 등으로 이루어집니다.

    예를 들어, 'codebootcamp.co.kr'이라는 도메인의 경우
    'kr'은 최상위 도메인 혹은 1차 도메인,
    'co.kr'을 2차 도메인,
    최하위 도메인인 'codebootcamp.co.kr'을 3차 도메인이라 합니다.
    

    배열 domainList가 주어집니다. domainList의 요소는 문자열로 아래와 같은 구조로 되어 있습니다.

    domainList = [ '100 codebootcamp.co.kr', '50 naver.co.kr', '1 co.kr' ]

    문자열 가장 앞의 숫자는 해당 도메인의 방문 횟수를 의미합니다.
    위와 같은 domainList를 입력 받았다면, 아래와 같이 각 n차 도메인과 그 방문수를 모두 누적하여 포함 시킨 배열을 리턴해 주세요.

    [ '100 codebootcamp.co.kr', '50 naver.co.kr', '151 co.kr', '151 kr' ]

    "co.kr"은 2차 도메인으로 앞선 2개의 3차 도메인에 모두 포함되기 때문에 총 방문수가 151이 됩니다.
    "kr"은 주어진 배열에는 따로 요소로서 존재하진 않지만, 주어진 요소들의 상위 도메인으로 존재하기 때문에 결과값에 포함되어야 합니다.

    - 주어지는 요소 내의 알파벳은 모두 소문자입니다.
    - 리턴되는 배열에는 n차 도메인부터 최상위 도메인까지 모두 포함되어야 합니다.
    - 리턴되는 배열 내 요소들의 순서는 테스트에 영향을 주지 않습니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      domain(['100 codebootcamp.co.kr', '50 naver.co.kr', '1 co.kr'])

    case2:
      domain(['900 google.mail.com', '50 naver.com', '1 intel.mail.com', '5 wiki.org'])

    ------------------------------
    output
    ------------------------------

    case1:
      ['100 codebootcamp.co.kr', '50 naver.co.kr', '151 co.kr', '151 kr']

    case2:
      ['901 mail.com', '50 naver.com', '900 google.mail.com', '5 wiki.org', '5 org', '1 intel.mail.com', '951 com']
*/

function domain(domainList) {
  // 여기에서 작업하세요.
}

module.exports = domain;
