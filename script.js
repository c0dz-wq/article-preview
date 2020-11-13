const container = document.querySelector('.social__container')
const shareBtn = document.querySelector('.share__btn')
const previewCard = document.querySelector('.preview__card')

function toggleActive () {
  shareBtn.classList.toggle('share__btn--active')
  container.classList.toggle('social--active')
  previewCard.classList.toggle('preview__card--active')
}

shareBtn.addEventListener('click', () => { toggleActive() })
