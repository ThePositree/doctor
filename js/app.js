$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        centerMode:true,
        responsive:[{
            breakpoint:900,
            settings: {
                variableWidth:true,
            }
        }]
    });
})