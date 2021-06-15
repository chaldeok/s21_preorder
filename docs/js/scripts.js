"use strict";

var linkLeft = document.querySelector('.phone-name__link--left');
var linkRight = document.querySelector('.phone-name__link--right');
var cardBody = document.querySelector('.main-card__body');
linkLeft.addEventListener('click', function () {
  if (linkRight.classList.contains('active')) {
    linkRight.classList.remove('active');
    linkLeft.classList.add('active');
    cardBody.classList.toggle('is-flipped');
  }
});
linkRight.addEventListener('click', function () {
  if (linkLeft.classList.contains('active')) {
    linkLeft.classList.remove('active');
    linkRight.classList.add('active');
    cardBody.classList.toggle('is-flipped');
  }
});