const sendNumber = () => {
  let randomNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("target").innerText = randomNumber;
  document.getElementById("target").style.color = "#" + randomNumber;
};