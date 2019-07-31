$(function(){
    AOS.init();
    $('.search-icon ,.search-overlay,.search-overlay .close').on('click',function () {
        $('.search-overlay').toggleClass('active');
        $('body').toggleClass('overflow');
    })

    $('.search-overlay .close').on('click',function () {
        $('.search-overlay').toggleClass('active');
        $('body').toggleClass('overflow');
    })

    
    $('.search-overlay .form ').on('click',function (e) {
        e.stopPropagation()
    })

    $('.sm-nav ,.side-nav .close ').on('click',function () {
        $('.side-nav').toggleClass('nav-active');
        $('body').toggleClass('overflow');
    })


    $(".main-header .owl-carousel").owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 1,
        dots: true,
        smartSpeed: 1000
    });
    if($(window).width() <= 991){
        $(".delivering .row ").addClass("owl-carousel owl-theme");
        // $('.works ').find('.container').removeClass('container')
    }
    $('.delivering .owl-carousel').owlCarousel({
        autoplay: false,
        rtl:true,
        loop:true,
        items: 5,
        dots: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
        },
        navText: ["<span></span>","<span></span>"]
    });
    $('.owl-carousel').owlCarousel({
        // autoplay: true,
        rtl:true,
        loop:true,
        items: 1,
        smartSpeed: 1000
    });
    //map
    var adresse = "<img style='width:50px; text-align: left; display:inline-block; margin-right: 10px; vertical-align: sub;' src='img/logofooter.png'> <div style='display:inline-block;'>Blackstone<br>0540000000<br>info@blackstone.sa</div>";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(24.8629889, 46.5980617),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: 'images/pin.png',

    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
    var arr = [1, 2, 3];
    var j;
    for (j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }


});