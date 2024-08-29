/**
 * WOW
 */


if (document.querySelector(".section-3  .images")) {
    var swiper = new Swiper(".section-3  .images", {

        slidesPerView: 1,
        speed: 800,
    });
}

if (document.querySelector(".section-3 .text")) {
    var swiper1 = new Swiper(".section-3 .text", {
        slidesPerView: 1,


        speed: 800,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    swiper1.controller.control = swiper;
    swiper.controller.control = swiper1;
}



if (document.querySelector(".main-slider")) {
    var main_swiper = new Swiper(".main-slider", {
        direction: "vertical",

        spaceBetween: 0,

        mousewheelControl: true,
        mousewheel: {
            sensitivity: 100,
        },
        speed: 1500,
        on: {
            slideChange: function() {
                let index = this.activeIndex;
                var header = document.querySelector(".lang a");

                if (index > 0) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
                if (index == 4) {
                    animateCounter("counter1", 24, 2000);
                    animateCounter("counter2", 5.7, 3000);
                    animateCounter("counter3", 2.1, 3000);
                    animateCounter("counter4", 16, 2000);
                }

            },
        },
    });
}



/*------------------------*/


function formatNumber(num) {
    if (num % 1 === 0) {
        return num.toFixed(0);
    } else {
        return num.toFixed(1);
    }
}

function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    const start = 0;
    const end = target;
    const range = end - start;
    let currentTime = 0;
    const increment = 20;
    const step = range / (duration / increment);

    function count() {
        currentTime += increment;
        element.textContent = formatNumber(
            start + step * (currentTime / increment)
        );
        if (currentTime < duration) {
            requestAnimationFrame(count);
        } else {
            element.textContent = formatNumber(end);
        }
    }

    count();
}