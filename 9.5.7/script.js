//Всплытие
//ри наступлении события обработчики сначала срабатывают
// на самом элементе, затем на его родителе, затем
// на родителе родителя и так далее, вверх по цепочке вложенности:
document.querySelector('body').addEventListener('click',
    (event) => {
        alert('Событие body');
    })
document.querySelector('#parent').addEventListener('click',
    (event) => {
        alert('Событие родителя');
    })
document.querySelector('#child').addEventListener('click',
    (event) => {
        alert('Событие потомка');
    })