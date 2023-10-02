let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let date = new Date();
  hrs.textContent = date.getHours();
  mins.textContent = date.getMinutes();
  sec.textContent = date.getSeconds();
}, 1000);
