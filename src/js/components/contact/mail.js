export const useMail = () => {
    document
        .getElementById('add-form')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Отправлено!');
        });
};
