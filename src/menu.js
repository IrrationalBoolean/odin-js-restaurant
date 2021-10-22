import './menu.css'

export default function makeHome(){
  const main = document.querySelector("#main")
  // clean up main
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
  console.log('menu')

  const content = document.createElement("div")
  content.classList.add("menu")

  main.appendChild(content)
}
