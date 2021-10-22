import './home.css'

export default function makeHome(){
  const main = document.querySelector("#main")
  // clean up main
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
  console.log('home')

  const content = document.createElement("div")
  content.classList.add("home")

  main.appendChild(content)
}


