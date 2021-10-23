import './about.css'

export default function makeAbout() {
  const main = document.querySelector("#main")
  // clean up main
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }

  const content = document.createElement("div")
  const header = document.createElement("h1")
  const img1 = document.createElement("img")
  const par1 = document.createElement("p")

  header.textContent = "About Us"
  img1.src = "https://unsplash.it/700/700"
  par1.textContent = "We started in 2005 with a dream and a loan, now 16 years later we continue to pay the loan, and our dreams have been crushed.  At least we still have this restaurant.  Come and enjoy our delicious delicacies, from peanut butter ice cream to surft and turf, if we don't have what you want, then order something else!  We've got bills to pay and mouths to feed, so eat up and give me your money."

  header.classList.add("about-header")
  content.classList.add("about")
  img1.classList.add("about-img")
  par1.classList.add("about-text")

  content.appendChild(header)
  content.appendChild(img1)
  content.appendChild(par1)

  


  main.appendChild(content)
}



