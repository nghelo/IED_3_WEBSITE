$(document).ready(function(){
  $(".owl-carousel").owlCarousel();



	$("#team .button_up").click(function(){

      var padre = $(this).parent();
      var figlio = $(this).children();

  		if(padre.hasClass("active")){

        padre.css("height","15%");
  			padre.removeClass("active");

        figlio.css("transform","rotate(-135deg)");
        figlio.css("margin-top","20px");

  	
  		} else {

  			padre.css("height","85%");
  			padre.addClass("active");

        figlio.css("transform","rotate(45deg)");
        figlio.css("margin-top","13px");

		}

	});


});