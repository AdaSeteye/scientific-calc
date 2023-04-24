document.addEventListener("DOMContentLoaded", function (event) {
    console.log("document is ready");
    const display = document.getElementById("calc-display");
    console.log(display);

    const buttons = document.getElementsByClassName("btn");
    currentValue = "";


  var ans = 0
    function findFactorial(n){
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * findFactorial(n-1);
      }
    }

    function factorialHandler(){
      const tempString = display.value
      tempString.pop
      const tempValue = parseInt(tempString)
      return tempValue
    }

    function evaluateResult() {
      const valueToBeevaluated = currentValue
        .replace("×", "*")
        .replace("÷", "/")
        .replace("%", "*0.01")
        .replace('sin', 'Math.sin')
        .replace('tan', 'Math.tan')
        .replace('cos', 'Math.cos')
        .replace('log', 'Math.log10')
        .replace('ln', 'Math.log')
        .replace('π', 'Math.PI')
        .replace('e', 'Math.E')
        .replace('sin-1', 'asin')
        .replace('cos-1', 'acos')
        .replace('10^', '10**')
        .replace('tan-1', 'Math.atan')
        .replace('x^2', '**2')
        .replace('√', 'Math.sqrt')
        .replace("^", "**");

        if(valueToBeevaluated.indexOf('!') !== -1){
          valueToBeevaluated.replace('!', findFactorial(factorialHandler()).toString());

        }

      
      
      

      const result = eval(valueToBeevaluated);
      currentValue = result.toString();
      display.value = currentValue;

      ans = currentValue;
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
        else if(button.innerText == "x!"){
        currentValue += '!'
        display.value = currentValue
        currentValue = currentValue.substring(currentValue.length - 1)
        }
        else if(button.innerText == 'Ans'){
          display.value = ans;
        }
        else if(button.innerText == 'Rnd'){
          display.value = Math.random();
        }
        else if(button.innerText == '10^x'){
          currentValue += '10^'
          display.value = currentValue;
        }
        else if(button.innerText == 'x^y'){
          currentValue += '^'
          display.value = currentValue;
        }
        else if(button.innerText == 'y√x'){
          currentValue += ''
          display.value = currentValue;
        }
        else if(button.innerText == 'Rad | Deg' || button.innerText == 'EXP'){
          currentValue += ''
          display.value = currentValue;
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



  