/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//Scroll to animations
$(function() {
    var selfie = $(".team-member");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            selfie.addClass("animated fadeInLeft");
        } else {
            selfie.removeClass("animated fadeInLeft");
        }
    });
});

$(function() {
    var first = $("#first");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 923) {
            first.addClass("animated bounceInLeft");
        } else {
            first.removeClass("animated bounceInLeft");
        }
    });
});

$(function() {
    var second = $("#second");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1222) {
            second.addClass("animated bounceInRight");
        } else {
            second.removeClass("animated bounceInRight");
        }
    });
});

$(function() {
    var third = $("#third");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1570) {
            third.addClass("animated bounceInLeft");
        } else {
            third.removeClass("animated bounceInLeft");
        }
    });
});

$(function() {
    var fourth = $("#fourth");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1870) {
            fourth.addClass("animated bounceInRight");
        } else {
            fourth.removeClass("animated bounceInRight");
        }
    });
});

$(function() {
    var last = $("#last");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 2170) {
            last.addClass("animated tada");
        } else {
            last.removeClass("animated tada");
        }
    });
});

