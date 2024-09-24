import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Проверка, если SDK Telegram недоступен (например, при локальной разработке)
if (!window.Telegram) {
    window.Telegram = {
        WebApp: {
            initData: {},
            initDataUnsafe: {},
            themeParams: {},
            close: () => console.log("Closing app..."),
            sendData: (data) => console.log("Sending data:", data),
            expand: () => console.log("Expanding app..."),
            onEvent: (event, callback) => {
                console.log(`Event '${event}' subscribed.`);
            },
            offEvent: (event, callback) => {
                console.log(`Event '${event}' unsubscribed.`);
            },
        },
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
