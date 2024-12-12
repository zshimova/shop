document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gifts__card').forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault();

            const modal = document.getElementById('giftModal');
            const modalImage = modal.querySelector('.modal__image');
            const modalCategory = modal.querySelector('.modal__category');
            const modalName = modal.querySelector('.modal__name');

            // Извлекаем данные из карточки
            const category = card.dataset.category;
            const name = card.dataset.name;
            const image = card.dataset.image;

            // Заполняем модальное окно
            modalImage.src = image;
            modalCategory.textContent = category;
            modalName.textContent = name;

            // Открываем модальное окно
            modal.style.display = 'flex';
        });
    });

    // Закрытие модального окна
    const modal = document.getElementById('giftModal');
    modal.querySelector('.modal__close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его содержимого
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
