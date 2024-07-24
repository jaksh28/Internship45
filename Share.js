let balance = 1000;
let sharesA = 0;
let sharesB = 0;
const priceA = 100;
const priceB = 150;

function updateDisplay() {
    document.getElementById('balance').innerText = $${balance};
    document.getElementById('sharesA').innerText = sharesA;
    document.getElementById('sharesB').innerText = sharesB;
}

function buyShare(company) {
    if (company === 'A' && balance >= priceA) {
        balance -= priceA;
        sharesA += 1;
    } else if (company === 'B' && balance >= priceB) {
        balance -= priceB;
        sharesB += 1;
    } else {
        alert('Insufficient balance to buy shares');
    }
    updateDisplay();
}

function sellShare(company) {
    if (company === 'A' && sharesA > 0) {
        balance += priceA;
        sharesA -= 1;
    } else if (company === 'B' && sharesB > 0) {
        balance += priceB;
        sharesB -= 1;
    } else {
        alert('No shares to sell');
    }
    updateDisplay();
}

updateDisplay();