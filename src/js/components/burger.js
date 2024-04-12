export const useBurger = () => {
    const burgerBtn = document.querySelector('[data-burger="btn"]');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger--active');
    });
};
