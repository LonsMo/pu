$(document).ready(function() {
	//logo
	$(".logo-box").mouseover(function() {
		$('.logo2').stop().animate({
			height: '50px'
		})
	}).mouseout(function() {
		$('.logo2').stop().animate({
			height: '0'
		})
	})
})