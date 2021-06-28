let urlLink = ("https://www.themealdb.com/api/json/v1/1/random.php")
let urlLink2 = ("https://www.themealdb.com/api/json/v1/1/lookup.php?i=")

let foodList = document.querySelector(`.food-list`)
let random = document.querySelector(`#random`)
let home = document.querySelector(`#home`)
let favRecipes = localStorage.getItem(`content`) ? JSON.parse(localStorage.getItem(`content`)) : []
let favList = document.querySelector(`.favorite-recipes`)
console.log(favRecipes)

// localStorage.clear()

const randomRecipes = async () => {
  try {
    let response = await axios.get(urlLink)

    let mealData = response.data.meals[0]
    // console.log(mealData)


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

    let save = document.createElement(`button`)
    save.textContent = `Save Recipe`
    save.id = mealData.idMeal
    foodDiv.append(save)

    save.addEventListener(`click`, (e) => {
      e.target.id = save.id
      saveToLocalStorage(e.target.id)
      e.target.textContent = `Recipes Saved`
    })


    return mealData



  } catch (error) {
    console.error(error)

  }

}

const favorites = async (favRecipes) => {
  try {
    favRecipes.forEach(async (recipe) => {
      let response = await axios.get(`${urlLink2}${recipe}`)
      // console.log(response.data.meals[0])
      let favData = response.data.meals[0]
      console.log(favData)
      
      let favDiv = document.createElement(`div`)
      favList.appendChild(favDiv)

      let favName = document.createElement(`h3`)
      favName.textContent = favData.strMeal
      console.log(favName)
      favList.appendChild(favName)

      let favImg = document.createElement(`img`)
      favImg.setAttribute(`src`, favData.strMealThumb)
      favList.append(favImg)

      let favInstr = document.createElement(`p`)
      favInstr.textContent = favData.strInstructions
      favList.append(favInstr)

      
    });

  }
  catch (error) {
    console.error(error)
    
  }
  
}
favorites(favRecipes)



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


// 
const saveToLocalStorage = (id) => {
  favRecipes.push(id)
  localStorage.setItem(`content`, JSON.stringify(favRecipes))
  // console.log(favRecipes)
}


















