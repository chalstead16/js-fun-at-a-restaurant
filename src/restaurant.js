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


function removeMenuItem(restaurantName, food, mealType){

  if (mealType === "breakfast"){

    for (var i = 0; i < restaurantName.menus.breakfast.length; i++) {
      if (restaurantName.menus.breakfast.splice(i, 1)){
      return `No one is eating our ${food} - it has been removed from the ${mealType} menu!`
      }
    }
  }

  if (mealType === "lunch"){

    for (var i = 0; i < restaurantName.menus.lunch.length; i++) {
      if (restaurantName.menus.lunch.splice(i, 1)){
        return `No one is eating our ${food} - it has been removed from the ${mealType} menu!`
      }
    }
  }

  if (mealType === "dinner"){

    for (var i = 0; i < restaurantName.menus.dinner.length; i++) {
      if (restaurantName.menus.dinner.splice(i,1)){
        return `No one is eating our ${food} - it has been removed from the ${mealType} menu!`
      }
    }
  }
return `Sorry, we don't sell ${food}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
