import { useEffect } from 'react';
import './styles/global.scss';
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { clearGameState } from './store/slices/game';
import { clearPreferencesState } from './store/slices/preferences';


import StartScreen from './pages/StartScreen/StartScreen';
import GameScreen from './pages/GameScreen/GameScreen';
import ResultScreen from './pages/ResultScreen/ResultScreen';

function Trivia() {

   const dispatch = useDispatch()
   let location = useLocation();

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
      <AnimatePresence exitBeforeEnter>
         <Routes key={location.pathname} location={location}>
            <Route path="/" element={<StartScreen />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/result" element={<ResultScreen />} />
            <Route path="*" element={<StartScreen />} />
         </Routes >
      </AnimatePresence>
   );
}


export default Trivia
