// JS AQUI
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let output = document.querySelector(".output");

input.value = 25;
result.innerHTML = 25 + '%';
output.style.borderRadius = 25 + '%';

input.addEventListener("input", function() {
    result.innerHTML = input.value + '%';
    output.style.borderRadius = input.value + '%';
});
