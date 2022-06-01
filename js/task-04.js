const counterValue = document.querySelector("#value");

let counter = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    counter -= 1;
    counterValue.textContent = counter;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    counter += 1;
    counterValue.textContent = counter;
});