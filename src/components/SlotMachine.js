// src/components/SlotMachine.js
import React, { useState } from 'react';
import '../App.css'; // Импортируйте стили
import Slot from './Slot';

const SlotMachine = () => {
    const [slots, setSlots] = useState([1, 2, 3]);
    const [isSpinning, setIsSpinning] = useState(false);

    const spinSlots = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        const spinDuration = 2000; // 2 секунды
        setTimeout(() => {
            const newSlots = slots.map(() => Math.floor(Math.random() * 10));
            setSlots(newSlots);
            setIsSpinning(false);
            if (newSlots.every((val) => val === newSlots[0])) {
                alert('Поздравляем! Вы выиграли!');
            }
        }, spinDuration);
    };

    return (
        <div className="machine-container">
            <div className="slots-row">
                {slots.map((value, index) => (
                    <Slot key={index} value={value} />
                ))}
            </div>
            <button className="button" onClick={spinSlots} disabled={isSpinning}>
                {isSpinning ? 'Вращение...' : 'Вращать'}
            </button>
        </div>
    );
};

export default SlotMachine;
