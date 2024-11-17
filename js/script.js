$(function(){$("#menu").slicknav({label:"",});
$(".slicknav_collapsed").click(function(){$("#brand_logo").toggle(250);});
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({loop:true,
    margin:100,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }});
  $("marquee").mouseenter(function(){this.stop();$("marquee").mouseleave(function(){this.start()});});
});

new WOW().init();

    