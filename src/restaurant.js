//the test code hard codes the name of the restaurant
//so the function doesn't need to declare a name variable
function createRestaurant(restaurantName){
  return {
    name:restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner:[],
    }
  }
}

//line 61 in test file establishes name in a variable
function addMenuItem(restaurantName, meal){
  if (meal.type === "breakfast" && restaurantName.menus.breakfast.includes(meal) === false){
    return restaurantName.menus.breakfast.push(meal)}

    else if (meal.type === "lunch" && restaurantName.menus.lunch.includes(meal) === false){
    return restaurantName.menus.lunch.push(meal)}

    else if (meal.type === "dinner" && restaurantName.menus.dinner.includes(meal) === false){
    return restaurantName.menus.dinner.push(meal)}
  }



module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
