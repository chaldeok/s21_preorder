const linkLeft = document.querySelector('.phone-name__link--left');
const linkRight = document.querySelector('.phone-name__link--right');
const cardBody = document.querySelector('.main-card__body')

linkLeft.addEventListener('click', () => {
  if (linkRight.classList.contains('active')) {
    linkRight.classList.remove('active');
    linkLeft.classList.add('active')
    cardBody.classList.toggle('is-flipped');
  }
})

linkRight.addEventListener('click', () => {
  if (linkLeft.classList.contains('active')) {
    linkLeft.classList.remove('active');
    linkRight.classList.add('active')
    cardBody.classList.toggle('is-flipped');
  }
})
