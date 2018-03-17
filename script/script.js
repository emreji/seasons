$(document).ready(function () {
	
	$('.summer').css("display", "none");

	$('.winterButton').click(function () {
		$('.summer').css("display", "none");
		$('.winter').css("display", "block");
	});

	$('.summerButton').click(function () {
		$('.winter').css("display", "none");
		$('.summer').css("display", "block");
	});
});