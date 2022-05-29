function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}

buttonRef.addEventListener('click', changeBgColor);