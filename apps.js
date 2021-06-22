let urlLink = ("https://www.themealdb.com/api/json/v1/1/random.php")

const randomRecipes = async () => {
  try {
    let response = await axios.get(urlLink)
    // console.log(response.data.meals)
    let mealData = (response.data.meals)
    console.log(mealData)
    


  } catch (error) {
    console.log(error)
  }

}
randomRecipes()