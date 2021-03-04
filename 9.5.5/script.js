//Объект события
//Доступ к элементу через this

//В зависимости от типа события и элемента,
// могут быть различные данные в event.

const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function(event) {
    // тело обработчика
    this.textContent = 'Это событие: ' + event.type;
    console.log('x' + event.clientX, 'y' + event.clientY);
})