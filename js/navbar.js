$(document).ready(function() {
	$(window).scroll(function() {
		if (!$(".navbar").hasClass("shrink") && $(document).scrollTop() > 15) {
			$(".navbar").addClass("shrink");
		} else if ($(".navbar").hasClass("shrink") && $(document).scrollTop() <= 15) {
			$(".navbar").removeClass("shrink");
		}
	});

	$("button.navbar-toggle").on("click", function() {
		if ($("div.navbar-collapse").hasClass("in")) {
			$(".navbar").removeClass("darken");
		} else if (!$("div.navbar-collapse").hasClass("collapsing")) {
			$(".navbar").addClass("darken");
		}		
	});

	if (!$(".navbar").hasClass("shrink") && $(document).scrollTop() > 15) {
		$(".navbar").addClass("shrink");
	}
});
