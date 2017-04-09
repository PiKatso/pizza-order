//BACK END//
function Pizza (size, topping){
  this.size = size;
  this.toppingsArr = [];
}

//evaluate pizza toppings-price//
 Pizza.prototype.toppingCost = function() {
  let toppingPrice = 0;
  this.toppingsArr.length.forEach(function(elem) {
    if (elem !== "") {
      toppingPrice += 2;
    }
  });
  console.log("toppings");
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
  console.log("size");
  return sizePrice
}

Pizza.prototype.total = function(){
  var totalCost = "";
  totalCost = (this.sizeCost + this.toppingCost);
  console.log("total");
  return totalCost
}

//FRONT END//
$(document).ready(function(){
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
      console.log(pizzaSize);

    //take user topping selection//
    $("input:checkbox[name=tops]:checked").map(function(){
      var allTopping = $(this).val();
      console.log(allTopping);

    //Return total Price//
    var newPizza = new Pizza(pizzaSize, allTopping);
    newPizza.size = (pizzaSize);
    newPizza.toppingsArr.push(allTopping); //push to Pizza array//

    var pizzaCost = newPizza.total();
    console.log(pizzaCost);


    // $("client-order-cost").text(pizzaCost);   //total show//
    // console.log(pizzaCost)

    //show final results
    $('#client-return-size').text(pizzaSize);  //size show//
    $('#client-return-toppings').append(allTopping + " "); //show tops//
    $("client-order-cost").text(pizzaCost);
    // $('#client-return-size').text(newPizza.size);  //size show//
    // console.log(newPizza.size);
    $(".user-selection-area").hide();
    $(".pizza-return-area").show();
    });
    });
  });

});
