

function takeOrder(orders, orderReciever){
  if (orderReciever.length !== 3) {
    return orderReciever.push(orders);
  }
}


function refundOrder(number, orderReciever){
  for (var i = 0; i < orderReciever.length; i++){
  if (orderReciever[i].orderNumber === number) {
    return orderReciever.splice(i, 1)
  }
  }
}


function listItems(orderList){
  var itemsHolder = [];
  for (var i = 0; i < orderList.length; i++){
    itemsHolder.push(orderList[i].item);
  }
  return itemsHolder.join(", ")
}


function searchOrder(orderList, food){
  var foodHolder = [];
  for (var i = 0; i < orderList.length; i++){
    foodHolder.push(orderList[i].item);
  } if (foodHolder.includes(food)){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
