AOS.init();
		/*-----------------------
		--> Off Canvas Menu
		-------------------------*/
		/*Variables*/
		var $offCanvasNav = $('.off-canvas-nav'),
			$offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

		/*Add Toggle Button With Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

		/*Close Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.slideUp();

		/*Category Sub Menu Toggle*/
		$offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
			var $this = $(this);
			if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
				e.preventDefault();
				if ($this.siblings('ul:visible').length) {
					$this.parent('li').removeClass('active');
					$this.siblings('ul').slideUp();
				} else {
					$this.parent('li').addClass('active');
					$this.closest('li').siblings('li').find('ul:visible').slideUp();
					$this.siblings('ul').slideDown();
				}
			}
		});

		// Off Canvas Open close
		$(".off-canvas-btn").on('click', function () {
			$(".off-canvas-wrapper").addClass('open');
		});

		$(".btn-close-off-canvas").on('click', function () {
			$(".off-canvas-wrapper").removeClass('open');
		});


$('document').ready(function(){

  //Toggle button fuctionality

  $("[class*='btn--toggle']").on('change',function(e){   
      var getTarget = $(this).attr('data-tab-target'); 
      var inpSelect = $(this).children().children('input[type="checkbox"]');

      if($(inpSelect).is(':checked')){
          if($(getTarget).hasClass('monthly')){
              $(getTarget).removeClass('monthly');
              $(getTarget).addClass('yearly');          
          }
      }else{
          if($(getTarget).hasClass('yearly')){
              $(getTarget).removeClass('yearly');
              $(getTarget).addClass('monthly');         
          }
      }    
  })
})


jQuery(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function(){
    $('.preloader-wrap').fadeOut();
    $('body').removeClass('preloader-site');
});
