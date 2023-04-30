document.addEventListener("DOMContentLoaded", function (event) {
    console.log("document is ready");
    const display = document.getElementById("calc-display");
    console.log(display);

    const buttons = document.getElementsByClassName("btn");
    currentValue = "";



  var ans = 0
    function findFactorial(n){
      if (n <= 1) {
        return 1;
      } else {
        return n * findFactorial(n-1);
      }
    }

    function factorialHandler(){
      const tempString = display.value
      const slicedString = tempString.slice(0, -1)
      const tempValue = parseInt(slicedString)
      return tempValue
    }
    
    function evaluateResult() {
      let replacedValue = ''
      if(currentValue.indexOf('!') !== -1){
         replacedValue = currentValue.replaceAll('!', findFactorial(factorialHandler()).toString())
      }
      else{
         replacedValue = currentValue
      }
      let valueToBeevaluated = replacedValue
        .replaceAll("×", "*")
        .replaceAll("÷", "/")
        .replaceAll("%", "*0.01")
        .replaceAll('sin', 'Math.sin')
        .replaceAll('tan', 'Math.tan')
        .replaceAll('cos', 'Math.cos')
        .replaceAll('log', 'Math.log10')
        .replaceAll('ln', 'Math.log')
        .replaceAll('π', 'Math.PI')
        .replaceAll(/e\^(\d+)/g, "Math.pow(e, $1)")
        .replaceAll('e', 'Math.E')
        .replaceAll('sin-1', 'asin')
        .replaceAll('cos-1', 'acos')
        .replaceAll('10^', '10**')
        .replaceAll('tan-1', 'atan')
        .replaceAll('x^2', '**2')
        .replaceAll("^", "**")
        .replaceAll(/([0-9]*)y√x([0-9]+)/g, "Math.pow($2, 1/$1)")
        .replaceAll(/([0-9]*)EXP([0-9]+)/g, "$1*Math.pow(10, $2)")
        .replaceAll('√', 'Math.sqrt')
        

      
      
        if (!isRadians) {
          valueToBeevaluated = valueToBeevaluated.replaceAll(/\bsin\((\d+)\)/g, "sin($1*π/180)")
          .replaceAll(/\bcos\((\d+)\)/g, "cos($1*π/180)")
          .replaceAll(/\btan\((\d+)\)/g, "tan($1*π/180)")
          .replaceAll(/Math\.asin\((\d+\.\d+)\)/g, "57.3 * Math.asin($1)")
          .replaceAll(/Math\.acos\((\d+\.\d+)\)/g, "57.3 * Math.acos($1)")
          .replaceAll(/Math\.atan\((\d+\.\d+)\)/g, "57.3 * Math.atan($1)")
          .replaceAll('π', 'Math.PI')
        }

            

      const result = eval(valueToBeevaluated);
      currentValue = result.toString();
      
      display.value = currentValue;

      ans = currentValue;
    }


    var counter = 0
    var isRadians = true;


    function radDeg(){
      if (isRadians) {
        $("#btn-rad").addClass("active");
      } 
      else {
        $("#btn-deg").addClass("active");
      }
      $("#btn-rad").click(function() {
        isRadians = true;
        $("#btn-deg").removeClass("active");
        $("#btn-rad").addClass("active");
      });
      $("#btn-deg").click(function() {
        isRadians = false;
        $("#btn-rad").removeClass("active");
        $("#btn-deg").addClass("active");
      });
    }
    

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
        else if(button.innerText == 'x^2'){
          currentValue += '^2'
          display.value = currentValue;
        }
        else if(button.innerText == 'e^x'){
          currentValue += 'e^'
          display.value = currentValue;
        }
        else if(button.innerText == 'Rad' || button.innerText == 'Deg'){
            radDeg()
   
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



  