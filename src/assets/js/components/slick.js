//= ../../../../node_modules/slick-carousel/slick/slick.js
// https://github.com/kenwheeler/slick/

// console.log("this is slick component")

let main__preview = $(".main__preview")

main__preview.slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  speed: 800,
  adaptiveHeight: false,
  // centerMode: true,
  // variableWidth: false,
  responsive: [
    { 
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    { 
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      { 
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
})