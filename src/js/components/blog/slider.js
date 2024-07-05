import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

export const useBlogSlider = () => {
    new Swiper('.hero__slider', {
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
};

export const useTabTrigger = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.querySelectorAll('.js-tab-trigger');
        const tabContents = document.querySelectorAll('.js-tab-content');

        tabs.forEach((tab) => {
            tab.addEventListener('click', function () {
                // Remove 'active' class from all tabs
                tabs.forEach((t) => t.classList.remove('active'));
                // Add 'active' class to the clicked tab
                tab.classList.add('active');

                // Hide all tab contents
                tabContents.forEach(
                    (content) => (content.style.display = 'none'),
                );

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
            tabs.forEach((t) => t.classList.remove('active'));
            viewAllButton.classList.add('active');

            // Display all tab contents
            tabContents.forEach((content) => (content.style.display = 'block'));
        });
    });
};
