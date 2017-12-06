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
  	if (a == "graphic") {
  		$(".video").css("height","0");
  		$(".video").css("margin","0");
  		$(".web").css("height","0");
  		$(".web").css("margin","0");
  		$("div.video h2").css("display", "none");
  		$(".interaction").css("transform","translate(0px,-320px)");
  	}
  	if (a == "All") {
  		$(".video").css("height","300px");
  		$(".video").css("margin-top","20px");
  		$(".web").css("height","300px");
  		$(".web").css("margin-top","20px");
  		$(".graphic").css("height","300px");
  		$(".graphic").css("margin-top","20px");
  		$(".interaction").css("height","300px");
  		$(".interaction").css("margin-top","20px");
  		$(".interaction").css("transform","translate(0px, 0px)");
  		$("div.video h2").css("display", "inline-block");
  	}
  });
  $(".description").click(function(){
    $(this).css('opacity') == 1) {
      $(this).css('opacity','0');
    }else{
      $(".description").css('opacity','0');
        $(this).css('opacity','1');
    }
  });
});


/* --------------------- CONTACTS ---------------------*/



/* ---------------------- FOOTER ----------------------*/