//function to add bg color to header

var myNav = document.getElementById('main-header');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        myNav.classList.add("scrolled");
    } else {
        myNav.classList.remove("scrolled");
    }
};

function popup_Layer3(el) {
    var temp = $('#' + el);
    var el_dimmed = $('.wrap').prepend('<div class="laydim"></div>');
    $('.laydim').css("height", $(document).height());
    $(temp).slideDown();
    $('body').addClass('no-scroll');
    $(document).on('click', 'body.no-scroll .laydim', function () {
        $('.laydim').remove();
        $('html,body').removeClass('no-scroll');

        if ($('.poplay_type2_1').length) {
            popup_Layer_close3(el);
        }
    });

    $('#brand-mall-menu').slick('setPosition');
    $('#mall-in-mall-menu').slick('setPosition');
}

$(document).on('click', '.title_section', function () {
    $('.laydim').remove();
    $('html,body').removeClass('no-scroll');

    if ($('.poplay_type2_1').length) {
        popup_Layer_close3('bottom-nav-slide');
    }
});

function popup_Layer_close3(el) {
    var temp = $('#' + el);
    $(temp).slideUp();
    $('.laydim').remove();
    $('body').removeClass('no-scroll');
}

$(document).ready(function () {
    $('#main-banner').slick({
        dots: true,
        arrows: false,
        speed: 700,
        infinite: true,
        swipe: true,
        autoplay: true,
        //  infinite: true,
        swipeToSlide: true,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: "6%"
    });

    $('#brand-mall-menu').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $('.progress')
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);
    });

    $('#brand-mall-menu').slick({
        dots: false,
        arrows: false,
        speed: 700,
        infinite: false,
        swipe: true,
        slidesToShow: 1,
        infinite: true,
        swipeToSlide: true,
    });

    $('#mall-in-mall-menu').slick({
        dots: false,
        arrows: false,
        speed: 700,
        infinite: true,
        touchThreshold: 500,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        slidesToShow: 3,
        centerPadding: "30px",
        mobileFirst: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
            }
        }]
    });

    // Remove your custom active class active slide finished
    $('#mall-in-mall-menu').on('afterChange', function (e, slick, currentSlide, nextSlide) {
        $('.slick-clone-current').removeClass('slick-clone-current');
    })

    //tab code

    $('.nav-tab li a').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $(this).parent().siblings('.active').removeClass('active');
        $(this).parent().addClass('active');
        $('.tab-content.in').removeClass('in');
        $(target).addClass('in');
    });

})

$(".wishlist-icon").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    
})

// Flash sale code
// Set the date we're counting down to
var countDownDate = new Date("May 28, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // Display the result in the element with id="demo"
    // document.getElementById("countdown_days").innerHTML = days;
    document.getElementById("countdown_hours").innerHTML = hours;
    document.getElementById("countdown_minutes").innerHTML = minutes;
    document.getElementById("countdown_seconds").innerHTML = seconds;


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}


function stopVideo() {
    player.stopVideo();
}

//code to play video
var popupVideo = document.getElementById("popup-video");

function openVideo(videoId) {
    popupVideo.style.display = "block";
    document.body.classList.add("no-scroll");
    player = new YT.Player('player', {
        height: '360px',
        width: '100%',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady
        }
    });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == popupVideo) {
        popupVideo.style.display = "none";
        document.body.classList.remove("no-scroll");
        player.destroy();
    }
}

//tab function