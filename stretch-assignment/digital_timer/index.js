const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const digits = document.querySelectorAll('.digit');
const startButton = document.getElementById("startButton");
const resetButton = document.getElementsByClassName('resetButton')[0];
secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;

startButton.onclick = () => {
const countSecondTens = (reset) => {
    secondTens.textContent++;   
    clearInterval(intervalTens);
    clearInterval(intervalOnes);
    clearInterval(intervalHundedreds);
    clearInterval(intervalmsTens);
    if (reset != undefined) {
        secondTens.textContent = 0;
        secondOnes.textContent = 0;
        msHundreds.textContent = 0;
        msTens.textContent = 0;
        startButton.disabled = false;
        startButton.classList.remove("buttonDisabled");
        digits.forEach(digit => {
            digit.classList.remove("redDigit");
        })
    } else {
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    digits.forEach(digit => {
        digit.classList.add("redDigit");
    })
    startButton.disabled = false;
    startButton.classList.toggle("buttonDisabled");
}
}

const countsecondOnes = () => {
    secondOnes.textContent != 9 ? secondOnes.textContent++ : secondOnes.textContent = 0;
    
}
const countmsHundreds = () => {
    msHundreds.textContent != 9 ? msHundreds.textContent++ : msHundreds.textContent = 0;
}
const countmsTens = () => {
    msTens.textContent != 9 ? msTens.textContent++ : msTens.textContent = 0;
}

    const intervalTens = setInterval(countSecondTens, 10000);
    const intervalOnes = setInterval(countsecondOnes, 1000);
    const intervalHundedreds = setInterval(countmsHundreds, 100);
    const intervalmsTens = setInterval(countmsTens, 10);
    startButton.disabled = true;
    startButton.classList.toggle("buttonDisabled");

    resetButton.onclick = () => {
        countSecondTens("reset");
    }
}

