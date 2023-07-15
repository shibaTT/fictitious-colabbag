//OverWitdhDetector
document.querySelectorAll('*').forEach(el => el.clientWidth > document.body.clientWidth ? console.log(el) : null);

//flexslider
$('.p-design__slider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: false,
    slideshowSpeed: 7000,
});

//swiper
let itemThumbs1 = new Swiper('.slider1-thumbs', {
    slidesPerView: 3,
    //freeMode: true,
    cssMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    mousewheel: true,
    
    breakpoints: {
        959: {
            width: 500
        }
    }
});

let itemSwiper1 = new Swiper('.slider1-main', {
    loop: true,
    speed: 500,
    
    thumbs: {
        swiper: itemThumbs1
    },
});

let itemThumbs2 = new Swiper('.slider2-thumbs', {
    slidesPerView: 3,
    //freeMode: true,
    cssMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    mousewheel: true,

    breakpoints: {
        959: {
            width: 500
        }
    }
});

let itemSwiper2 = new Swiper('.slider2-main', {
    loop: true,
    speed: 500,

    thumbs: {
        swiper: itemThumbs2
    },
});

//inview
$('.p-ordermade__wrapper').on('inview', function(){
    $(this).addClass('fadeInUp');
});

$('.p-design__wrapper').on('inview', function(){
    $(this).addClass('fadeInUp');
});

$('.p-item__container').on('inview', function(){
    $(this).addClass('fadeInUp');
});

//rellax
var rellax = new Rellax('.p-gallery__image');
/****
* how to use rellaxjs
* 1. for html, add property "data-rellax-speed" or data-rellax-percentage or data-rellax-zindex in htmlcode(ex.div)
* 2. success!
****/