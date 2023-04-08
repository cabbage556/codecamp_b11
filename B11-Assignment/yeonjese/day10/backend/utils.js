// export function getToday() {
//   let today = new Date();

//   let year = today.getFullYear();
//   let month = ("0" + (today.getMonth() + 1)).slice(-2);
//   let day = ("0" + today.getDate()).slice(-2);

//   let dateString = year + "-" + month + "-" + day;

//   //   console.log(dateString);
//   return dateString;
// }
// // getToday();

// utils.js

export function getToday() {
  const aaa = new Date();
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();
  const today = `${yyyy}-${mm}-${dd}`;
  return today;
}
