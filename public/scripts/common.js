define(function(require, exports, module) {

	var $ = require('../assets/jquery/jquery.js')

// 侧边导航栏的折叠效果
	$('.navs a').each(function() {
		var _this = $(this);
		if(_this.attr('href') !== 'javascript:;') {
				return;
			}
		_this.on('click', function(){
				_this.next('ul').slideToggle(10);	
		})
	})
// 侧边导航栏项目的选中
	$('.navs a').each(function() {
		var _this = $(this);
		var reg = /^\/(\w+)?/;
		var pathname = location.pathname;
		if(pathname.indexOf('/course') != -1) {
			var reg = /^\/course(\/\w+)/
			console.log(reg.exec(pathname));
			if(_this.attr('href') === reg.exec(pathname)[0]) {
				_this.parent().parent().css('display', 'block');
				_this.addClass('active');
			}
		} else {
			if(_this.attr('href') === reg.exec(pathname)[0]) {
				_this.addClass('active');
			}
		}	
	})
})