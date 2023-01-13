function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const result = String(month).padStart(2, "0");
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `오늘은 ${year}년 ${result}월 ${day}일 ${hour}:${min}:${sec}입니다.`;
}

console.log(getToday());
//`오늘은 ${year}년 ${month}월 ${day}일 ${hour}:${min}:${sec}입니다.`
