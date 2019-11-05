import React from 'react';
import './App.css';
import Knight from './Knight';
import Square from './Square';
import Board from './Board';

function App() {
  return (
    <div>
      <Board knightPosition={[7, 4]} />
    </div>
  );
}

export default App;
