import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const useIdeasSlider = () => {
    new Swiper('.ideas__slider', {
        slidesPerView: 2.5,
        
        spaceBetween: 32,
        loop: true,
    });
};
