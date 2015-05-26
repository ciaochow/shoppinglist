$(document).ready(function() {

// Add Grocery Item //
//When user adds an item and clicks the Add button//
  $('.addbutton').on('click', function() {

  //Verify user has entered data in both fields//
		var input = 0;



// Post Item.  Show data along with a checkbox on left, 
// a X on right for deletion of item, and price of item//
  	 var groceryitem = $('.groceryitem').val();
  	 console.log(groceryitem);
  	 $('.grocerylist ul').append('<li><input type="checkbox" class="check" />' + 
	  	 groceryitem + '<a href="#">X</a></li>');
});

});

// Click checkbox. If user clicks checkbox, item gets strikethrough //
var testclick = function(){ 
		$('.check').on('click', function() {
	 	console.log('test');
			$(this).closest('li').css('text-decoration: line-through'); 
	 	});
};

$(document).on("DOMNodeInserted", function() {
	testclick();

});

// Delete Item. If user clicks X, item is deleted//

// Show total amount //


