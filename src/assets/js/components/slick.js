//= ../../../../node_modules/slick-carousel/slick/slick.js
// https://github.com/kenwheeler/slick/

console.log("this is slick component");

let main__preview = $(".main__preview");

main__preview.slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 800,
  adaptiveHeight: false,
  // centerMode: true,
  // variableWidth: false,
  responsive: [
    { 
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
})