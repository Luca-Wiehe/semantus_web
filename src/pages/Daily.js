import React, { useState } from 'react';

import '../styles/style.css';
import '../styles/pages/Daily.css';
import '../styles/pages/Home.css';
import 'animate.css';

import GuessBoard from '../components/GuessBoard';
import GuessInput from '../components/GuessInput';

const Daily = () => {
   const [guessList, setGuessList] = useState([]);
   
   const [currentTry, setCurrentTry] = useState(0);
   const [tryCount, setTryCount] = useState(0);

   return (
      <div className="daily-container">
         <div className="guess-list-wrapper">
            <GuessBoard guessList={guessList} latestTry={currentTry} />
         </div>
         <div className="daily-submit-word-wrapper">
            <GuessInput 
               hintsActivated={true} 
               guessList={guessList}
               setGuessList={setGuessList}
               currentTry={currentTry}
               setCurrentTry={setCurrentTry}
               tryCount={tryCount}
               setTryCount={setTryCount}
            />
         </div>
      </div>
   );
}

export default Daily;
