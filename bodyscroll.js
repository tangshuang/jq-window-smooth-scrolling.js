$(document).ready(function(){
	// add your own <div id="guest-comment"></div>
	$('body').append('<div id="site-scroll"><a href="#" id="to-top">返回顶部</a><a href="#" id="to-comment">留言</a><a href="#" id="to-bottom">返回底部</a></div>');
	
	$('div#site-scroll').css('top',($(window).height())*2/5 + 'px');
	
	$('a#to-top').live('click',function($e){
		$e.preventDefault();
		$('html,body').animate({scrollTop: 0},800);
		return false;
	});
	$('a#to-comment').live('click',function($e){
		$e.preventDefault();
		$('html,body').animate({scrollTop: $('#respond').offset().top - 100 },800);
		return false;
	});
	$('a#to-bottom').live('click',function($e){
		$e.preventDefault();
		$('html,body').animate({scrollTop: $(document).height()},5000);
		return false;
	});
});
