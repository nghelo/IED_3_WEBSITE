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

$(".Home").click(function () {
		$("body,html").animate({ scrollTop : 0}, 500);
	});
$("#menu .Team").click(function () {
		$("body,html").animate({ scrollTop : 700}, 500);
	});

$("#menu .Works").click(function () {
		$("body,html").animate({ scrollTop : 1855}, 500);

	});
