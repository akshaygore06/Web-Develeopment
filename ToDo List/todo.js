
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");		
});

// add new to do event

$("input[type = 'text'] ").on("keypress", function(e){
	if(e.which == 13)
		{	
			// add li with that message

			var textInput = $("input[type = 'text'] ").val();

			$("ul").append( "<li><span class= 'delete'> <i class='fa fa-trash' aria-hidden='true'></i> </span> " + textInput + "</li>"    );
		}

	});


// delete todo event

// $("ul").on("click","span", function(e)
// 	{
// 		$("li").on("click",function(){
// 			$(this).fadeOut(500, function()
// 			{
// 				$(this).remove();
// 			}
// 				);
// 		})
// 		e.stopPropagation();
// 	}
	
// );


$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});



/// add button

$("#addButton").on("click",function(){
	$("input").toggleClass("displayInput");
});


// $("ul").on("hover","li", function(){
// 	$("li").toggleClass("delete");
// });



// $("li").hover(function(e){

// 	e.toggleClass("delete");
// });
