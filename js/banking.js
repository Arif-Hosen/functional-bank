// function doubleIt(n){
//     const result= n*2;
//     return result;
// }
// const num1=doubleIt(2);
// const num2=doubleIt(5);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear deposit input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //update deposit   
    /* // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue('deposit-input');

    //get current deposit
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const depositTotalAmount = parseFloat(depositTotalText);
     depositTotal.innerText = depositAmount + depositTotalAmount;
     */

    updateTotalField('deposit-total', depositAmount);

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //set total balance
    balanceTotal.innerText = depositAmount + previousBalanceTotal;
})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //update withdraw
    /* // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
 */
    const withdrawAmount = getInputValue('withdraw-input');

    //get current withdraw
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawTotalText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
 
     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    updateTotalField('withdraw-total', withdrawAmount);

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})