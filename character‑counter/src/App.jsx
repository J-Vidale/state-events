// src/App.jsx
import React from 'react';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Character Counter
      </h1>
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
    </div>
  );
}

export default App;
