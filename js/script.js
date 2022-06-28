const button = document.querySelectorAll(".button");
const billAmount = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#people");
const custom = document.getElementById("custom");
const totalAmount = document.querySelector("#totalAmount");
const tipAmount = document.querySelector("#tipAmount");
const resetButton = document.querySelector(".reset");

let bill = billAmount.value;
let nop = numberOfPeople.value;
let customPercent = custom.value;
let percentage = 0;

custom.addEventListener("focus", () => {
  button.forEach((item) => {
    item.classList.remove("clickButton");
  });
});

const resetBtn = () => {
  button.forEach((item) => {
    item.classList.remove("clickButton");
  });
  billAmount.value = "";
  numberOfPeople.value = "";
  custom.value = "";
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  resetButton.classList.remove("openReset");
};

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
    percentage = buttonGetAttr(e.target);
    console.log(buttonGetAttr(e.target));
    resetButton.classList.add("openReset");
    calculateValue();
  });
});

const calculateValue = () => {
  let tip = 0;
  let total = 0;
  let billValue = billAmount.value;
  let nop = numberOfPeople.value;
  if (billValue != 0 && nop != 0 && percentage >= 0) {
    tip = ((billValue / 100) * percentage) / nop;
    total = billValue / nop + tip;
  }
  tipAmount.innerHTML = "$" + tip.toFixed(3).slice(0, -1);
  totalAmount.innerHTML = "$" + total.toFixed(2);
};

["input", "click"].forEach((e) => {
  custom.addEventListener(e, () => {
    percentage = 0;
    percentage = custom.value;
    calculateValue();
  });
});

resetButton.addEventListener("click", resetBtn);
billAmount.addEventListener("input", calculateValue);
numberOfPeople.addEventListener("input", calculateValue);
