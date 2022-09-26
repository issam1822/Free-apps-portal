// Lazy Load
$(document).ready(function () {
  "use strict";

  $(".apps img, .featured-apps img, .news-box img, .other-news img, .topics-home img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: true,
    onError: function (element) {
      console.log("error loading " + element.data("src"));
    },
  });
});

/*
 * Bootstrap Cookie Alert by Wruczek
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Released under MIT license
 */
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    if (!cookieAlert) {
       return;
    }

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    // Show the alert if we cant find the "acceptCookies" cookie
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    // When clicking on the agree button, create a 1 year
    // cookie to remember user's choice and close the banner
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");
    });

    // Cookie functions from w3schools
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();

// Show more/less content
$(document).ready(function () {
	"use strict";

  if (document.getElementById("description")) {
	var pagination_data = document.getElementById('description');
	var show_more = pagination_data.getAttribute('data-show-more');
	var show_less = pagination_data.getAttribute('data-show-less');

	$readMoreJS.init({
	target: '.description',
	numOfWords: 75,
	toggle: true,
	moreLink: show_more,
	lessLink: show_less
});
}
});

// Show progress bar using data attributes
$(document).ready(function () {
	"use strict";

$('.progress > div').css('width', function(){
    return $(this).parent().data('bar-width') + '%'
});
});

// Main Slider
$(document).ready(function () {
	"use strict";
	
	  if (document.getElementById("swiper-main")) {
var swiper = new Swiper('.swiper-main', {
    loop: true,
    autoplay: {
        delay: 3500
    },
    pagination: {
        el: '.swiper-pagination-main',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
});
$('.swiper-pagination-bullet').hover(function () {
    "use strict";

    $(this).trigger("click");
});
}
});

// Tooltips
$(function () {
    "use strict";

    $('[data-toggle="tooltip"]').tooltip()
})

// SimpleLightbox
$(function () {
    "use strict";
    
  if (document.getElementById("screenshot-main")) {
    $('#screenshot-main a').simpleLightbox();
  }
})