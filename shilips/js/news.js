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
	//侧栏
	$(".sideBar").click(function() {
	$(this).stop().animate({
		right: "0px"
	})
}).mouseleave(function() {
	$(this).stop().animate({
		right: "-50px"
	})
})
//返回顶部
test.onclick = function(){
            var top = document.body.scrollTop || document.documentElement.scrollTop
            scrollBy(0,-top);
}
})


