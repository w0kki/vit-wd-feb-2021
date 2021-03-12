console.log("JavaSript successfullly loaded");

function tip() {
    // get what the person typed
    var billAmount = document.getElementById("billAmount");
    // get the input value
    var billAmountTyped = billAmount.value;
    console.log("The input value: ", billAmountTyped);
    console.log("data type of billamount is", typeof billAmountTyped);
    // multiply bill by 15%
    var tipAmount = (billAmountTyped * .15);
    console.log("tip ammount = ", tipAmount);
    //output tip amount
    // var total = (tipAmount + billAmountTyped);
    //output the total
    var tipOutput = document.getElementById("output")
    tipOutput.innerText = tipAmount;
}