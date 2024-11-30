// Selecting elements
const userWeight = document.querySelector('.user-weight');
const userHeight = document.querySelector('.user-height');
const resultBtn = document.querySelector('.btn');
const resultText = document.querySelector('.result');

resultBtn.addEventListener('click', function() {
    const weight = Number(userWeight.value);
    const height = Number(userHeight.value);

    if(weight > 0 && height > 0) {
        const userBMI = weight / (height * height);
        resultText.textContent = `Your BMI is : ${userBMI}`;
    } else {
        resultText.textContent = 'Please enter valid weight and height';
    }
})