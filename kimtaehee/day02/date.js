function getToday() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const hh = date.getHours();
  const min = date.getMinutes();
  const ss = date.getMinutes();

  return `${yyyy}년 ${mm}월 ${dd}일 ${hh}:${min}:${ss}`;
}

function date() {
  console.log("오늘은 " + getToday() + "입니다.");
}

date();
