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


  $("#team .button_photo").click(function(){

    console.log("click!");

    var numero = $(this).attr("id");
    $("#team .foto_" + numero).css("display","block");

    if ($("#team .foto_" + numero).css("display","block")){
      $("#team .foto_" + numero).children().click(function(){
          $("#team .foto_" + numero).css("display","none");
      
      });
    }


  });


$("#team .skill").click(function() {
    $("#team .progressBarFill").css("width", "100%");
  });

   $("#team .skill1").click(function() {
    $("#team .progressBarFill1").css("width", "80%");
  });

    $("#team .skill2").click(function() {
    $("#team .progressBarFill2").css("width", "90%");
  });

    $("#team .skill3").click(function() {
    $("#team .progressBarFill3").css("width", "60%");
  });

    $("#team .skill4").click(function() {
    $("#team .progressBarFill4").css("width", "90%");
  });

    $("#team .skill5").click(function() {
    $("#team .progressBarFill5").css("width", "80%");
  });

    $("#team .skill6").click(function() {
    $("#team .progressBarFill6").css("width", "90%");
  });

    $("#team .skill7").click(function() {
    $("#team .progressBarFill7").css("width", "100%");
  });

    $("#team .skill8").click(function() {
    $("#team .progressBarFill8").css("width", "80%");
  });

    $("#team .reset").click(function() {
    $("#team .progressBarFill").css("width", "0");
  });

    $("#team .reset1").click(function() {
    $("#team .progressBarFill1").css("width", "0");
  });

    $("#team .reset2").click(function() {
    $("#team .progressBarFill2").css("width", "0");
  });

    $("#team .reset3").click(function() {
    $("#team .progressBarFill3").css("width", "0");
  });

    $("#team .reset4").click(function() {
    $("#team .progressBarFill4").css("width", "0");
  });

    $("#team .reset5").click(function() {
    $("#team .progressBarFill5").css("width", "0");
  });

    $("#team .reset6").click(function() {
    $("#team .progressBarFill6").css("width", "0");
  });

    $("#team .reset7").click(function() {
    $("#team .progressBarFill7").css("width", "0");
  });

    $("#team .reset8").click(function() {
    $("#team .progressBarFill8").css("width", "0");
  });


});