
// 오늘은 2022년 03월 15일 11:30:29입니다. (현재 시간 출력)
// date 객체를 활용하여 생성 시간 함수 만들기 (클래스 폴더 안에도 적용)



const nowDate = new Date()
console.log(nowDate)
const year = nowDate.getFullYear(); // 연도
const month = String(nowDate.getMonth() + 1).padStart(2, "0") ; // 월
const ddd = String(nowDate.getDate()).padStart(2, "0"); // 일
const hours = String(nowDate.getHours()).padStart(2, "0"); // 시
const minutes = String(nowDate.getMinutes()).padStart(2, "0"); // 분
const seconds = String(nowDate.getSeconds()).padStart(2, "0"); // 초



function getToday({year, month, ddd, hours, minutes, seconds}){

    console.log(`오늘은 ${year}년 ${month}월 ${ddd}일 ${hours}:${minutes}:${seconds}입니다.`)
    return;
    
}

getToday({year, month, ddd, hours, minutes, seconds})