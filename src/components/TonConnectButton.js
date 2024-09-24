// src/components/TonConnectButton.js
import React from 'react';
import { useTonConnectModal } from '@tonconnect/ui-react'; // Импортируем модальное окно TON Connect
import '../App.css'; // Импортируем стили

const TonConnectButton = () => {
    const { open, disconnect, walletAddress } = useTonConnectModal(); // Используем хук для управления состоянием

    const handleConnectButton = () => {
        if (walletAddress) {
            disconnect(); // Если кошелек уже подключен, отключаем его
        } else {
            open(); // Открыть модальное окно подключения
        }
    };

    return (
        <div>
            {walletAddress ? (
                <div>
                    <p>Подключен: {walletAddress}</p>
                    <button className="button" onClick={disconnect}>Отключить кошелек</button> {/* Кнопка для отключения */}
                </div>
            ) : (
                <button className="button" onClick={handleConnectButton}>Подключить кошелек TON</button>
            )}
        </div>
    );
};

export default TonConnectButton;
