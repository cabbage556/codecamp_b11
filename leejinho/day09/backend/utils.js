export function getToday() {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() +1).padStart(2,"0")
    const dd = String(date.getDate()).padStart(2,'0')

    return `${yyyy}-${mm}-${dd}`
}


// 레퍼런스 코드
// utils.js
// export function getToday(){
//     const aaa = new Date()
//     const yyyy = aaa.getFullYear()
//     const mm = aaa.getMonth() + 1
//     const dd = aaa.getDate()
//     const today = `${yyyy}-${mm}-${dd}`
//     return today
// }