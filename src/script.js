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
        .replace("%", "*0.01");
      const result = eval(valueToBeevaluated);
      currentValue = result.toString();
      display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", function () {
        if (button.innerText == "AC") {
          currentValue = "";
          display.value = currentValue;
        } else if (button.innerText == "=") {
          evaluateResult();
        } else {
          currentValue += button.innerText;
          display.value = currentValue;
        }
      });
    }
  });