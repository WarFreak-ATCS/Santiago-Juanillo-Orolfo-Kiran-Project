
window.addEventListener("resize", () => {
if(window.outerWidth <= 520) {
    document.querySelector('.sponsor__slider').classList.add("mobile")
} else {
    document.querySelector('.sponsor__slider').classList.remove("mobile")
}
});

var slider = tns({
    container: ".sponsor__slider mobile",
    items: 1,
    speed:  400,
    gutter: 100,
    slideBy:  "1",
    autoplay: true,
    nav: false,
    navPosition: "bottom",
    controls: false,
    autoplayButtonOutput: false,
    mode: "gallery",
});
    






