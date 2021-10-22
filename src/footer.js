import './footer.css';

export default function footer(){
  const body = document.querySelector('body')
  const footer = document.createElement('footer')
  const link = document.createElement('a')
  footer.innerText = '© 2021 '
  link.innerText = 'IrrationalBoolean'
  link.href = 'https://github.com/IrrationalBoolean'
  link.classList.add('footer-text')
  footer.appendChild(link)
  body.appendChild(footer)
}
