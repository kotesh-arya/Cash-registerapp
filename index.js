const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-amount")
const message = document.querySelector("#error-message")


checkButton.addEventListener("click", () => {
    message.style.display = "none";
    if (billAmount.value > 0) {
       
        if (cashGiven.value >= billAmount.value) {
            const payBackAmount = cashGiven.value - billAmount.value;
            calculateChange(payBackAmount);
            if (cashGiven.value == billAmount.value) {
                messageShown("Welcome again");
            }
        } else {
            messageShown("cash should be atleast equal to the bill amount");
        }
    } else {
        messageShown("Nothing is free here!");
    }
});

function messageShown(result) {
    message.style.display = "block";
    message.innerText = result;
}

 function calculateChange(payBackAmount){

}