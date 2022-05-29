const inputRef = document.querySelector("input");
const createButtonRef = document.querySelector("button[data-create]");
const destroyButtonRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  
  if (inputRef.value !== '') {

    const boxes = [];
    let size = 20;
      
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
  return boxesRef.innerHTML = '';
}

createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);
