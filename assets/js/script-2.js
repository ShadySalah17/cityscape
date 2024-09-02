(function($) {
    var swiper = new Swiper(".boxes-slider", {
        slidesPerView: "5",
        spaceBetween: 35,
        slidesPerGroup: 5,
        speed: 3000,
        touchRatio: 1,
        allowTouchMove: true,
        simulateTouch: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})(jQuery);

(function($) {
    if (document.getElementById("slider1")) {
        var invest = 0;
        var rio = 0;
        var year = 0;
        const slider1 = document.getElementById("slider1");
        const labels1 = [
            " ",
            "10 آلاف",
            "50 ألف",
            "100 ألف",
            "200 ألف",
            "300 ألف",
            "400 ألف",
            "500 ألف",
            "600 ألف",
            "700 ألف",
            "800 ألف",
            "900 ألف",
            "1 مليون",
            "",
        ];
        noUiSlider.create(slider1, {
            start: [3], // Initial index of the labels1 array
            connect: ["lower", "upper"],

            direction: "rtl",
            range: {
                min: 0,
                max: labels1.length - 1,
            },

            padding: 1,
            pips: {
                mode: "values",
                values: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], // Use indices instead of actual values
                density: 100,
                format: {
                    to: function(value) {
                        const index = Math.round(value);
                        return labels1[index];
                    },
                },
            },
            step: 1, // Set the step value to 1
        });

        slider1.noUiSlider.on("update", function(values) {
            // Get the selected label
            const index = Math.round(values[0]);
            const label = labels1[index];

            const values2 = [
                "",
                10000,
                50000,
                100000,
                200000,
                300000,
                400000,
                500000,
                600000,
                700000,
                800000,
                900000,
                1000000
            ];

            invest = values2[index];

            let final_val = invest * rio * year + invest;
            let final_year = (final_val - invest) / invest;

            final_val = final_val.toLocaleString();
            $(".item1 h6").text(final_val);

            $(".invest-value").text(invest.toLocaleString());

            const percentage = (final_year * 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            const formattedPercentage = parseFloat(percentage).toString();

            $(".item2 h6").text(formattedPercentage + " %");
        });
        /***-------------------------------------------------------------------------------------* */

        const slider2 = document.getElementById("slider2");
        const labels2 = ["", "10%", "20%", "30%", "40%", ""];
        noUiSlider.create(slider2, {
            start: [2], // Initial index of the labels2 array
            connect: "lower",
            direction: "rtl",
            range: {
                min: 0,
                max: labels2.length - 1,
            },
            padding: 1,

            pips: {
                mode: "values",
                values: [0, 0, 1, 2, 3, 4], // Use indices instead of actual values
                density: 100,
                format: {
                    to: function(value) {
                        const index = Math.round(value);
                        return labels2[index];
                    },
                },
            },
            step: 1, // Set the step value to 1
        });

        slider2.noUiSlider.on("update", function(values) {
            // Get the selected label
            const index = Math.round(values[0]);
            const label = labels2[index];

            const values2 = ["", 0.1, 0.2, 0.3, 0.4];
            rio = values2[index];

            let final_val = invest * rio * year + invest;
            let final_year = (final_val - invest) / invest;

            final_val = final_val.toLocaleString();
            $(".item1 h6").text(final_val);

            $(".income-value").text(label);

            const percentage = (final_year * 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            const formattedPercentage = parseFloat(percentage).toString();

            $(".item2 h6").text(formattedPercentage + " %");
        });

        /***-------------------------------------------------------------------------------------* */
        const slider3 = document.getElementById("slider3");
        const labels3 = ["", "سنة", "سنتين", "3 سنوات", "4 سنوات", ""];
        noUiSlider.create(slider3, {
            start: [1], // Initial index of the labels3 array
            connect: "lower",
            direction: "rtl",
            range: {
                min: 0,
                max: labels3.length - 1,
            },
            padding: 1,
            pips: {
                mode: "values",
                values: [0, 0, 1, 2, 3, 4], // Use indices instead of actual values
                density: 100,
                format: {
                    to: function(value) {
                        const index = Math.round(value);
                        return labels3[index];
                    },
                },
            },
            step: 1, // Set the step value to 1
        });

        slider3.noUiSlider.on("update", function(values) {
            // Get the selected label
            const index = Math.round(values[0]);
            const label = labels3[index];

            // Get the corresponding value
            const values2 = ["", 1, 2, 3, 4];

            year = values2[index];

            let final_val = invest * rio * year + invest;
            let final_year = (final_val - invest) / invest;

            final_val = final_val.toLocaleString();
            $(".item1 h6").text(final_val);
            $(".time-value").text(label);

            const percentage = (final_year * 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            const formattedPercentage = parseFloat(percentage).toString();

            $(".item2 h6").text(formattedPercentage + " %");
        });
    }
    if (document.getElementById("slider4")) {
        /***--------------------------------dddddddddddddddddddd-----------------------------------------------------* */

        var invest2 = 0;
        var rio2 = 0;
        var year2 = 0;
        var month = 0;
        var dived = 12;
        const slider4 = document.getElementById("slider4");
        const labels4 = [
            " ",
            "10 آلاف",
            "50 ألف",
            "100 ألف",
            "200 ألف",
            "300 ألف",
            "400 ألف",
            "500 ألف",
            "600 ألف",
            "700 ألف",
            "800 ألف",
            "900 ألف",
            "1 مليون",
            ""

        ];
        noUiSlider.create(slider4, {
            start: [3], // Initial index of the labels4 array
            connect: ["lower", "upper"],

            direction: "rtl",
            range: {
                min: 0,
                max: labels4.length - 1,
            },

            padding: 1,
            pips: {
                mode: "values",
                values: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], // Use indices instead of actual values
                density: 100,
                format: {
                    to: function(value) {
                        const index = Math.round(value);
                        return labels4[index];
                    },
                },
            },
            step: 1, // Set the step value to 1
        });

        slider4.noUiSlider.on("update", function(values) {
            // Get the selected label
            const index = Math.round(values[0]);
            const label = labels4[index];

            const values2 = [
                "",
                10000,
                50000,
                100000,
                200000,
                300000,
                400000,
                500000,
                600000,
                700000,
                800000,
                900000,
                1000000
            ];

            invest2 = values2[index];

            let final_val = invest2 + year2 * rio2 * invest2;
            let final_year = (final_val - invest2) / invest2;
            final_val = final_val.toLocaleString();
            $(".item3 h6").text(final_val);
            $(".invest-value").text(invest2.toLocaleString());

            let renew = year2 * rio2 * invest2;
            renew = renew / (dived * year2);

            renew = renew.toLocaleString("en-US", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
            });

            $(".item5 h6").text(renew);

            const percentage = (final_year * 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
            const formattedPercentage = parseFloat(percentage).toString();

            $(".item4 h6").text(formattedPercentage + " %");
        });
        /***-------------------------------------------------------------------------------------* */

        const slider5 = document.getElementById("slider5");
        const labels5 = ["", "8%", "10%", "12%", "15%", ""];
        noUiSlider.create(slider5, {
            start: [2], // Initial index of the labels5 array
            connect: "lower",
            direction: "rtl",
            range: {
                min: 0,
                max: labels5.length - 1,
            },
            padding: 1,

            pips: {
                mode: "values",
                values: [0, 0, 1, 2, 3, 4], // Use indices instead of actual values
                density: 100,
                format: {
                    to: function(value) {
                        const index = Math.round(value);
                        return labels5[index];
                    },
                },
            },
            step: 1, // Set the step value to 1
        });

        slider5.noUiSlider.on("update", function(values) {
            // Get the selected label
            const index = Math.round(values[0]);
            const label = labels5[index];

            const values2 = ["", 0.08, 0.1, 0.12, 0.15];

            rio2 = values2[index];

            let final_val = invest2 + year2 * rio2 * invest2;
            let final_year = (final_val - invest2) / invest2;
            final_val = final_val.toLocaleString();
            $(".item3 h6").text(final_val);
            $(".income-value").text(label);

            let renew = year2 * rio2 * invest2;
            renew = renew / (dived * year2);

            renew = renew.toLocaleString("en-US", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
            });
            $(".item5 h6").text(renew);

            const percentage = (final_year * 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            const formattedPercentage = parseFloat(percentage).toString();

            $(".item4 h6").text(formattedPercentage + " %");
        });

        /*---------------------------------------------------------------------*/

        /*--------------------------------------------------------------------*/

        const slider7 = document.getElementById("slider7");
        const labels7 = ["", "سنة", "سنتين", "3 سنوات", "4 سنوات", ""];
        noUiSlider.create(slider7, {
            start: [1], // Initial index of the labels7 array
            connect: "lower",
            direction: "rtl",
            range: {
                min: 0,
                max: labels7.length - 1,
            },
            padding: 1,
            pips: {
                mode: "values",
                values: [0, 0, 1, 2, 3, 4], // Use indices instead of actual values
                density: 100,
                format: {
                    to: function(value) {
                        const index = Math.round(value);
                        return labels7[index];
                    },
                },
            },
            step: 1, // Set the step value to 1
        });

        slider7.noUiSlider.on("update", function(values) {
            // Get the selected label
            const index = Math.round(values[0]);
            const label = labels7[index];

            // Get the corresponding value
            const values2 = ["", 1, 2, 3, 4];

            year2 = values2[index];

            let final_val = invest2 + year2 * rio2 * invest2;
            let final_year = (final_val - invest2) / invest2;
            final_val = final_val.toLocaleString();
            $(".item3 h6").text(final_val);
            $(".time-value").text(label);



            let renew = year2 * rio2 * invest2;
            console.log(renew)
            renew = renew / (dived * year2);



            renew = renew.toLocaleString("en-US", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
            });
            $(".item5 h6").text(renew);

            const percentage = (final_year * 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            const formattedPercentage = parseFloat(percentage).toString();

            $(".item4 h6").text(formattedPercentage + " %");
        });

        /*---------------------------------------------------------------------*/

        /*--------------------------------------------------------------------*/

        const slider8 = document.getElementById("slider8");
        const labels8 = ["", "شهري", "ربع سنوي", "نصف سنوي ", "سنوي ", ""];
        noUiSlider.create(slider8, {
            start: [1], // Initial index of the labels8 array
            connect: "lower",
            direction: "rtl",
            range: {
                min: 0,
                max: labels8.length - 1,
            },
            padding: 1,
            pips: {
                mode: "values",
                values: [0, 0, 1, 2, 3, 4], // Use indices instead of actual values
                density: 100,
                format: {
                    to: function(value) {
                        const index = Math.round(value);
                        return labels8[index];
                    },
                },
            },
            step: 1, // Set the step value to 1
        });

        slider8.noUiSlider.on("update", function(values) {
            // Get the selected label
            const index = Math.round(values[0]);
            const label = labels8[index];

            // Get the corresponding value
            const values2 = ["", 12, 4, 2, 1];

            dived = values2[index];

            let renew = year2 * rio2 * invest2;
            renew = renew / (dived * year2);

            renew = renew.toLocaleString("en-US", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
            });

            $(".item5 h6").text(renew);
            $(".month-value").text(label);
        });
    }
})(jQuery);

(function($) {
    $(".btn-close").click(function(e) {
        e.preventDefault();

        const videos = document.getElementsByTagName("video");

        for (let i = 0; i < videos.length; i++) {
            videos[i].pause();
        }
    });

    $("[data-bs-toggle='modal']").click(function(e) {
        let data = $(this).attr("data-bs-target");

        $(data).find("video")[0].play();
    });
})(jQuery);

(function($) {
    async function addClasses() {
        // Add slit-in-vertical animation to boxes
        await Promise.all([
            addAnimation(".show-fund .box-1", "slit-in-vertical", 800),
            addAnimation(".show-fund .box-2", "slit-in-vertical", 1600),
            addAnimation(".show-fund .box-3", "slit-in-vertical", 2000),
        ]);

        // Fade in go-home and go-back buttons
        await addAnimation(
            ".show-fund .go-home,.show-fund .go-back",
            "fade-in",
            0
        );
        // Add fade-in-top animation to block-items and timeline-block
        await Promise.all([
            addAnimation(".show-fund .block-items", "fade-in-top", 1000),
            addAnimation(".show-fund .timeline-block", "fade-in-top", 2000),
        ]);

        // Animate timeline
        await animateTimeline();
    }

    async function addAnimation(selector, animationClass, delay) {
        await new Promise((resolve) => {
            setTimeout(() => {
                $(selector).addClass(animationClass);
                resolve();
            }, delay);
        });
    }

    async function animateTimeline() {
        const $timeline = $(".show-fund .timeline li");
        const $progressBar = $(".show-fund .progress-bar");
        const timelineLength = $timeline.length;

        for (let i = 0; i < timelineLength; i++) {
            const element = $timeline[i];
            const width = $(element).data("left");
            if (width) {
                console.log(i);
                let progressBarWidth = width + (i === timelineLength - 2 ? 30 : 50);
                await new Promise((resolve) => {
                    setTimeout(() => {
                        $progressBar.css("width", progressBarWidth);
                        $(element).show();
                        $(element).find("span").css("right", width);
                        $(element).find("div").addClass("text-focus-in");
                        resolve();
                    }, 200);
                });
            }
        }
    }
    $(".fund").removeClass("show-fund");

    $(".boxes-slider .box").click(function(e) {
        e.preventDefault();
        let target = $(this).data("target");

        $(".fund").removeClass("show-fund");

        $(".fund,.section-2").hide();
        $("[data-box='" + target + "']").addClass("show-fund");

        addClasses();
    });

    $(".fund .go-back").click(function(e) {
        e.preventDefault();

        $(".show-fund .box-1").removeClass("slit-in-vertical");
        $(".show-fund .box-2").removeClass("slit-in-vertical");
        $(".show-fund .box-3").removeClass("slit-in-vertical");
        $(".show-fund .block-items").removeClass("fade-in-top");
        $(".show-fund .timeline-block").removeClass("fade-in-top");
        $(".fund .fund-details .timeline ul li:not(.step-start):not(.step-end)").hide();
        $(".show-fund .progress-bar").css("width", 0);
        $(".fund .fund-details .timeline ul li div").removeClass("text-focus-in");
        $(".fund").removeClass("show-fund")
        $(".fund").hide();
        $(".section-2").show();

        $(".section-2 .texts ,.section-2 .qr ,.section-2 .apps  ").css(
            "animation-duration",
            "0s"
        );


    });

    homeAni();
    guideAni();
    FundsAni();
    calcAni();
    calcT1();
    async function homeAni() {
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".home-page .text ,.home-page h1").addClass("focus-in-expand");
                resolve();
            }, 120);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".home-page .box1").addClass("fade-in");
                resolve();
            }, 200);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".home-page .box2").addClass("fade-in");
                resolve();
            }, 200);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".home-page .box3").addClass("fade-in");
                resolve();
            }, 200);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".home-page .phone").addClass("fade-in-bottom");
                $(".home-page .qr").addClass(
                    "slide-in-blurred-right"
                );
                $(".home-page .apps").addClass(
                    "slide-in-blurred-left"
                );
                resolve();
            }, 250);
        });

        await new Promise((resolve) => {
            setTimeout(() => {


                resolve();
            }, 0);
        });
    }

    async function guideAni() {
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .text ,.guide-section h1").addClass(
                    "focus-in-expand"
                );

                resolve();
            }, 120);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .box1").addClass("fade-in");
                resolve();
            }, 350);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .box2").addClass("fade-in");
                resolve();
            }, 350);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .box3").addClass("fade-in");
                resolve();
            }, 350);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .box4").addClass("fade-in");
                resolve();
            }, 350);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .box5").addClass("fade-in");
                resolve();
            }, 350);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .phone").addClass("fade-in-bottom");
                resolve();
            }, 400);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".guide-section .qr").addClass("slide-in-blurred-right");
                $(".guide-section .apps").addClass("slide-in-blurred-left");

                resolve();
            }, 0);
        });
    }

    async function FundsAni() {

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .text ,.section-2 h1").addClass("focus-in-expand");

                resolve();
            }, 50);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .texts").addClass("focus-in-expand");
                resolve();
            }, 10);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .box1").addClass("fade-in");
                if (document.getElementById("counter1")) {
                    animateCounter(24, "counter1", 25, 100);
                }
                resolve();
            }, 50);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .box2").addClass("fade-in");
                if (document.getElementById("counter1")) {
                    animateCounter(5, "counter2", 5.9, 100);
                }
                resolve();
            }, 50);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .box3").addClass("fade-in");
                if (document.getElementById("counter1")) {
                    animateCounter(2, "counter3", 2.3, 100);
                }
                resolve();
            }, 50);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .box4").addClass("fade-in");
                if (document.getElementById("counter1")) {
                    animateCounter(15, "counter4", 16, 100);
                }
                resolve();
            }, 50);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .slider-box").addClass("fade-in");

                resolve();
            }, 10);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-2 .qr").addClass("slide-in-blurred-right");
                $(".section-2 .apps").addClass("slide-in-blurred-left");
                $(".section-2 .phone").addClass("fade-in");

                resolve();
            }, 0);
        });
    }

    async function calcAni() {
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-3 .text ,.section-3 h1").addClass("focus-in-expand");

                resolve();
            }, 120);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-3 .box1").addClass("slide-in-bck-right");
                $(".section-3 .box2").addClass("slide-in-bck-left");

                resolve();
            }, 350);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-3 .qr").addClass("slide-in-blurred-right");
                $(".section-3 .apps").addClass("slide-in-blurred-left");

                resolve();
            }, 0);
        });
    }

    async function calcT1() {
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-4 .text ,.section-4 h1").addClass("focus-in-expand");

                resolve();
            }, 120);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-4 .item1").addClass("slit-in-vertical");
                $(".section-4 .item2").addClass("slit-in-vertical");

                $(".section-4 .results>div").addClass("slit-in-vertical");

                resolve();
            }, 350);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                $(".range-sliders").addClass("fade-in");

                resolve();
            }, 800);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                $(".section-4 .qr").addClass("slide-in-blurred-right");
                $(".section-4 .apps").addClass("slide-in-blurred-left");

                resolve();
            }, 0);
        });
    }
})(jQuery);

function formatNumber(num) {
    if (num % 1 === 0) {
        return num.toFixed(0);
    } else {
        return num.toFixed(1);
    }
}

function animateCounter(start = 0, id, target, duration) {
    const element = document.getElementById(id);

    const end = target;
    const range = end - start;
    let currentTime = 0;
    const increment = 1;
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