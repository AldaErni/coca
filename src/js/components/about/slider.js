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
            381: {
                slidesPerView: 2.5,
            },
        },
    });
};
