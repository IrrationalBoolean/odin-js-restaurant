import './home.css'


const hours = {
  Monday : "7a - 6p",
  Tuesday: "7a - 6p",
  Wednesday: "7a - 6p",
  Thursday: "7a - 6p",
  Friday: "6a - 8p",
  Saturday: "6a - 8p",
  Sunday: "10a - 5p",
}

export default function makeHome(){
  const main = document.querySelector("#main")
  // clean up main
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }

  const content = document.createElement("div")
  content.classList.add("home")

  addHero(content)

  main.appendChild(content)
}

function addHours(container){
  const hourTable = document.createElement("table")
  hourTable.classList.add("hours-table")
  for (let day in hours) {
    const tableRow = document.createElement("tr")
    const tableDay = document.createElement("th")
    const tableHours = document.createElement("th")

    tableDay.textContent = day
    tableHours.textContent = hours[day]

    tableRow.appendChild(tableDay)
    tableRow.appendChild(tableHours)
    hourTable.appendChild(tableRow)
    container.appendChild(hourTable)
  }
}
function addHero(container){
  const img1 = document.createElement("img")
  const tagline = document.createElement("h1")
  const quoteBox = document.createElement("div")
  const quote = document.createElement("p")
  const quoteAuthor = document.createElement("p")
  const address = document.createElement("p")

  img1.src = "https://unsplash.it/800/400"
  img1.classList.add("home-img")
  tagline.classList.add("tagline")
  quoteBox.classList.add("quoteBox")
  quote.classList.add("quote")
  quoteAuthor.classList.add("quote-author")
  address.classList.add("address")

  tagline.textContent = "Food so good...you'll eat it!"
  quote.textContent = "I love eating this food, I just can't stop, I keep coming back for more even though I know it will one day kill me."
  quoteAuthor.textContent = "-Paying Customer"
  address.textContent = "62 Broad St, Atown USA"

  quoteBox.appendChild(quote)
  quoteBox.appendChild(quoteAuthor)

  container.appendChild(tagline)
  container.appendChild(img1)
  container.appendChild(quoteBox)
  addHours(container)
  container.appendChild(address)
}
