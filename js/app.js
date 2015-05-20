$(document).ready(function() {

// Add Grocery Item //
  $('.addbutton').on('click', function() {
  	 var groceryitem = $('.groceryitem').val();
  	 console.log(groceryitem);
  	 $('.grocerylist ul').prepend('<li>' + groceryitem + '</li>');
  });




});