/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Initialize Hamburger
4. Init Special Slider
5. Init Video
6. Init Search


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var hamb = $('.hamburger');
	var hambActive = false;
	var menuActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHamburger();
	initSpecialSlider();
	initVideo();
	initSearch();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		// if(window.innerWidth > 991 && menuActive)
		// {
		// 	closeMenu();
		// }
	}

	/* 



	4. Set Header

	*/

	function initSpecialSlider()
	{
		if($('.special_slider').length)
		{
			var specialSlider = $('.special_slider');
			specialSlider.owlCarousel(
			{
				loop:true,
				autoplay:false,
				center:true,
				stagePadding:190,
				margin:5,
				nav:false,
				dots:false,
				smartSpeed:700,
				responsive:
				{
					0:{items:1,margin:5,stagePadding:0},
					992:{items:2,margin:5,stagePadding:130},
					1280:{items:3,margin:5,stagePadding:190}
				}
			});
		}

		if($('.special_slider_nav').length)
		{
			var next = $('.special_slider_nav');
			next.on('click', function()
			{
				specialSlider.trigger('next.owl.carousel');
			});
		}
	}

	/* 

	5. Init Video

	*/

	function initVideo()
	{
		$('.video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
	}

	/* 

	6. Init Search

	*/

	function initSearch()
	{
		if($('.search').length)
		{
			var search = $('.search');
			search.on('click', function(e)
			{
				var target = $(e.target);
				if(!target.hasClass('ctrl_class'))
				{
					$(this).toggleClass('active');
				}
			});
		}
	}
});
/**booking***/
$('.form-control').each(function () {
			floatedLabel($(this));
		});

		$('.form-control').on('input', function () {
			floatedLabel($(this));
		});

		function floatedLabel(input) {
			var $field = input.closest('.form-group');
			if (input.val()) {
				$field.addClass('input-not-empty');
			} else {
				$field.removeClass('input-not-empty');
			}
		}

