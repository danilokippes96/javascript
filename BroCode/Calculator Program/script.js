const display = document.getElementById('display');

function appendToDisplay(input){
   display.value += input;
}

function clearDisplay(){
   display.value = "";
}

function calculate(){
   try{
      display.value = eval(display.value); // eval - Computa um código representado como strng
   }
   catch(error){
      display.value = "Error";
   }
}