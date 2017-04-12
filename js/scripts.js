//BACK END//
function Pizza (size, topping){
  this.size = size;
  this.toppingsArr = [];
}

//evaluate pizza toppings-price//
 Pizza.prototype.toppingCost = function() {
  let toppingPrice = 0;
  this.toppingsArr.forEach(function(elem) {
    if (elem !== "") {
      toppingPrice += 2;
    }
  });
  return toppingPrice
};

//evaluate Pizza size-price//
Pizza.prototype.sizeCost = function() {
  let sizePrice = 0;
  if (this.size === "small") {
    sizePrice += 7;
  } else if (this.size === "medium") {
    sizePrice += 10;
  } else {
    sizePrice += 13;
  }
  return sizePrice
}

Pizza.prototype.total = function(){
  var totalCost = "";
  totalCost = this.sizeCost() + this.toppingCost();
  console.log(totalCost);
  return totalCost
}

//FRONT END//
$(document).ready(function(){
  //New Pizza & total Price//
  var newPizza = new Pizza();

  //takes client name//
  $("form#user-name-input").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-customer-name").val();
    $(".customer-name-area").hide();
    $(".user-selection-area").show();
    $('#client-return-name').text("Hello " + inputtedName + ", ");
  });

  $("form#user-selections").submit(function(event) {
    event.preventDefault();

    //get pizza size//
    $("input:radio[name=size]:checked").map(function(){
      var pizzaSize = $(this).val();
      newPizza.size = pizzaSize;

    //take user topping selection//
    $("input:checkbox[name=tops]:checked").map(function(){
      var allTopping = $(this).val();
      newPizza.toppingsArr.push(allTopping); //push to Pizza array//

    //show final results
    $('#client-return-size').text(newPizza.size);  //size show//
    $('#client-return-toppings').text(newPizza.toppingsArr.join(", ")); //show tops//
    $("#client-order-cost").text(newPizza.total());
    $(".user-selection-area").hide();
    $(".pizza-return-area").show();
    });
    });
  });

});
