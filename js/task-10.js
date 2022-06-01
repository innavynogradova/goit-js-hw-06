const inputRef = document.querySelector("input");
const createButtonRef = document.querySelector("button[data-create]");
const destroyButtonRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


let size = 20;

function createBoxes() {
  
  if (inputRef.value !== '') {
    
    const boxes = [];

    for (let i = 1; i <= inputRef.value; i++) {
    
      let divbox = document.createElement("div");
      size += 10;
      divbox.style.width = `${size}px`;
      divbox.style.height = `${size}px`;
      divbox.style.backgroundColor = getRandomHexColor();
      console.log(divbox);
      boxes.push(divbox);
    }

    inputRef.value = '';
    
    return boxesRef.append(...boxes);
    
  }  
}

function destroyBoxes() {
  size = 20;
  return boxesRef.innerHTML = '';
}

createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);
