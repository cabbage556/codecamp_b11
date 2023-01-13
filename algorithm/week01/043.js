const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

function getSummary() {
  const obj = {
    times: 0,
    totalPrice: 0,
    grade: "",
  };

  myShopping.forEach((element) => {
    if (element.category === "의류") {
      obj.times++;
      obj.totalPrice += element.price;
    }
  });

  if (obj.times >= 5) obj.grade = "Gold";
  else if (obj.times >= 3) obj.grade = "Silver";
  else if (obj.times >= 0) obj.grade = "Bronze";

  console.log(
    `의류를 구매한 횟수는 ${obj.times}회 금액은 ${obj.totalPrice}원이며 등급은 ${obj.grade}입니다.`
  );

  return `의류를 구매한 횟수는 ${obj.times}회 금액은 ${obj.totalPrice}원이며 등급은 ${obj.grade}입니다.`;
}

getSummary();
