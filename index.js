const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-btn");
const mainMessage = document.querySelector("#main-message");
const revealPart = document.querySelector("#reveal-div");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-amount")
const message = document.querySelector("#error-message")
const noteArray = [2000, 500, 100, 20, 10, 5, 1];
const numberOfNotes = document.querySelectorAll(".no-of-notes")

revealPart.style.display = "none";

nextButton.addEventListener("click", () => {
    const billNumber = Number(billAmount.value);
    console.log(billNumber);
    if (!isNaN(billNumber)) {
        mainMessage.style.display = "none";

        revealPart.style.display = "block";
    } else {
        firstMessage("Oops! that should be a number");
    }



})

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

function calculateChange(payBackAmount) {
    for (let i = 0; i < noteArray.length; i++) {
        const noteNumber = Math.trunc(payBackAmount / noteArray[i]);
        payBackAmount = payBackAmount % noteArray[i]; //updating the paybackamount value after one iteration
        numberOfNotes[i].innerText = noteNumber; // updating the noofnotes box from the first divides and truncated value
    }
}


function messageShown(result) {
    message.style.display = "block";
    message.innerText = result;
}

function firstMessage(main) {
    mainMessage.style.display = "block";
    mainMessage.innerText = main;
}