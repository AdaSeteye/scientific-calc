document.addEventListener("DOMContentLoaded", function (event) {
    console.log("document is ready");
    const display = document.getElementById("calc-display");
    console.log(display);

    const buttons = document.getElementsByClassName("btn");
    currentValue = "";


    function evaluateResult() {
      const valueToBeevaluated = currentValue
        .replace("×", "*")
        .replace("÷", "/")
        .replace("%", "*0.01")
        .replace('sin', 'Math.sin')
        .replace('cos', 'Math.cos')
        .replace('ln', 'Math.log')
        .replace('π', 'Math.PI')
        .replace('log', 'Math.log10')
        .replace('e', 'Math.E')
        .replace('√', 'Math.sqrt')
        .replace('sin-1', 'Math.asin')
        .replace('cos-1', 'Math.acos')
        .replace('10^x', '10**')
        .replace('tan-1', 'Math.atan')
        .replace('x^2', '**2')
        .replace('y√x', '**1/');
      const result = eval(valueToBeevaluated);
      currentValue = result.toString();
      display.value = currentValue;
    }
    var counter = 0
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", function () {

        try{
        if (button.innerText == "AC") {
          currentValue = "";
          display.value = currentValue;
        } else if (button.innerText == "=") {
          evaluateResult();
        } 
        else if(button.innerText == "Inv"){
          const invertibleButtons = document.getElementsByClassName("invertible")
          if(counter == 0){
            invertibleButtons[0].innerText = "sin-1"
            invertibleButtons[1].innerText = "e^x"
            invertibleButtons[2].innerText = "cos-1"
            invertibleButtons[3].innerText = "10^x"
            invertibleButtons[4].innerText = "tan-1"
            invertibleButtons[5].innerText = "x^2"
            invertibleButtons[6].innerText = "Rnd"
            invertibleButtons[7].innerText = "y√x"

            counter = 1
          }
          else{
          invertibleButtons[0].innerText = "sin"
          invertibleButtons[1].innerText = "ln"
          invertibleButtons[2].innerText = "cos"
          invertibleButtons[3].innerText = "log"
          invertibleButtons[4].innerText = "tan"
          invertibleButtons[5].innerText = "√"
          invertibleButtons[6].innerText = "Ans"
          invertibleButtons[7].innerText = "x^y"

          counter = 0
          }
        }
        else {
          currentValue += button.innerText;
          display.value = currentValue;
        }
    } catch(error){
        currentValue = "ERROR"
        display.value = currentValue
    } 
      });
    }
  });
  var basic = document.getElementById('row1')
  var fx = document.getElementById('row2')
  var num = 0
  const basicOperationBtn = document.getElementById("basic")
  basicOperationBtn.addEventListener('click', function(){
    basic.classList.remove('d-none')
    fx.classList.add('d-none')
  })
const functionalOperationBtn = document.getElementById('fx')
functionalOperationBtn.addEventListener('click', function(){
    fx.classList.remove('d-none')
    basic.classList.add('d-none')

})



  