// src/components/TonConnectButton.js
import React, { useEffect, useState } from 'react';
import { TonConnect } from '@tonconnect/sdk';
import '../App.css'; // Импортируйте стили

const TonConnectButton = ({ onPurchase }) => {
    const [tonConnect, setTonConnect] = useState(null);
    const [userAddress, setUserAddress] = useState(null);

    useEffect(() => {
        const connect = new TonConnect({
            manifestUrl: 'https://your-app.com/tonconnect-manifest.json', // Замените на ваш URL манифеста
        });

        setTonConnect(connect);

        const handleConnect = (wallet) => {
            setUserAddress(wallet.address);
        };

        const handleDisconnect = () => {
            setUserAddress(null);
        };

        // Используйте метод on для обработки подключения и отключения
        connect.on('connect', handleConnect);
        connect.on('disconnect', handleDisconnect);

        return () => {
            connect.off('connect', handleConnect);
            connect.off('disconnect', handleDisconnect);
        };
    }, []);

    const handleConnectButton = async () => {
        if (tonConnect) {
            await tonConnect.sendConnectionRequest();
        }
    };

    const handlePurchase = () => {
        if (onPurchase) {
            onPurchase();
        }
        // Здесь можно добавить логику покупки фишек через TON Connect
    };

    return (
        <div>
            {userAddress ? (
                <div>
                    <p>Подключен: {userAddress}</p>
                    <button className="button" onClick={handlePurchase}>Купить фишки</button>
                </div>
            ) : (
                <button className="button" onClick={handleConnectButton}>Подключить кошелек TON</button>
            )}
        </div>
    );
};

export default TonConnectButton;
