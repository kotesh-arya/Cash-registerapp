const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-amount")
const message = document.querySelector("#error-message")
const noteArray = [2000,500,100,20,10,5,1];
const numberOfNotes = document.querySelectorAll(".no-of-notes")

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
function calculateChange(payBackAmount){
   for(let i=0; i<noteArray.length;i++){
       const noteNumber = Math.trunc(payBackAmount/noteArray[i]);
       payBackAmount %= noteArray[i];
      numberOfNotes[i].innerText = noteNumber;
   }
}


function messageShown(result) {
    message.style.display = "block";
    message.innerText = result;
}

