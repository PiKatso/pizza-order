//back end//



//front end//
$(document).ready(function(){

//takes client name//
$("form#user-name-input").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-customer-name").val();
    console.log(inputtedName);

  });
});
