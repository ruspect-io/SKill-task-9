// Предотвращение поведения по умолчанию 

//Нажатие на кнопку, имеющую type=submit, 
//приведёт к отправке формы, но что если мы не хотим этого делать? 

//Пример использования preventDefault() для сброса события
// по умолчанию ссылки (тег <a>):

const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function(event) {
    this.textContent = 'do you realy want to access to the web site?';
    event.preventDefault();
    alert('realyrealy?');
})