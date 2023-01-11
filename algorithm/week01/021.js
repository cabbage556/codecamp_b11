function days(month) {
  if (month === 2) {
    console.log(28);
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(30);
  } else {
    console.log(31);
  }
}

days(1); // 31
days(2); // 28
days(4); // 30
