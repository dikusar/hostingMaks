$(function () {

	'use strict';

// fire slider
	var
		$slider = $('.js-swiper-container'),
		slider;

	slider = $slider.swiper({
		mode: 'horizontal',
		pagination: '.js-swiper-pagination',
		paginationClickable: true,
		speed: 1000,
		centeredSlides: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		loop: true,
		paginationElement: 'div',
	});

	$slider.mouseenter(function () {
		slider.stopAutoplay();
	});

	$slider.mouseleave(function () {
		slider.startAutoplay();
	});

// trigger event-click on div(class="swiper-pagination-switch")
	var
		$controll = $('.swiper-pagination-switch'),
		div = document.createElement('div');

	$(div).addClass('swiper-pagination-shadow')
		.appendTo($controll)
		.on('click', function () {
			$(this).parent().trigger('click');
		});
});
