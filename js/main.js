$(document).ready(function() {
	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');
  
	$menulink.click(function() {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	/*$('a.movie-showtime').hover(function(e){
		e.preventDefault;
		$(this).attr('data-original', $(this).html());
		$(this).html("<img src='images/hoverticket.jpg' width='10'>");
	},
	function() {

	});*/

	$('div.calendar a').click(function(e){
		e.preventDefault;
		$('.calendar').removeClass('today');
		$(this).parent('.calendar').addClass('today');
	})

	$("#nav-favorites").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").addClass("selected");
	});

	$("#nav-salads").click(function(e){
		e.preventDefault();
		
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-salads").show();

		$("#nav-salads").addClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
	});

	$("#nav-specials").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();	
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-specials").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").addClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
	});

	$("#nav-kids").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-kids").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").addClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
	});

	$("#nav-drinks").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-drinks").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
		$("#nav-kids").addClass("selected");
	});

	$("#nav-desserts").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-favorites").hide();
		$("#menu-desserts").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").addClass("selected");
		$("#nav-favorites").removeClass("selected");
	});


	(function($) {

    $.fn.fitVids = function(options) {
      var settings = {
        customSelector: null
      }

      var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

      div.className = 'fit-vids-style';
      div.innerHTML = '­<style>         \
		      .fluid-width-video-wrapper {        \
		         width: 100%;                     \
		         position: relative;              \
		         padding: 0;                      \
		      }                                   \
		                                          \
		      .fluid-width-video-wrapper iframe,  \
		      .fluid-width-video-wrapper object,  \
		      .fluid-width-video-wrapper embed {  \
		         position: absolute;              \
		         top: 0;                          \
		         left: 0;                         \
		         width: 100%;                     \
		         height: 100%;                    \
		      }                                   \
		    </style>';

      ref.parentNode.insertBefore(div, ref);

      if (options) {
        $.extend(settings, options);
      }

      return this.each(function() {
        var selectors = [
          "iframe[src^='http://player.vimeo.com']",
          "iframe[src^='http://www.youtube.com']",
          "iframe[src^='https://www.youtube.com']",
          "iframe[src^='http://www.kickstarter.com']",
          "object",
          "embed"
        ];

        if (settings.customSelector) {
          selectors.push(settings.customSelector);
        }

        var $allVideos = $(this).find(selectors.join(','));

        $allVideos.each(function() {
          var $this = $(this);
          if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
            return;
          }
          var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
            aspectRatio = height / $this.width();
          if (!$this.attr('id')) {
            var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
            $this.attr('id', videoID);
          }
          $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
          $this.removeAttr('height').removeAttr('width');
        });
      });

    }
  })(jQuery);

  $("#vid-container").fitVids();

});