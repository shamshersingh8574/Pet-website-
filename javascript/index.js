$(document).ready(function () {
    $(document).on('click', '.navabar-normal-icons , .navabar-cross-icons , .nav a', function () {
      $(".nav").toggleClass("main");
      $(".navabar-normal-icons").toggleClass("navbarIcon-1");
      $(".navabar-cross-icons").toggleClass("navbarIcon-2");
      $("body").addClass('oerflow-hidden');
    });
    $(document).on('click', '.navabar-cross-icons , .nav a', function () {
      $("body").removeClass('oerflow-hidden');
    })
  });
  // header
function changeBg() {
    var header = document.getElementById('header');
    var scrollValue = window.scrollY;
    if (scrollValue < 50) {
        header.classList.remove('bgColor');
        header.classList.remove('bgColor');

    } else {
        header.classList.add('bgColor');
    }

}
window.addEventListener('scroll', changeBg);
//review slide
$(document).ready(function () {
    $('.reviewsSlide').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            }
        ]
    });
})
//review slide
$(document).ready(function () {
    $('.pet-food-slide').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        dots: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            }
        ]
    });
})