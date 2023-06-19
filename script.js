const randomNumber = document.querySelector('.random-number');

const button = document.querySelector('.random-number-button');

button.addEventListener('click', () => {
    randomNumber.innerHTML = Math.floor( Math.random() * 100 + 1);
});
