document.addEventListener('DOMContentLoaded', function () {
    const slot1 = document.getElementById('slot1').querySelector('i');
    const slot2 = document.getElementById('slot2').querySelector('i');
    const slot3 = document.getElementById('slot3').querySelector('i');
    const spinButton = document.getElementById('spin-button');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    const spinDuration = 2000; // Продолжительность анимации (2 секунды)
    let isSpinning = false;

    // Массив иконок FontAwesome
    const icons = ['fa-gem', 'fa-apple-alt', 'fa-star', 'fa-heart', 'fa-lemon'];

    // Функция для показа popup
    const showPopup = (message) => {
        popupMessage.textContent = message;
        popup.style.display = 'flex'; // Убедимся, что popup отображается
        setTimeout(() => {
            popup.classList.add('active'); // Добавляем класс для анимации
        }, 10); // Небольшая задержка, чтобы анимация сработала

        // Автоматическое закрытие popup через 2 секунды
        setTimeout(() => {
            hidePopup();
        }, 2000);
    };

    // Функция для скрытия popup
    const hidePopup = () => {
        popup.classList.remove('active'); // Удаляем класс, чтобы скрыть

        // Убираем popup из отображения через 0.5 секунды (время анимации)
        setTimeout(() => {
            popup.style.display = 'none'; // Скрываем popup после анимации
        }, 500);
    };

    // Генерация случайной иконки
    const randomIcon = () => {
        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    };

    const updateSlots = () => {
        slot1.className = `fas ${randomIcon()}`;
        slot2.className = `fas ${randomIcon()}`;
        slot3.className = `fas ${randomIcon()}`;
    };

    const checkWin = () => {
        if (slot1.className === slot2.className && slot2.className === slot3.className) {
            showPopup('Поздравляем! Вы выиграли!');
        } else {
            showPopup('Попробуйте снова!');
        }
    };

    const spinSlots = () => {
        if (isSpinning) return;
        isSpinning = true;
        spinButton.disabled = true;
        spinButton.textContent = 'Вращение...';

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
