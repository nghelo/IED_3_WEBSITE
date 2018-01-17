$(document).ready(function(){
  $(".owl-carousel").owlCarousel();


	$("#team .button_up").click(function(){
  		if($("#team .window").hasClass("active")){


  			$("#team .window").css("height","15%");
  			$("#team .window").removeClass("active");
  	
  		} else {

  			$("#team .window").css("height","85%");
  			$("#team .window").addClass("active");

		}
	});


});