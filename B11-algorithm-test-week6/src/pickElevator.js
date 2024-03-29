/*
    엘레베이터 고르기

    당신은 지각 직전의 회사원입니다.
    총 2대의 엘레베이터 중 가장 빨리 도착하는 것을 찾아 탑승해야 제시간에 도착할 수 있습니다.

    인자로 left, right, call가 주어집니다.
    세 인자는 모두 number 타입입니다.
    left와 right는 각 엘레베이터의 현재 층을 의미합니다.
    call은 당신이 현재 위치한 층을 의미합니다.
    당신의 목표는 가장 빠르게 탑승할 수 있는 엘레베이터를 찾는 것입니다.

    - 두 엘레베이터 모두 당신이 있는 층으로 오고 있으며, 어떠한 것을 타더라도 당신이 목표한 층으로 바로 이동한다고 가정합니다.
    - left 엘레베이터가 가장 먼저 도착한다면 문자열 “left”를 리턴해주세요.
    - right 엘레베이터가 가장 먼저 도착한다면 문자열 “right”를 리턴해주세요.
    - 만약 두 엘레베이터가 동시에 도착한다면 “right”를 리턴해주세요.
    - 최고층은 13층입니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      pickElevator(4, 13, 2)

    case2:
      pickElevator(8, 1, 2)

    ------------------------------
    output
    ------------------------------

    case1:
      "left"

    case2:
      "right"
*/

function pickElevator(left, right, call) {
  const leftFloor = Math.abs(left - call); // 왼쪽 엘리베이터 남은 층
  const rightFloor = Math.abs(right - call); // 오른쪽 엘리베이터 남은 층

  return leftFloor < rightFloor ? "left" : "right";
}

module.exports = pickElevator;
