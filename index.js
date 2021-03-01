const menuBtn = document.querySelector('.header__top-menu-icon')
const nav = document.querySelector('.nav')
const footerBtn = document.querySelector('.footer__form-button')

menuBtn.addEventListener('click', function() {// Para que cambie el logo del menú a una "X", y la lista del menú sea visible
  menuBtn.classList.toggle('header__nav-x')
  nav.classList.toggle('open-nav')
})

footerBtn.addEventListener('click', function() {// Haremos que muestre un pequeño mensaje sí en el input no se incluyo un @ dentro del valor
  if(!document.querySelector('.footer__form-input').value.includes('@')){
    document.querySelector('.footer__form-p').classList.add('error-message')
  } else {
    document.querySelector('.footer__form-p').classList.remove('error-message')
  }
})