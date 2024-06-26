import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

export const useIdeasSlider = () => {
    new Swiper('.ideas__slider', {
        modules: [Navigation],
        slidesPerView: 1.5,
        spaceBetween: 32,
        loop: true,
        navigation: {
            prevEl: '.ideas__btn--prev',
            nextEl: '.ideas__btn--next',
        },
        breakpoints: {
            769: {
                slidesPerView: 2.5,
            },
            381: {
                slidesPerView: 1.5,
            },
        },
    });
};
export const useCustomerSlider = () => {
    new Swiper('.customers__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        navigation: {
            prevEl: '.customers__btn--prev',
            nextEl: '.customers__btn--next',
        },
        breakpoints: {
            577: {
                slidesPerView: 2,
            },
            993: {
                slidesPerView: 3,
            },
        },
    });
};
