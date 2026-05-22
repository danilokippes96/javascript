let inputNumb = document.getElementById("inputnumb")
let inputCels = document.getElementById("inputcels")
let inputFar = document.getElementById("inputfar")
let result = document.getElementById("result")
let temp

function convert() {
    if (inputCels.checked) {
        temp = (((inputNumb.value) * 1.8) + 32);
        temp = temp.toFixed(1);
        result.innerHTML = `${temp} °F`;
    } else if (inputFar.checked){
        temp = ((inputNumb.value -32) * (5/9));
        temp = temp.toFixed(1);
        result.innerHTML = `${temp} °C`;
    }
    else {
        result.innerHTML = `Select a Unit`;
    }
}