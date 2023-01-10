function getToday() {
  // 1. 컴퓨터 날짜 불러오기
  const today = new Date();

  // 2. 날짜 형식 만들기
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = today.getDate();

  // 2-1. 시간 형식 만들기
  const getTime = today.getTime() / 1000;

  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  const time = `${hour}:${min}:${sec}`;

  // 3. 컴퓨터 날짜와 시간을 형식에 넣고 리턴하기
  const myDate = `오늘은${year}년 ${month}월 ${date}일 ${time}입니다.`;
  console.log(myDate);

  return myDate;
}

getToday(0);
