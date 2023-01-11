function getToDay() {
    const date = new Date();
    const year = date.getFullYear();
    const mth = date.getMonth() + 1;
    const day = date.getDate();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const print = `오늘은${year}년${mth}월${day}일 ${hr}:${min}:${sec}입니다.`;

    return print;
}
getToDay();
