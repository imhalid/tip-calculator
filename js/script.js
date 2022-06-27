const button = document.querySelectorAll(".button");
const billAmount = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#people");
const custom = document.getElementById("custom");
const totalAmount = document.querySelector("#totalAmount");
const tipAmount = document.querySelector("#tipAmount");

let bill = billAmount.value;
let nop = numberOfPeople.value;
let customPercent = custom.value;

custom.addEventListener("focus", () => {
  button.forEach((item) => {
    item.classList.remove("clickButton");
  });
});

const buttonClassAdd = (e) => {
  button.forEach((item) => {
    item.classList.remove("clickButton");
  });

  e.classList.add("clickButton");
};

//get buttons percentage
const buttonGetAttr = (e) => {
  const buttonPercent = e.getAttribute("data-value");
  return buttonPercent;
};

button.forEach((item) => {
  item.addEventListener("click", (e) => {
    buttonClassAdd(e.target);
    console.log(buttonGetAttr(e.target));
  });
});
