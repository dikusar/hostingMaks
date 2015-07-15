$(function () {

	'use strict';

	var
		$slider = $('.js-swiper-container'),
		slider;

	slider = $slider.swiper({
		mode: 'horizontal',
		pagination: '.js-swiper-pagination',
		paginationClickable: true,
		speed: 1000,
		centeredSlides: true,
		/*autoplay: 3000,*/
		autoplayDisableOnInteraction: false,
		loop: true,
		simulateTouch: true,
		paginationBulletRender: function (index, className) {
			return '<span class="swiper__controll swiper-pagination-bullet">' + index + '</span>';
		}
	});

	$slider.mouseenter(function () {
		slider.stopAutoplay();
	});

	$slider.mouseleave(function () {
		slider.startAutoplay();
	});

});
