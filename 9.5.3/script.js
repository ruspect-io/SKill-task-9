//Доступ к элементу через this


//Внутри метода-обработчика можно получить доступ к элементу, на который назначен обработчик.
// Делается это через псевдоэлемент this:
const testTextField = document.querySelector('#testTextField');
let clickCounter = 0;

testTextField.addEventListener('click', function() {
    // тело обработчика1
    clickCounter = clickCounter + 1;
    this.textContent = 'По мне кликнули' + clickCounter + 'raz!';
    // конец тела обработчика1
})

// izmenayet sam text na vivode