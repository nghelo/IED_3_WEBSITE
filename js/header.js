$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 30) {
			$("#header .scroll_container").css("background_attachment", "fixed");
			} else {
			$("#header .scroll_container").css("background_attachment", "relative");
		}
	})
	
	$(".bottone_simone").click(function () {
		$("body,html").animate({ scrollTop : 900}, 500);
	});
})
