//BACK END//
function Pizza (size, topping){
  this.size = size;
  this.toppingsArr = [];
}

//evaluate pizza toppings-price//
 var toppingCost = function(tmptopps) {
  var toppingPrice = 0;
  this.topping.forEach(function(tmptopps) {
    if (this.topping !== "") {
      toppingPrice += 2;
    }
  });
  alert("toppings here");
  return toppingPrice
};

//evaluate Pizza size-price//
var sizeCost = function() {
  var sizePrice = 0;
  if (this.size === "small") {
    sizePrice += 7;
  } else if (this.size === "medium") {
    sizePrice += 10;
  } else {
    sizePrice += 13;
  }
  alert("size meet");
  return sizePrice
}

Pizza.prototype.total = function(){
  var totalCost = "";
  totalCost = (sizeCost + toppingCost);
  alert("total reached");
  return totalCost
}

//FRONT END//
$(document).ready(function(){
 var newPizza = new Pizza;

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
    $("input:radio[name=size]:checked").each(function(){
      var pizzaSize = $(this).val();
      newPizza.size = (pizzaSize);
      $('#client-return-size').text(newPizza.size);  //size show//
      console.log(newPizza.size);

      //take user topping selection//
    $("input:checkbox[name=tops]:checked").each(function(){
      var allTopping = $(this).val();
      console.log(allTopping);
      newPizza.toppingsArr.push(allTopping); //push to Pizza array//

      //Return total Price//
      var pizzaCost = newPizza.total(pizzaSize, allTopping);
      // var pizzaCost =
      $("client-order-cost").text(pizzaCost);   //total show//
      console.log(pizzaCost)

      //show final results
      $(".user-selection-area").hide();
      $(".pizza-return-area").show();
      $('#client-return-toppings').append(allTopping + " "); //show tops//
    });
    });
  });

});
