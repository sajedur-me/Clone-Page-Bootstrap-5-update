;(function($) {
	var App = {

			scrollSidebar: function() {
			var navHeight = 0; //sticky menu height

			$(document).on("scroll", onScroll);

			$('.sidenav a[href*="#"]:not([href="#"])').on('click', function (e) {

				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

					e.preventDefault();

					$(document).off("scroll");

					$('a').each(function () {
						$(this).removeClass('current');
					});


					// $(this).addClass('current');


					var target = this.hash;

					var $target = $(target);


					if(!$target.length) 
						return false;


					$('html, body').stop().animate({
						'scrollTop': $target.offset().top - navHeight
					}, 500,function () {
						$(document).on("scroll", onScroll);
					});

				}
			});


			function onScroll(event){

				var scrollPosition = $(document).scrollTop() + navHeight

				$('.sidenav a[href*="#"]:not([href="#"])').each(function () {

					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

						var currentLink = $(this);

						var refElement = $(this.hash);


						if (refElement.length && (refElement.offset().top - 1 <= scrollPosition && refElement.offset().top + refElement.outerHeight() > scrollPosition)) {
							$('.sidenav a').removeClass("current");
							currentLink.addClass("current");
						}
						else{
							currentLink.removeClass("current");
						}
					}

				});
			}
		}
	}

	App.init = function() {
		this.scrollSidebar();
	}

	$(function() {
		App.init();
	});
}(jQuery));