var check;
var toggle;
$(function() {
  
  $("input").click(function() {
    var a = $(this).attr('id');


    if (a == "graphic") {
     
    
        if (innerWidth < 992) {
          positionOriginal();
        } else {
          $(".down").css("transform","translate(0px, -320px)");
          $(".plus").css("transform","translate(390px, -640px)");
          
          if(innerWidth >= 992 && $(window).width() < 1200) {
    		    $(".plus").css("transform","translate(323px,-640px)");
    	     }
    	  
        }
      $(".video, .web, .interaction").animate({height: "0"}, "linear", function() {
        $(".video, .web, .interaction").css("display","none");
      });
      
      $(".graphic").css("display","block").animate({height: "300px"});
      $(".description").css('opacity','0');
      check = false;
    }

    if (a == "web") {
     
    
        if (innerWidth < 992) {
           positionOriginal();
        } else {
          $(".web").css("transform","translate(0px, 0px)");
          $(".one").css("transform","translate(-390px, -320px)");
          $(".two").css("transform","translate(-780px, -640px)"); 
          if(innerWidth >= 992 && $(window).width() < 1200) {
    		    $(".one").css("transform","translate(-324px, -320px)");
            $(".two").css("transform","translate(-647px, -640px)"); 
    	    }
        }
      
      $(".video, .graphic, .interaction").animate({height: "0"}, "linear", function() {
        $(".video, .graphic, .interaction").css("display","none");
      });
     
     
      $(".web").css("display","block").animate({height: "300px"});
      $(".description").css('opacity','0');
      check = false;
    }


    if (a == "video") {
     
    
        if (innerWidth < 992) {
           positionOriginal();
         
        } else {
          $(".video").css("transform","translate(0px, 0px)");
          $(".prime").css("transform","translate(0px, -320px)");
          
          
        }
      
      $(".web, .interaction, .graphic").animate({height: "0"}, "linear", function() {
        $(".web, .interaction, .graphic").css("display","none");
      });
     
     
     
      $(".video").css("display","block").animate({height: "300px"});
      $(".description").css('opacity','0');
      
      check = false;
    }


     if (a == "interaction") {
     
    
        if (innerWidth < 992) {
           positionOriginal();
         
        } else {
          $(".interaction").css("transform","translate(0px, 0px)");
          $(".first").css("transform","translate(-390px, -320px)");
          
          if(innerWidth >= 992 && $(window).width() < 1200) {
           $(".first").css("transform","translate(-323px, -320px)");
          }
        }
      
      $(".web, .graphic, .video").animate({height: "0"}, "linear", function() {
        $(".web, .graphic, .video").css("display","none");
      });
     
     
      $(".interaction").css("display","block").animate({height: "300px"});
      $(".description").css('opacity','0');
      
      check = false;
    }

    if (a == "All") {
       $(".video, .graphic, .interaction, .web").css("display","block");
       $(".video, .graphic, .interaction, .web").animate({height: "300px"}, 1000);
      
       
       positionOriginal();
       $(".description").css('opacity','0');
       check = true;

       
    }
  });
  $("#All").change(function () {
    loop();
  });
  
  $(".description").click(function() {
    if ($(this).css('opacity') == 0.7) {
        $(this).css('opacity','0');
    } else {
        $(".description").css('opacity','0');
        $(this).css('opacity','0.7');
    }
  });

  $(window).resize(function() {
    if (innerWidth < 992) {
      positionOriginal();
    } else if (innerWidth >= 992 && check == false) {
      $(".web, .video, .interaction").css("transform","translate(0px, 0px)");
      $(".two").css("transform","translate(-780px, -640px)");
      $(".prime, .down").css("transform","translate(0px, -320px)");
      $(".first, .one").css("transform","translate(-390px, -320px)");
      $(".plus").css("transform","translate(390px,-640px)");
    }
    if(innerWidth >= 992 && innerWidth < 1200 && check == false) {
    	$(".plus").css("transform","translate(323px,-640px)");
    	$(".one").css("transform","translate(-324px, -320px)");
      $(".two").css("transform","translate(-647px, -640px)"); 
      $(".first").css("transform","translate(-323px, -320px)");
    }
  });

  

  function loop() {
  	$("div.mainContainer").animate({backgroundPositionX: "+=60%"}, 1000, "linear", function () {

  	});
  }  
});
function positionOriginal() {
       $(".graphic").css("transform","translate(0px, 0px)");
       $(".web").css("transform","translate(0px, 0px)");
       $(".video").css("transform","translate(0px, 0px)");
       $(".interaction").css("transform","translate(0px, 0px)");
}





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
