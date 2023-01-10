export function getCreateAt() {
  const date = new Date();
  const yyyy = date.getFullYear(); // padstart처리
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  console.log(`오늘은 ${yyyy}년 ${month}월 ${dd}일 ${hh}:${min}:${sec}입니다.`);
  return `오늘은 ${yyyy}년 ${month}월 ${dd}일 ${hh}:${min}:${sec}입니다.`;
}

getCreateAt();
// console.log(`오늘은 ${yyyy}년 ${month}월 ${dd}일 ${hh}:${min}:${sec}입니다.`);
