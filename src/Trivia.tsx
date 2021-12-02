import React from 'react';
import './styles/global.scss';

import { Routes, Route } from "react-router-dom";

import StartScreen from './pages/StartScreen/StartScreen';
import GameScreen from './pages/GameScreen/GameScreen';
import ResultScreen from './pages/ResultScreen/ResultScreen';

function Trivia() {
   return (
      <Routes>
         <Route path="/" element={<StartScreen />} />
         <Route path="/game" element={<GameScreen />} />
         <Route path="/result" element={<ResultScreen />} />
         <Route path="*" element={<StartScreen />} />
      </Routes>

   );
}

export default Trivia;
