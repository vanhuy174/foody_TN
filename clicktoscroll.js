//chuyến đến các vị trí khi nhấn đến các id
$("#danhsachmon").click(function() {
	$('html,body').animate({
		scrollTop: $(".danhsachmon").offset().top},
		'slow');
});
$("#lstimg").click(function() {
	$('html,body').animate({
		scrollTop: $(".lstimg").offset().top},
		'slow');
});
$("#mapm").click(function() {
	$('html,body').animate({
		scrollTop: $("#map").offset().top},
		'slow');
});
$("#bldg").click(function() {
	$('html,body').animate({
		scrollTop: $(".bldg").offset().top},
		'slow');
});

//để thanh cuộn của bình luận ở dưới khi load trang
$('#scroll').scrollTop($('#scroll')[0].scrollHeight);
