let urlLink = ("https://www.themealdb.com/api/json/v1/1/random.php")

let foodList = document.querySelector(`.food-list`)
let button = document.querySelector(`button`)


const randomRecipes = async () => {
  try {
    let response = await axios.get(urlLink)
    // console.log(response.data)
    let mealData = response.data.meals
    // console.log(mealData)
    for (let i = 0; i < mealData.length; i++) {
      // console.log(mealData[i].strInstructions)


      let food = document.createElement(`div`)
      // console.log(foodData)
      foodList.appendChild(food)

      let mealName = document.createElement(`h3`)
      mealName.textContent = mealData[i].strMeal
      food.append(mealName)

      let foodPics = document.createElement(`img`)
      foodPics.setAttribute(`src`, `https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg`)
      food.append(foodPics)

      let foodRecipe = document.createElement(`p`)
      foodRecipe.textContent = mealData[i].strInstructions
      food.append(foodRecipe)


    }
    return mealData



  } catch (error) {
    console.log(error)

  }

}


button.addEventListener(`click`, () => {
  removeFood()
  randomRecipes()
})

function removeFood() {
  while (foodList.lastchild) {
    foodList.removeChild(foodList.lastChild)

  }
  
}


















 // let randomNumber = Math.floor(Math.random() * mealData.length)
    // let randomPick = mealData[randomNumber]
    // console.log(randomPick)