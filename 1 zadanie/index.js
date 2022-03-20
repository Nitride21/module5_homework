let writeNumber = prompt("Введите пожалуйста значение: ");
let exam;
writeNumber = +writeNumber;
exam = typeof writeNumber;

if (isNaN(writeNumber)) {
    alert('Упс, кажется, вы ошиблись')
} else if (writeNumber % 2 === 0) {
    alert('Число четное')
} else {
    alert('Число не четное')
}

