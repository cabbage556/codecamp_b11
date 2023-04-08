export const formatPersonal = ({ personal }) => {
  personal = personal
    .slice(0, personal.length - 7)
    .padEnd(personal.length, "*");
  return personal;
};

const dateFormat = function (time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
};

export const getToday = function () {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = dateFormat(today.getMonth() + 1);
  const dd = dateFormat(today.getDate());
  return `${yyyy}-${mm}-${dd}`;
};
