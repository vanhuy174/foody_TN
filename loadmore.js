$(function () {
	$(".motcuahang").slice(0, 8).show();
	$("#loadMore").on('click', function (e) {
		e.preventDefault();
		$(".motcuahang:hidden").slice(0, 4).slideDown();
		if ($(".motcuahang:hidden").length == 0) {
			$("#load").fadeOut('slow');
		}
		$('html,body').animate({
			scrollTop: $(this).offset().top
		}, 1500);
	});
});

$('a[href=#top]').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 600);
	return false;
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.totop a').fadeIn();
	} else {
		$('.totop a').fadeOut();
	}
});