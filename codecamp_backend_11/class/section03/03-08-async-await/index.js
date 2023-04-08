import axios from "axios";

// 1. 비동기방식
function fetchAsync() {
  const asyncResult = axios.get("https://koreanjson.com/posts/1");
  console.log("비동기방식: ", asyncResult); // Promise {<pending>}
}

// 2. 동기방식(async - await)
// async function fetchSync() {  => 함수 중복 선언 문제 발생 가능성이 있음 (화살표 함수로 변경하기)
//   const syncResult = await axios.get("https://koreanjson.com/posts/1"); // get API 요청 결과를 await로 기다림
//   console.log("동기방식: ", syncResult);
//   console.log("동기방식: ", syncResult.data.title);
//   console.log("동기방식: ", syncResult.data.content);
// }
const fetchSync = async () => {
  const syncResult = await axios.get("https://koreanjson.com/posts/1"); // get API 요청 결과를 await로 기다림
  console.log("동기방식: ", syncResult);
  console.log("동기방식: ", syncResult.data.title);
  console.log("동기방식: ", syncResult.data.content);
};

fetchAsync();
fetchSync();
