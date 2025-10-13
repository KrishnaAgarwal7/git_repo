let yesBtn  = document.querySelector('.js-yes');
yesBtn.addEventListener('click', () => {
  window.location.href = "lp4.html"
})
let declineBtn  = document.querySelector('.js-no');
declineBtn.addEventListener('click', () => {
  window.location.href = "lp4.html"
})
let noBtn = document.querySelector('.js-no');
const textNo = document.getElementById('noButton');
const textYes = document.getElementById('yesButton');
noBtn.addEventListener('mouseover' , () => {
  textNo.innerHTML = "Ok"
  textYes.innerHTML = "No"
})
noBtn.addEventListener('mouseout' , () => {
  textNo.innerHTML = "No"
  textYes.innerHTML = "Ok"
})