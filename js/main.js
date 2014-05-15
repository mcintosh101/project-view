$('#projectContent').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');



$('a[href*="#firstSection"]').click(function () {
	var heightFix = $('.project-view').height() + 27;
	console.log("First section is " + heightFix + "px tall");


	$('.project-menu').css('height', heightFix);
});

$('a[href*="#secondSection"]').click(function () {
	var heightFix = $('.project-view').height() + 27;
	console.log("Second section is " + heightFix + "px tall");

	$('.project-menu').css('height', heightFix);
});

$('a[href*="#thirdSection"]').click(function () {
	var heightFix = $('.project-view').height() + 27;
	console.log("Third section is " + heightFix + "px tall");

	$('.project-menu').css('height', heightFix);
});

$('a[href*="#fourthSection"]').click(function () {
	var heightFix = $('.project-view').height() + 27;
	console.log("Fourth section is " + heightFix + "px tall");

	$('.project-menu').css('height', heightFix);
});