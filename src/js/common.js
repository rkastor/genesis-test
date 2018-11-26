console.log('js is compile'); 

// внимание, здесь топор.. почему то отработанные скрипты не работают. 
// пришлось делать топор 

var sliderContainerFir = document.getElementById('slider-1');
var sliderContainerSec = document.getElementById('slider-2');

// [].forEach.call(sliderContainer, function (el) {
// });
    document.getElementById('slider-1').addEventListener('click', function (e) {
        console.log('321');
        if (e.target.classList.contains('section--slider__button--prev')) {
            // plusDivs(-1);
            plusSlides(-1,0);
        }
        if (e.target.classList.contains('section--slider__button--next')) {
            // plusDivs(1);
            plusSlides(1, 0);
        }
    });

    sliderContainerSec.addEventListener('click', function (e) {
        console.log('321');
        if (e.target.classList.contains('section--slider__button--prev')) {
            // plusDivs(-1);
            plusSlides(-1,1);
        }
        if (e.target.classList.contains('section--slider__button--next')) {
            // plusDivs(1);
            plusSlides(1,1);
        }
    });

var slideIndex = [1, 1];
var slideId = ["slider-item-1", "slider-item-2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
    }
        x[slideIndex[no] - 1].classList.add('active');
}