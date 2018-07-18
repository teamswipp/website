/* Copyright (C) 2017-2018 The Swipp Team

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU Affero General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
   GNU Affero General Public License for more details. Full license available
   under http://www.swippcoin.com/LICENSE */

$(document).ready(function() {
	var topRoadMapBox = $("section.roadmap > div > div.row:visible:first");

	topRoadMapBox.css("padding-top","0px")

	$("section.roadmap > button").on("click", function() {
		$(this).hide();
		topRoadMapBox.css("padding-top","40px");
		$(".hide").removeClass("hide");
	});
});
