const userNumber = +prompt('Введите число')

console.log('Все числа по порядку:');
for (let i = 0; i <= userNumber; i++) {
    console.log(i);
}

console.log('Все числа, которые делятся на 3:');
for (let i = 3; i <= userNumber; i += 3) {
    console.log(i);
}
