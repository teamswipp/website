$(document).ready(function() {
	var topRoadMapBox = $("section.roadmap > div > div.row:visible:first");

	topRoadMapBox.css("padding-top","0px")

	$("section.roadmap > button").on("click", function() {
		$(this).hide();
		topRoadMapBox.css("padding-top","40px");
		$(".hide").removeClass("hide");
	});
});
