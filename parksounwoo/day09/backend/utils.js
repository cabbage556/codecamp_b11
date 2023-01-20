// export function getToday() {
//     const nweDate = new Date();
//     const year = nweDate.getFullYear();
//     const month = nweDate.getMonth() + 1;
//     const date = nweDate.getDate();
//     const createdAt = `${year}-${String(month).padStart(2, 0)}-${String(date).padStart(
//         2,
//         0
//     )}`;
//     return createdAt;
// }

export function getToday() {
    const aaa = new Date();
    const yyyy = aaa.getFullYear();
    const mm = aaa.getMonth() + 1;
    const dd = aaa.getDate();
    const today = `${yyyy}-${mm}-${dd}`;
    return today;
}
