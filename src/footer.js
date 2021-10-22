import './footer.css';

export default function footer(){
  const body = document.querySelector('body')
  const footer = document.createElement('footer')
  footer.innerText = '© 2021 IrrationalBoolean'
  body.appendChild(footer)
}
