import './components/style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './components/basic/side_menu_nav.js'
import './components/basic/down_menu_nav.js'
import'./components/basic/dash_board.js'
import './components/basic/footer.js'
import './components/basic/form.js'
import './components/basic/slider.js'
import './components/basic/card.js'
import './components/basic/dot-slider.js'
import './components/text_animation/blur-text.js'
import './components/basic/th-img.js'
import './components/text_animation/type-text.js'
import './components/text_animation/shiny-text.js'
import './components/text_animation/true-focus.js'
import './components/text_animation/fuzzy-text.js'
import './components/card-stack.js'
import './components/text_animation/counter-text.js'
import './components/text_animation/changing-text.js'
import './components/3d-card-stack.js'
import './components/background/dark-v.js'
import './components/background/dots-grid.js'
import './components/basic/magic_nav.js'
import './components/img-pixels.js'
import './components/circle_galary.js'
import './components/clip_img.js'
import './components/shiny_button.js'
import './components/bleed-btn.js'
import './components/flipping_card.js'
import './components/collaps_img.js'
import './components/dots_loader.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
