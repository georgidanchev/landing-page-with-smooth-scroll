import './styles/style.scss'
import OverlayScrollbars from 'overlayscrollbars'

// extansiate the overlayscrollbars package
const scrollInstance = OverlayScrollbars(document.body, {
  className: 'os-theme-light',
})

document.body.addEventListener('click', (e) => {
  // Prevent default behaviour of links.
  e.preventDefault()
  
  // If the target is on of our links.
  if (e.target.classList.contains('navbar__link')) {
    // Scroll to that part of the page within 1s.
   scrollInstance.scroll(document.querySelector(e.target.getAttribute('href')), 1000)
  }
})
