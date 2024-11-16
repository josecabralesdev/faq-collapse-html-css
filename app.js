const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

let collapseImage = $$('#collapse-close')
collapseImage = [...collapseImage]

addEventListener('click', e => {
  const descriptionToShow = e.target.parentNode.nextElementSibling

  if (e.target.getAttribute('src') === './assets/caret-down.svg') {
    e.target.setAttribute('src', './assets/bxs-x-circle.svg')
    descriptionToShow.style.display = 'block'
  } else {
    e.target.setAttribute('src', './assets/caret-down.svg')
    descriptionToShow.style.display = 'none'
  }
});