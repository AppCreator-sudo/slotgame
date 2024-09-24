// src/App.js
import React, { useState } from 'react';
import SlotMachine from './components/SlotMachine';
import TonConnectButton from './components/TonConnectButton';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ChipsBalance = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

function App() {
  const [chips, setChips] = useState(100); // Начальный баланс фишек

  const handlePurchase = () => {
    // Логика покупки фишек через TON Connect
    // Например, увеличиваем баланс фишек
    setChips(chips + 50);
    alert('Вы приобрели 50 фишек!');
  };

  return (
      <AppContainer>
        <h1>Слот-Машина</h1>
        <ChipsBalance>Фишки: {chips}</ChipsBalance>
        <SlotMachine />
        <TonConnectButton onPurchase={handlePurchase} />
      </AppContainer>
  );
}

export default App;
