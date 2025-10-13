let img1 = document.querySelector('.js-image');
let img2 = document.querySelector('.js-no');
img2.addEventListener('mouseover', () => {
  img1.src = 'crying1.gif'
  img1.width = 250;
})
img2.addEventListener('mouseout', () => {
  img1.src = 'panda-love-heart.gif'
  img1.width = 250;
})
let noBtn = document.querySelector('.js-no');
noBtn.addEventListener('click',() => {
window.location.href = 'lp2.html'
}
)
let yesBtn = document.querySelector('.js-yes');
yesBtn.addEventListener('click', () => {
  window.location.href = 'lp5.html'
})
  
