// Identify DOM elements

const billInput = document.getElementById('bill');
const tipsInput = document.getElementById('tips');
const calculateBtn = document.getElementById('result-btn');
let showResult = document.getElementById('result-text');

// Math calculation function

function calculateTotal() {
    const billAmount = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipsInput.value);
    const calculateTips = (tipPercentage / 100) * billAmount;
    const total = billAmount + calculateTips;
    // Clear field
    showResult.innerHTML = '';
    // Display result
    showResult.innerHTML += total.toFixed(2);
}

// Event listener for click on 'Calculate' button

calculateBtn.addEventListener('click', calculateTotal);





