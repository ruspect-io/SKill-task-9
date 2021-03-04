//Доступ к элементу через this


const testTextField1 = document.querySelector('#testTextField1');
const testTextField2 = document.querySelector('#testTextField2');

testTextField1.addEventListener('click', function() {
    // тело обработчика1
    this.textContent = 'По мне кликнули правильно';
    // конец тела обработчика1
})

testTextField2.addEventListener('click', function() {
    // тело обработчика2
    this.textContent = 'По мне кликнули неправильно';
    // конец тела обработчика2
})

// вносит изминение в сам элемент