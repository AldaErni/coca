export const usePriceSwitcher = () => {
    const switcher = document.querySelector('[data-price="switcher"]');
    const starterPrice = document.querySelector('[data-price="starter"]');
    const popularPrice = document.querySelector('[data-price="popular"]');
    const enterprisePrice = document.querySelector('[data-price="enterprise"]');

    const priceList = {
        starter: {
            default: 125,
            withSale: 100,
        },
        popular: {
            default: 1750,
            withSale: 1400,
        },
        enterprise: {
            default: 2625,
            withSale: 2100,
        },
    };

    const setPriceWithSale = () => {
        starterPrice.textContent = priceList.starter.withSale;
        popularPrice.textContent = priceList.popular.withSale;
        enterprisePrice.textContent = priceList.enterprise.withSale;
    };

    const setPriceDefault = () => {
        starterPrice.textContent = priceList.starter.default;
        popularPrice.textContent = priceList.popular.default;
        enterprisePrice.textContent = priceList.enterprise.default;
    };

    switcher.checked = true;
    setPriceWithSale();

    switcher.addEventListener('click', () => {
        if (switcher.checked) {
            setPriceWithSale();
        } else {
          setPriceDefault();
        };
    });
};
