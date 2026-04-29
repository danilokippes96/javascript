let generateBtn = document.getElementById("generateBtn");
let label1 = document.getElementById("myLabel1");
let label2 = document.getElementById("myLabel2");
let label3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;


generateBtn.onclick = function() {
    randomNumber1 = Math.floor(Math.random()* max) + min;
    randomNumber2 = Math.floor(Math.random()* max) + min;
    randomNumber3 = Math.floor(Math.random()* max) + min;
    label1.textContent = randomNumber1;
    label2.textContent = randomNumber2;
    label3.textContent = randomNumber3;
}