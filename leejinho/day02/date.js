// "오늘은 yyyy년 mm월 dd일 시:분:초입니다."

function getToday () {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() +1).padStart(2,'0')
    const dd = String(date.getDate()).padStart(2,"0")
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const Seconds = String(date.getSeconds()).padStart(2,"0")
    console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hours}:${minutes}:${Seconds}입니다.`)
    return `${yyyy}-${mm}-${dd}`
}
getToday ()
