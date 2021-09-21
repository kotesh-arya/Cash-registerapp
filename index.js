const billAmount = document.querySelector("#bill-amount");
var changeAmount = document.querySelector("#check-amount");

changeAmount.addEventListener("click",()=>{
    console.log(billAmount.value);
});
