import './components/slider';
import './components/tabs';
import './components/modal';
import './components/scrollTo';

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()
