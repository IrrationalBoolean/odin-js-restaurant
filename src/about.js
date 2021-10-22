import './about.css'

export default function makeAbout() {
  const main = document.querySelector("#main")
  // clean up main
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
  console.log('about')

  const content = document.createElement("div")
  content.classList.add("about")

  main.appendChild(content)
}
