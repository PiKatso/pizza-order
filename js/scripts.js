//BACK END//
function Pizza (toppings, size){
  this.toppings = [];
  this.size = size;
}

//FRONT END//
$(document).ready(function(){
 var newPizza = new Pizza ();

//takes client name//
  $("form#user-name-input").click(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-customer-name").val();
    console.log(inputtedName);
  });

  //takes user topping selections//
  $("form#user-toppings").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=tops]:checked").each(function(){
      var allTopping = $(this).val();
      newPizza.toppings.push(allTopping);
      console.log(newPizza.toppings);
      // $('#client-return-toppings').append(allTopping);
    });
  });

  //get pizza size//
  $("form#size-pizza").submit(function(event){
    event.preventDefault();
    $("input:radio[name=size]:checked").each(function(){
      var pizzaSize = $(this).val();
      newPizza.size = (pizzaSize);
      console.log(newPizza.size);
    });
  });

});
