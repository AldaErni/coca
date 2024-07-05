import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

export const useBlogSlider = () => {
    const swiper = new Swiper('.hero__slider', {
        modules: [Navigation],
        slidesPerView: 1.5,
        spaceBetween: 32,
        loop: true,
        navigation: {
            prevEl: '.hero__btn--prev',
            nextEl: '.hero__btn--next',
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

    return swiper; // Возвращаем экземпляр Swiper, чтобы его можно было уничтожить
};

export const useTabTrigger = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.querySelectorAll('.js-tab-trigger');
        const tabContents = document.querySelectorAll('.js-tab-content');
        let swiperInstance = null;

        // Функция для скрытия кнопок слайдера
        const hideSliderButtons = () => {
            const sliderButtons = document.querySelectorAll('.hero__btn');
            sliderButtons.forEach((button) => {
                button.style.display = 'none';
            });
        };

        // Функция для показа кнопок слайдера
        const showSliderButtons = () => {
            const sliderButtons = document.querySelectorAll('.hero__btn');
            sliderButtons.forEach((button) => {
                button.style.display = 'block';
            });
        };

        tabs.forEach((tab) => {
            tab.addEventListener('click', function () {
                // Если выбрана вкладка "View all"
                if (tab.getAttribute('data-tab') === 'all') {
                    showSliderButtons(); // Показываем кнопки слайдера
                    // Проверяем, был ли создан Swiper, и если да, уничтожаем его
                    if (swiperInstance !== null) {
                        swiperInstance.destroy();
                        swiperInstance = null;
                    }
                } else {
                    hideSliderButtons(); // Скрываем кнопки слайдера
                    // Если Swiper не был создан, инициализируем его
                    if (swiperInstance === null) {
                        swiperInstance = useBlogSlider();
                    }
                }

                // Remove 'active' class from all tabs
                tabs.forEach((t) => t.classList.remove('active'));
                // Add 'active' class to the clicked tab
                tab.classList.add('active');

                // Hide all tab contents
                tabContents.forEach((content) => {
                    content.style.display = 'none';
                });

                // Get the corresponding tab content ID and display it
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).style.display = 'block';
            });
        });

        // Special case for "View all" button
        const viewAllButton = document.querySelector(
            ".js-tab-trigger[data-tab='all']",
        );
        viewAllButton.addEventListener('click', function () {
            showSliderButtons(); // Показываем кнопки слайдера
            // Проверяем, был ли создан Swiper, и если да, уничтожаем его
            if (swiperInstance !== null) {
                swiperInstance.destroy();
                swiperInstance = null;
            }

            tabs.forEach((t) => t.classList.remove('active'));
            viewAllButton.classList.add('active');

            // Display all tab contents
            tabContents.forEach((content) => {
                content.style.display = 'block';
            });
        });
    });
};
