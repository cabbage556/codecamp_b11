function getToday() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();

    console.log(
        `오늘은 ${year}년 ${String(month).padStart(2, 0)}월 ${String(date).padStart(
            2,
            0
        )}일 ${hours}:${minutes}:${seconds}입니다.`
    );
}

getToday();