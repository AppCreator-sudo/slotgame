// src/components/SpinButton.js
import React from 'react';
import '../App.css'; // Импортируйте стили

const SpinButton = ({ onClick, isSpinning }) => {
    return (
        <button className="button" onClick={onClick} disabled={isSpinning}>
            {isSpinning ? 'Вращение...' : 'Вращать'}
        </button>
    );
};

export default SpinButton;
