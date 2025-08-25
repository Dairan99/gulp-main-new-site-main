
/* Swipers */

//new swiper

document.addEventListener('DOMContentLoaded', function() {
    const clinicServices = document.querySelectorAll('.reviews-page__item');
    let swiperInstance = null;

    function initLicenseSwiper() {
        if (window.innerWidth < 1024) {
            // Активация слайдера
            if (!swiperInstance) {
                swiperInstance = new Swiper('.clinicServicesSwiper', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.clinic-service__swiper-button-next',
                        prevEl: '.clinic-service__swiper-button-prev',
                    },
                    pagination: {
                        el: '.clinic-service__swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        850: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        950: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }
                });
            }
        } else {
            // Деактивация слайдера
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
            // Возвращаем нормальное состояние
            clinicServices.forEach(item => {
                item.style.width = '';
                item.style.marginRight = '';
            });
        }
    }

    // Инициализация при загрузке
    initLicenseSwiper();

    // Оптимизация ресайза
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initLicenseSwiper, 150);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const licenseItems = document.querySelectorAll('.stagesTreatmentSwiper');
    let swiperInstance = null;

    function initLicenseSwiper() {
        if (window.innerWidth < 1024) {
            // Активация слайдера
            if (!swiperInstance) {
                swiperInstance = new Swiper('.stagesTreatmentSwiper', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.stages-treatment__swiper-button-next',
                        prevEl: '.stages-treatment__swiper-button-prev',
                    },
                    pagination: {
                        el: '.stages-treatment__swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.08,
                            spaceBetween: 20
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        850: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1023: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }
                });
            }
        } else {
            // Деактивация слайдера
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
            // Возвращаем нормальное состояние
            licenseItems.forEach(item => {
                item.style.width = '';
                item.style.marginRight = '';
            });
        }
    }

    // Инициализация при загрузке
    initLicenseSwiper();

    // Оптимизация ресайза
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initLicenseSwiper, 150);
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const licenseItems = document.querySelectorAll('.reviews-page__item');
//     let swiperInstance = null;

//     function initLicenseSwiper() {
//         if (window.innerWidth < 1024) {
//             // Активация слайдера
//             if (!swiperInstance) {
//                 swiperInstance = new Swiper('.reviewsPageSwiper', {
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                     navigation: {
//                         nextEl: '.reviews-page__swiper-button-next',
//                         prevEl: '.reviews-page__swiper-button-prev',
//                     },
//                     pagination: {
//                         el: '.reviews-page__swiper-pagination',
//                         clickable: true,
//                     },
//                     breakpoints: {
//                         650: {
//                             slidesPerView: 2,
//                             spaceBetween: 20
//                         },
//                         850: {
//                             slidesPerView: 3,
//                             spaceBetween: 20
//                         },
//                         1024: {
//                             slidesPerView: 4,
//                             spaceBetween: 26
//                         }
//                     }
//                 });
//             }
//         } else {
//             // Деактивация слайдера
//             if (swiperInstance) {
//                 swiperInstance.destroy(true, true);
//                 swiperInstance = null;
//             }
//             // Возвращаем нормальное состояние
//             licenseItems.forEach(item => {
//                 item.style.width = '';
//                 item.style.marginRight = '';
//             });
//         }
//     }

//     // Инициализация при загрузке
//     initLicenseSwiper();

//     // Оптимизация ресайза
//     let resizeTimeout;
//     window.addEventListener('resize', function() {
//         clearTimeout(resizeTimeout);
//         resizeTimeout = setTimeout(initLicenseSwiper, 150);
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const doctorsClinicAllItems = document.querySelectorAll('.doctors-clinic-all__item');
    let swiperInstance = null;

    function initLicenseSwiper() {
        if (window.innerWidth < 1024) {

            // Активация слайдера
            if (!swiperInstance) {
                swiperInstance = new Swiper('.doctorsClinicAll', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.doctors-clinic-all__swiper-button-next',
                        prevEl: '.doctors-clinic-all__swiper-button-prev',
                    },
                    pagination: {
                        el: '.doctors-clinic-all__swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        450: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        850: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 26
                        }
                    }
                });
            }
        } else {

            // Деактивация слайдера
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
            // Возвращаем нормальное состояние
            doctorsClinicAllItems.forEach(item => {
                item.style.width = '';
                item.style.marginRight = '';
            });
        }
    }

    // Инициализация при загрузке
    initLicenseSwiper();

    // Оптимизация ресайза
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initLicenseSwiper, 150);
    });
});

//new swiper

// about
const aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".about-treatment__swiper-button-next",
        prevEl: ".about-treatment__swiper-button-prev",
    },
    pagination: {
        el: ".about-treatment__swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

const aboutClinickSwiper = new Swiper(".aboutClinickSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".about-company__swiper-button-next",
        prevEl: ".about-company__swiper-button-prev",
    },
    pagination: {
        el: ".about-company__swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

const doctorsClinicSwiper = new Swiper(".swiperReviewsSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".reviews-slider__swiper-button-next",
        prevEl: ".reviews-slider__swiper-button-prev",
    },
    pagination: {
        el: ".reviews-slider__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1023: {
            slidesPerView: 2,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

const licenses = new Swiper(".licensesSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".licenses__swiper-button-next",
        prevEl: ".licenses__swiper-button-prev",
    },
    pagination: {
        el: ".licenses__swiper-pagination",
        clickable: true,
        type: "fraction",
    },

    breakpoints: {
        1100: {
            slidesPerView: 4,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        420: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});

const cards = new Swiper(".cardsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".cards__swiper-button-next",
        prevEl: ".cards__swiper-button-prev",
    },
    pagination: {
        el: ".cards__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1023: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});

const doctorCertificates = new Swiper(".doctorSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".doctor-slider__swiper-button-next",
        prevEl: ".doctor-slider__swiper-button-prev",
    },
    pagination: {
        el: ".doctor-slider__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1023: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});

const ourspecialists = new Swiper(".ourSpecialistsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".our-specialists__swiper-button-next",
        prevEl: ".our-specialists__swiper-button-prev",
    },
    pagination: {
        el: ".our-specialists-pagination",
        clickable: true,
    },

    breakpoints: {
        1023: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        550: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});




/* End swipers */