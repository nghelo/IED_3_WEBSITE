$(document).ready(function(){
	$(".hambmenu").click(function(){
		$(".hambmenu").toggleClass("active");
		$(".close").toggleClass("active");
		$(".menu").toggleClass("active");
	})
	$("#menu ul li a").click(function(){
		$(".menu").removeClass("active");
		$(".hambmenu").toggleClass("active");
	})
})