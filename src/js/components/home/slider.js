import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,

        loop: true,
        navigation: {
            prevEl: '.testimonials__btn--prev',
            nextEl: '.testimonials__btn--next',
        },
    });
};
