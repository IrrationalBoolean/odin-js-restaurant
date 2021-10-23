import './nav.css'
import makeHome from './home'
import makeMenu from './menu'
import makeAbout from './about'

const body = document.querySelector('body')
const navOptions = {
  home: makeHome,
  menu: makeMenu,
  about: makeAbout,
}

export default function nav(){
  const navbar = document.createElement('div')
  const navList = document.createElement('ul')
  const image = document.createElement('img')

  image.alt = "IDK, Might be my BFF Jill, random unsplash image"
  image.src = "https://unsplash.it/1800/200"
  image.classList.add('center')


  navbar.classList.add("navbar")
  navList.classList.add("nav-list") 

  makeMenuButtons(navList, navOptions)

  navbar.appendChild(image)
  navbar.appendChild(navList)
  body.appendChild(navbar)
}

function makeMenuButtons(bar, arr){
  for (const prop in arr){
    const element = document.createElement('li')

    element.classList.add("nav-option")

    element.innerText = prop
    element.onclick = typeof arr[prop] === 'function' ? arr[prop] : null
    

    bar.appendChild(element)
  }
}
