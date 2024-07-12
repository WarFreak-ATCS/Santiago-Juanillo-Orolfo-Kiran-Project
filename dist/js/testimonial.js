var slider = tns ({
    container: ".testimonial__slider",
    items: 1,
    slideBy: '1',
    loop:true,
    rewind:false,
    speed:6000,
    gutter:10,
    autoplay: true,
    controls:false,
    nav:false,
    autoplayButtonOutput: false,
    mouseDrag: true,

    responsive: {
        1024: {
            items: 3,
            gutter: 70,
        }, 
    }
})