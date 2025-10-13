const buttonHeight = 50;
const buttonWidth = 150;
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;
window.addEventListener('DOMContentLoaded',() => {
  const button = document.getElementById('noButton');
  button.addEventListener('mouseover', () => {
    button.style.left = Math.floor(Math.random() *(maxWidth +1)) + 'px';
    button.style.top = Math.floor(Math.random() *(maxHeight +1)) + 'px';
  }) 
})
let yesBtn = document.querySelector('.js-yes');
yesBtn.addEventListener('click', () => {
  window.location.href = 'lp5.html'
})