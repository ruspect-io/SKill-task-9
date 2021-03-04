//
const textChangeEl = document.querySelector('#textColor');

function textGet(event) {
    this.textContent = prompt();
    event.preventDefault()
}
textChangeEl.addEventListener('click', textGet);






// radi prikola menaet cvet texta po cvetu 4to vveli v prompt
// const textColorEl = document.querySelector('#textColor');
// function makeColor() {
//     let colorGet = prompt();
//     textColorEl.style.backgroundColor = (colorGet);
//     textColorEl.removeEventListener('click', makeColor);
//     textColorEl.addEventListener('click', makeColor);
// }
// textColorEl.addEventListener('click', makeColor);