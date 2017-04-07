//BACK END//
function Pizza (toppings, size){
  this.toppingsArr = [];
  this.size = size;
}

// Pizza.prototype.total = function(toppings, size){
//   var totalCost = "";
//   totalCost = (this.toppingCost() + this.sizeCost());
//   return totalCost
// }

//evaluate pizza toppings-price//
Pizza.prototype.toppingCost = function() {
  var toppingPrice = 0;
  this.topping.forEach(function(topping) {
    console.log(topping);
    if (topping !== "") {
      toppingPrice += 2;
    }
  });
  return toppingPrice
};

//evaluate Pizza size-price//
Pizza.prototype.sizeCost = function() {
  var sizePrice = 0;
  if (this.size === "small") {
    sizePrice += 9;
  } else if (this.size === "medium") {
    sizePrice += 12;
  } else {
    sizePrice += 15;
  }
  return sizePrice
}

//reset feilds//
// function resetFields(){
//   $("input#new-customer-name").val("");
//   $("input:checkbox[name=tops]:checked").val("")
// }

//FRONT END//
$(document).ready(function(){
 var newPizza = new Pizza ();

//takes client name//
  $("form#user-name-input").click(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-customer-name").val();
    $('#client-return-name').text(inputtedName + ", ");
    console.log(inputtedName);
  });

  //takes user topping selections//
  $("form#user-toppings").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=tops]:checked").each(function(){
      var allTopping = $(this).val();
      newPizza.toppingsArr.push(allTopping);
      console.log(newPizza.toppingsArr);
      $('#client-return-toppings').append(allTopping + " ");
    });
  });

  //get pizza size//
  $("form#size-pizza").submit(function(event){
    event.preventDefault();
    $("input:radio[name=size]:checked").each(function(){
      var pizzaSize = $(this).val();
      newPizza.size = (pizzaSize);
      $('#client-return-size').text(newPizza.size);
      console.log(newPizza.size);
    });
    console.log(Pizza.total);
  });

  // resetFields();
});
