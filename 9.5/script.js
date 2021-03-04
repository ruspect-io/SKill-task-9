//Id нам потребуется, чтобы найти элемент на странице
// (да, речь об одном из методов, оговорённых ранее). 
//Пропишем в script.js следующий код:
const testTextField = document.querySelector('#testTextField');
testTextField.onclick = function() {
    // тело обработчика
    console.log('Это тот блоllllк');
    // конец тела обработчика
}


//Если не создавать переменную для хранения элемента,
// этот же код можно записать следующим образом:
//document.querySelector('#testTextField').onclick = function() {
// тело обработчика
//console.log('Это тот блок');
// конец тела обработчика
//}


//Удалить такой обработчик можно с помощью кода:
//document.querySelector('#testTextField').onclick = null;