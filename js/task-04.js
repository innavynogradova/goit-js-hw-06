const counterValue = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
});