let resultField = document.getElementById("result");

function appendToResult(value) {
  resultField.value += value;
}

function clearResult() {
  resultField.value = "";
}

function calculateResult() {
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = "Error";
  }
}
