import { getToday } from "./utils.js";

const printDateFormat = function () {
  const todayDateFormat = getToday();
  console.log(todayDateFormat);
};

printDateFormat();
