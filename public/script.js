document.addEventListener('DOMContentLoaded', function () {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');
    const spinButton = document.getElementById('spin-button');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopup = document.getElementById('close-popup');

    const spinDuration = 2000; // Продолжительность анимации (2 секунды)
    let isSpinning = false;

    // Функция для показа popup
    const showPopup = (message) => {
        popupMessage.textContent = message;
        popup.style.display = 'flex';
    };

    // Функция для скрытия popup
    const hidePopup = () => {
        popup.style.display = 'none';
    };

    // Закрытие popup при нажатии на кнопку
    closePopup.addEventListener('click', hidePopup);

    const spinSlots = () => {
        if (isSpinning) return;
        isSpinning = true;
        spinButton.disabled = true;
        spinButton.textContent = 'Вращение...';

        const randomValue = () => Math.floor(Math.random() * 10);

        const updateSlots = () => {
            slot1.textContent = randomValue();
            slot2.textContent = randomValue();
            slot3.textContent = randomValue();
        };

        const checkWin = () => {
            if (slot1.textContent === slot2.textContent && slot2.textContent === slot3.textContent) {
                showPopup('Поздравляем! Вы выиграли!');
            } else {
                showPopup('Попробуйте снова!');
            }
        };

        // Запускаем анимацию вращения
        let interval = setInterval(updateSlots, 100);

        // Через 2 секунды останавливаем вращение
        setTimeout(() => {
            clearInterval(interval);
            isSpinning = false;
            spinButton.disabled = false;
            spinButton.textContent = 'Вращать';
            checkWin();
        }, spinDuration);
    };

    spinButton.addEventListener('click', spinSlots);
});
