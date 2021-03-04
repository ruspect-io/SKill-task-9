//  Наиболее современный способ назначения обработчика — 
//назначение через метод addEventListener.


//Этот способ назначения обработчика наиболее предпочтителен,
//так как он лишён основного их недостатка— addEventListener() позволяет
//назначить более одного обработчика на событие:
const testTextField = document.querySelector('#testTextField');
testTextField.addEventListener('click',
    (event) => {
        // тело обработчика
        console.log('Это тот блок');
        // конец тела обработчика
    })

//Если не создавать переменную для хранения элемента, 
//этот же код можно записать следующим образом:
document.querySelector('#testTextField').addEventListener('click',
    (event) => {
        console.log('Это тот блок2');
    })