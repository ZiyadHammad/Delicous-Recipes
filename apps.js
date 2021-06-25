let urlLink = ("https://www.themealdb.com/api/json/v1/1/random.php")

let foodList = document.querySelector(`.food-list`)
let random = document.querySelector(`#random`)
let home = document.querySelector(`#home`)
let save = document.querySelector(`#fav`)
let storedRecipe = localStorage.getItem(`content`)

const randomRecipes = async () => {
  try {
    let response = await axios.get(urlLink)
    
    let mealData = response.data.meals[0]
    console.log(mealData)
    

      let foodDiv = document.createElement(`div`)
      // console.log(foodData)
      foodList.appendChild(foodDiv)

      let mealName = document.createElement(`h3`)
      mealName.textContent = mealData.strMeal
      foodDiv.append(mealName)

      let foodPics = document.createElement(`img`)
      foodPics.setAttribute(`src`, mealData.strMealThumb)
      foodDiv.append(foodPics)

      let foodRecipe = document.createElement(`p`)
      foodRecipe.textContent = mealData.strInstructions
      foodDiv.append(foodRecipe)

      
    
    return mealData



  } catch (error) {
    console.log(error)

  }

}

home.addEventListener(`click`, removeFood)

random.addEventListener(`click`, () => {
  removeFood()
  randomRecipes()
})

function removeFood() {
  while (foodList.lastChild) {
    foodList.removeChild(foodList.lastChild)
  }

}

const saveToLocalStorage = () => {
  localStorage.setItem(`content`, foodList.textContent)
}

save.addEventListener(`click`, saveToLocalStorage)

if (storedRecipe) {
  foodList.textContent = storedRecipe
}
















 // let randomNumber = Math.floor(Math.random() * mealData.length)
    // let randomPick = mealData[randomNumber]
    // console.log(randomPick)