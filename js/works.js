var check;
$(function() {

  $("input").click(function() {
    var a = $(this).attr('id');


    if (a == "graphic") {
     
    
        if (innerWidth < 992) {
          $(".down").css("transform","translate(0px, 0px)");
          $(".plus").css("transform","translate(0px, 0px)");
          console.log(innerWidth);
        } else {
          $(".down").css("transform","translate(0px, -320px)");
          $(".plus").css("transform","translate(390px, -640px)");
          
          if(innerWidth >= 992 && $(window).width() < 1200) {
    		    $(".plus").css("transform","translate(323px,-640px)");
    	     }
    	  
        }
      $(".video").animate({height: "0"}, "linear", function() {
        $(".video").css("display","none");
      });
      $(".web").animate({height: "0"}, "linear", function() {
        $(".web").css("display","none");
      });
      $(".interaction").animate({height: "0"}, "linear", function() {
        $(".interaction").css("display","none");
      });
      $(".graphic").css("display","block");
      $(".graphic").animate({height: "300px"});
      $(".description").css('opacity','0');
      check = false;
    }

    if (a == "web") {
     
    
        if (innerWidth < 992) {
          $(".web").css("transform","translate(0px, 0px)");
          $(".one").css("transform","translate(0px, 0px)");
          $(".two").css("transform","translate(0px, 0px)"); 
        } else {
          $(".web").css("transform","translate(0px, 0px)");
          $(".one").css("transform","translate(-390px, -320px)");
          $(".two").css("transform","translate(-780px, -640px)"); 
          if(innerWidth >= 992 && $(window).width() < 1200) {
    		$(".one").css("transform","translate(-324px, -320px)");
            $(".two").css("transform","translate(-647px, -640px)"); 
    	  }
        }
      
      $(".video").animate({height: "0"}, "linear", function() {
        $(".video").css("display","none");
      });
     
      $(".graphic").animate({height: "0"}, "linear", function() {
        $(".graphic").css("display","none");
      });
      $(".interaction").animate({height: "0"}, "linear", function() {
        $(".interaction").css("display","none");
      });
      $(".web").css("display","block");
      $(".web").animate({height: "300px"});
      $(".description").css('opacity','0');
      check = false;
    }


    if (a == "video") {
     
    
        if (innerWidth < 992) {
          $(".video").css("transform","translate(0px, 0px)");
          $(".prime").css("transform","translate(0px, 0px)");
         
        } else {
          $(".video").css("transform","translate(0px, 0px)");
          $(".prime").css("transform","translate(0px, -320px)");
          
          if(innerWidth >= 992 && $(window).width() < 1200) {
            //$(".video").css("transform","translate(-324px, -320px)");
            //$(".prime").css("transform","translate(-647px, -640px)"); 
           }
        }
      
      $(".web").animate({height: "0"}, "linear", function() {
        $(".web").css("display","none");
      });
     
      $(".graphic").animate({height: "0"}, "linear", function() {
        $(".graphic").css("display","none");
      });
      $(".interaction").animate({height: "0"}, "linear", function() {
        $(".interaction").css("display","none");
      });
     
      $(".video").css("display","block");
      $(".video").animate({height: "300px"});
      $(".description").css('opacity','0');
      
      check = false;
    }


     if (a == "interaction") {
     
    
        if (innerWidth < 992) {
          $(".interaction").css("transform","translate(0px, 0px)");
          $(".first").css("transform","translate(0px, 0px)");
         
        } else {
          $(".interaction").css("transform","translate(0px, 0px)");
          $(".first").css("transform","translate(-390px, -320px)");
          
          if(innerWidth >= 992 && $(window).width() < 1200) {
           $(".first").css("transform","translate(-323px, -320px)");
          }
        }
      
      $(".web").animate({height: "0"}, "linear", function() {
        $(".web").css("display","none");
      });
     
      $(".graphic").animate({height: "0"}, "linear", function() {
        $(".graphic").css("display","none");
      });
      
      $(".video").animate({height: "0"}, "linear", function() {
        $(".video").css("display","none");
      });
     
      $(".interaction").css("display","block");
      $(".interaction").animate({height: "300px"});
      $(".description").css('opacity','0');
      
      check = false;
    }




    if (a == "All") {
       $(".video").css("display","block");
       $(".video").animate({height: "300px"}, 1000);
       $(".web").css("display","block");
       $(".web").animate({height: "300px"}, 1000);
       $(".graphic").css("display","block");
       $(".graphic").animate({height: "300px"}, 1000);
       $(".interaction").css("display","block");
       $(".interaction").animate({height: "300px"}, 1000);
       
       $(".graphic").css("transform","translate(0px, 0px)");
       $(".web").css("transform","translate(0px, 0px)");
       $(".video").css("transform","translate(0px, 0px)");
       $(".interaction").css("transform","translate(0px, 0px)");
       $(".description").css('opacity','0');
       check = true;
       loop();
    }
  });
  
  
  $(".description").click(function() {
    if ($(this).css('opacity') == 1) {
       $(this).css('opacity','0');
       $(this).css("transform","translate(0px, 0px)");
       $(".video").css("transform","translate(0px, 0px)");
       $(".video").css("transform","translate(0px, 0px)"); 
    } else {
      $(".description").css('opacity','0');
      $(this).css('opacity','1');
      $(this).css("transform","translate(0px, -5px)");
      $(".video").css("transform","translate(0px, -5px)");
      $(".graphic").css("transform","translate(0px, -5px)");
    }

  });
  


    
    $(window).resize(function() {
    if ($(window).width() < 992) {

      $(".down").css("transform","translate(0px, 0px)");
      $(".plus").css("transform","translate(0px, 0px)");
      $(".web").css("transform","translate(0px, 0px)");
      $(".one").css("transform","translate(0px, 0px)");
      $(".two").css("transform","translate(0px, 0px)");
      $(".video").css("transform","translate(0px, 0px)");
      $(".prime").css("transform","translate(0px, 0px)"); 
      $(".interaction").css("transform","translate(0px, 0px)");
      $(".first").css("transform","translate(0px, 0px)");
    } else if (innerWidth >= 992 && check == false) {
      $(".down").css("transform","translate(0px,-320px)");
      $(".plus").css("transform","translate(390px,-640px)");
      $(".web").css("transform","translate(0px, 0px)");
      $(".one").css("transform","translate(-390px, -320px)");
      $(".two").css("transform","translate(-780px, -640px)");
      $(".video").css("transform","translate(0px, 0px)");
      $(".prime").css("transform","translate(0px, -320px)");
      $(".interaction").css("transform","translate(0px, 0px)");
      $(".first").css("transform","translate(-390px, -320px)");
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
  		//loop();
  	});
  }  

  


});

