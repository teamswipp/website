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

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

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
