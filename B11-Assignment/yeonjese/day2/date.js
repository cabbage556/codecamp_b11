function getToday() {
  const date = new Date();
  const yy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  mm = mm.toString().padStart(2, "0");
  dd = dd.toString().padStart(2, "0");

  let today = `${yy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec}입니다.`;

  console.log(today);
}

getToday();
