/* ---------------------- HEADER ----------------------*/



/* ----------------------- MENU -----------------------*/



/* ----------------------- TEAM -----------------------*/


/* ---------------------- WORKS -----------------------*/
$(function() {
  $("input").click(function() {
    var a = $(this).attr('id');
    if (a == "graphic") {
      /*
      $(".video").css("height","0").css("margin","0").css("display","none");
      $(".web").css("height","0").css("margin","0").css("display","none");
      $(".down").css("transform","translate(0px,-320px)");
      */
    }
    if (a == "All") {
      $(".video").css("height","300px").css("margin-top","20px").css("display","block");
      $(".web").css("height","300px").css("margin-top","20px").css("display","block");
      $(".graphic").css("height","300px").css("margin-top","20px").css("display","block");
      $(".down").css("transform","translate(0px, 0px)");
    }
  });
  
  $(".description").click(function() {
    if ($(this).css('opacity') == 0.7) {
      $(this).css('opacity','0');
    } else {
      $(".description").css('opacity','0');
        $(this).css('opacity','0.7');
    }
  });
});


/* --------------------- CONTACTS ---------------------*/



/* ---------------------- FOOTER ----------------------*/