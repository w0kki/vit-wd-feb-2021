function calculateTip() {
  var billAmountValue = document.getElementById("billAmount").value;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}
