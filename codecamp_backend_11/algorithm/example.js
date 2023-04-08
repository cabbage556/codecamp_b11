// 1층에서 100층까지 도달할 수 있는 수 중 최소 횟수 구하기
// 1번 이동 = 최대 2층, 최소 1층

let count = 0;

for (let i = 1; i < 100; i += 2) {
  count = count + 1;
}

console.log(count);
