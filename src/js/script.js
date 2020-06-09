let btns = document.querySelectorAll('.control_slider__btn');
let sliderBlockItem = document.querySelectorAll('.slider_block__item');

btns.forEach(el => {
  el.addEventListener('click', evt => {
    sliderBlockItem.forEach(it => {
      startAnimation(it);
      toogleClass(it);
    })    
  })
});

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