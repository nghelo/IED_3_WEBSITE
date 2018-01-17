var check;
$(function() {
  $("input").click(function() {
    var a = $(this).attr('id');
    if (a == "graphic") {
      /*
      $(".video").css("height","0").css("margin","0").css("display","none");
      $(".web").css("height","0").css("margin","0").css("display","none");
      $(".down").css("transform","translate(0px,-320px)");
      */
    
        if ($(window).width() < 992) {
          $(".down").css("transform","translate(0px, 0px)");
          $(".plus").css("transform","translate(0px, 0px)");
        } else {
          $(".down").css("transform","translate(0px, -320px)");
          $(".plus").css("transform","translate(390px, -640px)");
        }
      $(".video").animate({height: "0"}, 900, "linear", function() {
        $(".video").css("display","none");
      });
      $(".web").animate({height: "0"}, 900, "linear", function() {
        $(".web").css("display","none");
      });
      check = false;
    }
    if (a == "All") {
       $(".video").css("display","block");
       $(".video").animate({height: "300px"}, 1000);
       $(".web").css("display","block");
       $(".web").animate({height: "300px"}, 1000);
       $(".down").css("transform","translate(0px, 0px)");
       $(".plus").css("transform","translate(0px, 0px)");
       check = true;
    }
  });
  
  $(".description").click(function() {
    if ($(this).css('opacity') == 1) {
       $(this).css('opacity','0'); 
    } else {
      $(".description").css('opacity','0');
      $(this).css('opacity','1');
    }
    
    $(window).resize(function() {
    if ($(window).width() < 992) {
      $(".down").css("transform","translate(0px, 0px)");
      $(".plus").css("transform","translate(0px, 0px)");
    } else if ($(window).width() > 992 && check == false) {
      $(".down").css("transform","translate(0px,-320px)");
      $(".plus").css("transform","translate(390px,-640px)");
    }
  });
  });

});

