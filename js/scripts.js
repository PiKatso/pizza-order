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
  console.log("toppingPrice");
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
  console.log(sizePrice);
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
  console.log(newPizza.size);
  console.log(newPizza.toppingsArr)
  // newPizza.size = (pizzaSize);
  // newPizza.toppingsArr.push(allTopping); //push to Pizza array//

  var pizzaCost = newPizza.total();
  console.log(pizzaCost);

  //takes client name//
  $("form#user-name-input").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-customer-name").val();
    $(".customer-name-area").hide();
    $(".user-selection-area").show();
    $('#client-return-name').text(inputtedName + ", ");
  });

  $("form#user-selections").submit(function(event) {
    event.preventDefault();

    //get pizza size//
    $("input:radio[name=size]:checked").map(function(){
      var pizzaSize = $(this).val();    //.map instead of .each//
      newPizza.size = pizzaSize;

    //take user topping selection//
    $("input:checkbox[name=tops]:checked").each(function(){
      var allTopping = $(this).val();

      newPizza.toppingsArr.push(allTopping); //push to Pizza array//
      console.log(newPizza.toppingsArr);

    //show final results
    $('#client-return-size').text(newPizza.size);  //size show//
    $('#client-return-toppings').append(allTopping + " "); //show tops using var//
    // $('#client-return-toppings').append(newPizza.toppingsArr + " "); //show tops using Array(ran into looping issue/bug )//
    $("#client-order-cost").text(newPizza.total());
    $(".user-selection-area").hide();
    $(".pizza-return-area").show();
    });
    });
  });

});
