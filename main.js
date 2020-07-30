const $social = document.querySelector('.social')
const display = ['./img/facebook.png', './img/twitter.png', './img/instagram.png', './img/googleplus.png']

const $htmlContent = []
for (let i = 0; i < display.length; i++) {
  $htmlContent.push(`<img class="thumbnail" src=${display[i]} data-text="" alt="social">`)
}

$social.innerHTML = $htmlContent.join(' ')