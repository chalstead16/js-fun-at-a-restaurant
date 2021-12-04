function nameMenuItem(menuItemName){
  return `Delicious ${menuItemName}`
}


var deliciousFood = nameMenuItem();

function createMenuItem(deliciousFood, price, type){
  var menuItem = {
    name: deliciousFood,
    price: price,
    type: type
  }
  return menuItem;
}


var ingredients = [];

function addIngredients(foods, menuItemIngredients) {
  if (menuItemIngredients.indexOf(foods) === -1){
    menuItemIngredients.push(foods);
  }
    return menuItemIngredients;
}


function formatPrice(price){
  return(`$${price}`);
}


function decreasePrice(price){
  return price * 0.9;
}


function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
