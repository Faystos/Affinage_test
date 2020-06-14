let btns = document.querySelectorAll('.control_slider__btn');
let sliderBlockItem = document.querySelectorAll('.slider_block__item');

let imgLeft = document.querySelector('.slider_block__item--left .item__img');
let imgRight = document.querySelector('.slider_block__item--right .item__img');
const imgArr = ['arca', 'ural', 'building'];
let i = 0;

// Событие нажатий кнопки управления слайдером.
btns.forEach(el => {
  el.addEventListener('click', evt => {
    sliderBlockItem.forEach(it => {
      startAnimation(it);
      toogleClass(it);      
    });

    if (i == imgArr.length) i = 0; 
    swapImagSlide(imgLeft, imgArr);
    // swapImagSlide(imgRight, imgArr, i);
    i++; 
       
  })
});

// Инициация запуска анимации смены слайдов.
function startAnimation (el) {  
  if (el.classList.contains('slider_block__item--left') && (!el.classList.contains('slider_block__item--back'))) {
    el.classList.add('slider_block__item--front');
  }
  if (el.classList.contains('slider_block__item--right') && (!el.classList.contains('slider_block__item--front'))) {
    el.classList.add('slider_block__item--back');
  } else {
    return;
  }      
}

// смена классов при акцивации слайда.
function toogleClass (el) {
  if (el.classList.contains('slider_block__item--back')) {
    el.classList.remove('slider_block__item--back');
    el.classList.add('slider_block__item--front');
  }else if ( el.classList.contains('slider_block__item--front')) {
    el.classList.remove('slider_block__item--front');
    el.classList.add('slider_block__item--back');
  }  else {
    return;
  }
}

// смена изображения в слайдах.
function swapImagSlide (imgSlide, arr) {   
  imgSlide.src = `./img/${arr[i]}.jpg`;
  
  console.log(i);
  // console.log(arr.length);
    
      
}

