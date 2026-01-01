// Leap year checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Button click handler
function checkLeapYear() {
    const yearInput = document.getElementById('year');
    const result = document.getElementById('result');
    const year = Number(yearInput.value);
    
    if (!yearInput.value) {
        result.textContent = 'Please enter a year.';
        result.style.color = 'red';
        return;
    }
    
    if (isLeapYear(year)) {
        result.textContent = year + ' is a leap year!';
        result.style.color = 'green';
    } else {
        result.textContent = year + ' is not a leap year.';
        result.style.color = 'red';
    }
}