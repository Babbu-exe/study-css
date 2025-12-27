function bmiCal() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var resultEl = document.getElementById('result');

    var bmi = weight / (height * height);
    var rounded = Math.round(bmi * 100) / 100;
    
    var category;
    if (rounded < 18.5) {
        category = 'Underweight';
    } else if (rounded < 25) {
        category = 'Normal weight';
    } else if (rounded < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    
    resultEl.textContent = 'BMI: ' + rounded + ' — ' + category;
    console.log('BMI calculated:', rounded, category);
}
