let urlLink = ("https://www.themealdb.com/api/json/v1/1/random.php")

let foodList = document.querySelector(`.food-list`)



const randomRecipes = async () => {
  try {
    let response = await axios.get(urlLink)
    // console.log(response.data.meals)
    let mealData = (response.data.meals[0])
    console.log(mealData)
    for (let i = 0; i < mealData.length; i++) {

      let foodName = document.createElement(`h5`)
      foodName.textContent = mealData.strMeal
      foodList.appendChild(foodName)

      let foodImage = document.querySelector(`img`)
      foodImage.setAttribute(`src`, mealData.strMealThumb)
      foodList.appendChild(foodImage)

      let recipe = document.querySelector(`p`)
      recipe.textContent = mealData.strInstructions
      foodList.appendChild(recipe)
      





    }
    


  } catch (error) {
    console.log(error)
  }

}
randomRecipes()