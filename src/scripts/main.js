'use strict';

const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const dots = document.querySelector('.carousel__dots-wrap');

let position = 0;
let indexOfActiveDot = 0;

btnNext.addEventListener('click', (e) => {
  if (position === -1050) {
    return;
  }
  carousel.style.left = `${position - 350}px`;
  position -= 350;
  dots.children[indexOfActiveDot].classList.remove('carousel__dot_active');
  dots.children[indexOfActiveDot + 1].classList.add('carousel__dot_active');
  indexOfActiveDot++;
});

btnPrev.addEventListener('click', (e) => {
  if (position === 0) {
    return;
  }
  carousel.style.left = `${position + 350}px`;
  position += 350;
  dots.children[indexOfActiveDot].classList.remove('carousel__dot_active');
  dots.children[indexOfActiveDot - 1].classList.add('carousel__dot_active');
  indexOfActiveDot--;
});
