import './styles/style.scss'
import OverlayScrollbars from 'overlayscrollbars'


const scrollInstance = OverlayScrollbars(document.body, {
  className: 'os-theme-light',
})


document.body.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.classList.contains('navbar__link')) {
   scrollInstance.scroll(document.querySelector(e.target.getAttribute('href')), 1000)
  }
})
