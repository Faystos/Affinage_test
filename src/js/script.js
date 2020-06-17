let btns = document.querySelectorAll('.control_slider__btn');
let sliderBlockItem = document.querySelectorAll('.slider_block__item');

let imgLeft = document.querySelector('.slider_block__item--left .item__img');
let imgRight = document.querySelector('.slider_block__item--right .item__img');


const imgArrLeft = ['building', 'ural', 'arca'];
const imgArrRight = ['arca', 'building', 'ural'];
let i = 0;

// Событие нажатий кнопки управления слайдером.
btns.forEach(el => {
  el.addEventListener('click', evt => {
    sliderBlockItem.forEach(it => {
      startAnimation(it);
      toogleClass(it);
    });
    swapImagSlide(imgLeft, imgArrLeft);
    swapImagSlide(imgRight, imgArrRight);
    i++    
  });
});

// Инициация запуска анимации смены слайдов.
function startAnimation (el) {  
  if (el.classList.contains('slider_block__item--left')) {
    el.classList.add('slider_block__item--back');    
  }
  if (el.classList.contains('slider_block__item--right')) {
    el.classList.add('slider_block__item--front');    
  }    
}

// Удаление класса слайдов по окончанию анимации.
function toogleClass (el) {
  if (el.classList.contains('slider_block__item--back')) {
    setTimeout(() => {
      el.classList.remove('slider_block__item--back');
    }, 3000);
  }
  if ( el.classList.contains('slider_block__item--front')) {
    setTimeout(() => {
      el.classList.remove('slider_block__item--front');
    }, 3000);
  }  
}

// смена изображения в слайдах.
function swapImagSlide (imgSlide, arr) {
  if (i > imgArrRight.length - 1) i = 0;       
  imgSlide.src = `./img/${arr[i]}.jpg`;      
}

