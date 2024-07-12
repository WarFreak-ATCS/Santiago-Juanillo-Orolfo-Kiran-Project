
var slider = tns({
  container: '.blog__slider',
  items: 1,
  slideBy: '1',
  rewind:false,
  loop:true,
  speed:8000,
  gutter:30,
  autoplay: true,
  controls:false,
  nav:false,
  mouseDrag:true,
  autoplayButtonOutput: false,

  responsive: {
    1024: {
        items: 3,
        gutter:10,
    }, 
}
});