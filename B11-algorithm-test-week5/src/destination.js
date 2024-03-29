/*
    목적지

    당신은 버스를 타고 각 종점에서 이어지는 지역들을 탐험하고자 합니다.
    [ 버스를 탈 지역, 해당 버스의 종점 지역 ]으로 구성된 하나의 묶음이 여러개 담긴 목록, paths가 있습니다.
    해당 버스 종점 지역에서 출발하는 버스가 있다면, 그 버스를 타고 도착하게 되는 종점으로 이동해 같은 과정을 반복해야 합니다.
    만약, 도착한 지점에서 출발하는 버스가 없다면, 해당 지역을 리턴해야 합니다.
    당신이 최종적으로 도착하게 되는 종점, 최종 목적지를 반환해주세요.

    이중배열 paths가 주어집니다.
    paths[i]는 ['지역 A', '지역 B']의 형태를 가지며 '지역 A'는 출발지, '지역 B'는 도칙지를 의미합니다.
    paths의 각 요소는 지역을 통해 연결되어 있습니다.
    예를 들어 아래와 같은 조건이라면,

    paths = [
      ['A', 'B'],
      ['B', 'C'],
      ['D', 'E']
    ]

    'B'를 통해 paths[0]와 paths[1]는 연결되어 있으며
    'C'에서 출발하는 버스가 존재하지 않기에 최종 목적지는 'C'가 됩니다.
    (A => B, B => C)

    - paths는 이중배열입니다.
    - paths[i]의 길이는 2입니다.
    - paths[i]의 요소는 모두 문자열 타입 데이터입니다.
    - paths[i][0]은 출발지를 의미합니다.
    - paths[i][1]은 도착지를 의미합니다.
    - 무한히 loop하는 조건은 존재하지 않습니다. (반드시 하나의 최종 목적지만 존재합니다.)

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      destination([
        ['Kwangju', 'Busan'],
        ['Seoul', 'Ansan'],
        ['Ansan', 'Kwangju'],
      ]);

    case2:
      destination([
        ['B', 'C'],
        ['D', 'B'],
        ['C', 'A'],
      ])

    ------------------------------
    output
    ------------------------------

    case1:
      'Busan'

    case2:
      'A'
*/

function destination(paths) {
  let last = paths[0][1];

  for (let i = 1; i < paths.length; i++) {
    if (paths[i][0] === last) {
      last = paths[i][1];
    }
  }

  return last;
}

module.exports = destination;
