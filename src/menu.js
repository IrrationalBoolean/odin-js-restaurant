import './menu.css'
import menuData from "./MOCK_DATA.json"

function menuItem(name, description, price, meal){
  this.name = name
  this.description = description
  this.price = price
  this.meal = meal
}

export default function makeHome(){
  const main = document.querySelector("#main")
  // clean up main
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
  console.log('menu')
  console.log(menuData)

  const content = document.createElement("div")
  content.classList.add("menu")
  addMenuItems(content)
  addMeals(content)
  main.appendChild(content)
}

function addMeals(container){
  const meals = ['Breakfast', 'Lunch', 'Dinner']
  for (let i = 0; i < meals.length; i++){
    const meal = document.createElement('div')

    meal.classList.add("mealText")
    meal.textContent = meals[i]
    meal.style.order = `${i * 2}`
    container.appendChild(meal)
    console.log(meals[i])
  }
}


function addMenuItems(container){
  for (let i = 0; i < menuData.length; i++) {
    let a = menuData[i]
    console.log(menuData[i])
    const itemBox = document.createElement('div')
    const nameBox = document.createElement('div')
    const itemName = document.createElement('h2')
    const itemDesc = document.createElement('p')
    const itemPrice = document.createElement('div')
    const itemMeal = document.createElement('div')
    const descriptionBox = document.createElement('div')
    const itemDescription = document.createElement('p')

    itemBox.classList.add("itemBox")
    itemBox.classList.add(`${a.meal.toLowerCase()}`)
    itemPrice.classList.add('itemPrice')
    itemName.classList.add('nameBox')

    itemName.innerText = `${a.origin} ${a.plant}`
    itemDesc.innerText = a.desc
    itemPrice.innerText = a.price

    nameBox.appendChild(itemName)
    nameBox.appendChild(itemDesc)
    itemBox.appendChild(nameBox)
    itemBox.appendChild(itemPrice)
    container.appendChild(itemBox)
  }

}
