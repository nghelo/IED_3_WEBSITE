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
  	$("." + a).css("height","0");
  	$("." + a).css("margin","0");
  	if (a == "All") {
  		$("div.col-md-4").append($(".graphic"));
  	}
  });
});


/* --------------------- CONTACTS ---------------------*/



/* ---------------------- FOOTER ----------------------*/