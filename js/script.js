const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
})