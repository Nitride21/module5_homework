let X = 1; // Введите значение
let result = 3;
let exam;
exam = typeof X;
if (exam === 'number') {
    result = 0
}
if (exam === 'string') {
    result = 1
}
if (exam === 'boolean') {
    result = 2
}
switch (result) {
    case 0:
        console.log('X = число');
        break;
    case 1:
        console.log('X = строка');
        break;
    case 2:
        console.log('X = логический тип');
        break;
    case 3:
        console.log('Тип X не определен');
        break;
}

