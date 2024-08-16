const display = document.getElementById("display");

function AT_add(input){
  display.value += input;
}
function clear_cl(){
    display.value = "";
}
function cancel_dl(){
 
    display.value = display.value .substr(0,display.value.length-1);
}
function calculate(){ 
        display.value = eval(display.value);

}


