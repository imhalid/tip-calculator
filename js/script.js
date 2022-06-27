const button = document.querySelectorAll(".button");
const billAmount = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#people");
const custom = document.querySelector("#custom");
const totalAmount = document.querySelector("#totalAmount");
const tipAmount = document.querySelector("#tipAmount");

const bill = billAmount.value;
const nop = numberOfPeople.value;
const customPercent = custom.value;

const buttonClassAdd = (e) => {
  button.forEach((item) => {
    item.classList.remove("clickButton");
  });

  e.classList.add("clickButton");
};

//get button percentage
const buttonGetAttr = (e) => {
  const attr = e.getAttribute("data-value");
  return attr;
};

button.forEach((item) => {
  item.addEventListener("click", (e) => {
    buttonClassAdd(e.target);
  });
});

const updateValue = (e) => {
  totalAmount.innerHTML = "$" + e.target.value;
  if (e.target.value.length == 0) {
    totalAmount.innerHTML = "$0.00";
  }
};

billAmount.addEventListener("input", updateValue);
