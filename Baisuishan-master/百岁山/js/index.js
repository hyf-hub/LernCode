function Carousel(){
	/*轮播图js*/    
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 2000,
			// 停留两秒
			stopOnLastSlide: true,//当轮播完之后是否显示在最后一张
			disableOnInteraction: false,//点击之后是否继计时轮播
		},
		disableOnInteraction: false,
	  	pagination :{
	        el: '.swiper-pagination',
	        clickable: true,
	        uniqueNavElements: false,
	        renderBullet: function (index, className) {
	          return '<span class="' + className + '">' + '</span>';
		  },
	    scrollbar: {
				el: '.swiper-scrollbar',
				hide: true,		//隐藏滑东条
			},
		},
			resistanceRatio : 0.9, //显示再拖动会回弹
				// loop:true,/*是否无限循环*/
	})  	
}
/*
	轮播图切换到首页按钮
 */
function init(){
		$("#Change").click(function(){
		$("#Carousel").css("display","none");
		$("#Change").css("display","none");
		$("#main_box").css("display","block");
		$("#Menu").css("top",height-182);
	})
		var height = $(window).height();
		var width  = $(window).width();
		$("#Carousel").css("height",height);
		$("#Carousel").css("width",width);
		$(".swiper-container").css("height",height);
		$(".swiper-container").css("width",width);
		$(".Carousel_img").css("height",height);
		$(".Carousel_img").css("width",width);
		$("#Change").css("margin-left",parseInt(width*0.85));
		$(".swiper-pagination").css("bottom", parseInt(height*0.067));
}
function main(){
	Carousel();//轮播图插件
	init();

}

