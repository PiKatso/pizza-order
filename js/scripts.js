//back end//
function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}


//front end//
$(document).ready(function(){

//takes client name//
  $("form#user-name-input").click(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-customer-name").val();
    console.log(inputtedName);
  });

  //takes user topping selections//
  $("form#user-toppings").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=tops-p]:checked").each(function(){
      var proteinTopping = $(this).val();
      // $('#client-return-toppings').append(proteinTopping);
      console.log(proteinTopping);
    });
    $("input:checkbox[name=tops-o]:checked").each(function(){
      var otherTopping = $(this).val();
      console.log(otherTopping);
    });
  });

  //get pizza size//
  $("form#size-pizza").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=size]:checked").each(function(){
      var pizzaSize = $(this).val();
      console.log(pizzaSize);
    });
  });

});
