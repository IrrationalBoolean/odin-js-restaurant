import './nav.css'

const body = document.querySelector('body')
const navOptions = {
  home: 'home',
  menu: 'menu',
  about: 'about',
}

export default function nav(){
  const navbar = document.createElement('div')
  const navList = document.createElement('ul')
  const image = document.createElement('img')

  image.alt = "IDK, Might be my BFF Jill, random unsplash image"
  image.src = "https://unsplash.it/1200/200"
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
    const eLink = document.createElement('a')

    element.classList.add("nav-option")

    eLink.classList.add("menu-option")
    eLink.innerText = prop
    eLink.href = "#"

    element.appendChild(eLink)
    bar.appendChild(element)
  }
}
