/* ---------------------- HEADER ----------------------*/



/* ----------------------- MENU -----------------------*/



/* ----------------------- TEAM -----------------------*/
var i = 1;


function avanza(movimento) {
  switch (movimento) {
  	case "arrow_right": 

	  	$("#slide_" + i).css("right", "-100%");
	  	$("#slide_" + i).css("left", "100%");
	  	i++;
	  	$("#slide_" + i).css("right", "0");
	  	$("#slide_" + i).css("left", "0");
	  	$("#slide_" + i).css("opacity", "1"); 	
	  	break;


  	case "arrow_left": 

	  	$("#slide_" + i).css("right", "100%");
	  	$("#slide_" + i).css("left", "-100%");
	  	i--;
	  	$("#slide_" + i).css("right", "0");
	  	$("#slide_" + i).css("left", "0");
	  	$("#slide_" + i).css("opacity", "1"); 	
	  	break;

 	 
   }

   return movimento;
}



$(".arrow").click( function() {
	console.log("click!");
	avanza($(this).attr("id"));
	console.log($(this).attr("id"))


})


/* ---------------------- WORKS -----------------------*/
$(function() {
  $("input").click(function() {
  	var a = $(this).attr('id');
  	$("." + a).css("top", "400px");
  	if (a == "All") {
  		$("div").css("display", "block");
  	}
  });
});


/* --------------------- CONTACTS ---------------------*/



/* ---------------------- FOOTER ----------------------*/