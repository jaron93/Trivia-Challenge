import React, { useEffect } from 'react';
import './styles/global.scss';

import { Routes, Route } from "react-router-dom";

import StartScreen from './pages/StartScreen/StartScreen';
import GameScreen from './pages/GameScreen/GameScreen';
import ResultScreen from './pages/ResultScreen/ResultScreen';
import { clearGameState } from './store/slices/game';
import { clearPreferencesState } from './store/slices/preferences';
import { useDispatch } from 'react-redux';

function Trivia() {

   const dispatch = useDispatch()

   /* Clear Redux state after pressing Browser back button */
   useEffect(() => {
      window.addEventListener('popstate', (event) => {
         if (event.state) {
            dispatch(clearGameState())
            dispatch(clearPreferencesState())
         }
      }, false);
   }, [dispatch])


   return (
      <Routes>
         <Route path="/" element={<StartScreen />} />
         <Route path="/game" element={<GameScreen />} />
         <Route path="/result" element={<ResultScreen />} />
         <Route path="*" element={<StartScreen />} />
      </Routes>

   );
}


export default Trivia
