const button = document.querySelectorAll(".button");
const input = document.querySelector("#bill");

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
