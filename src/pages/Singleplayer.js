import React, { useState } from 'react';

import 'animate.css';
import '../styles/style.css';
import '../styles/pages/Singleplayer.css';

import GuessBoard from '../components/GuessBoard';
import GuessInput from '../components/GuessInput';


const Singleplayer = () => {
   const [guessList, setGuessList] = useState([]);
   
   const [currentTry, setCurrentTry] = useState(0);
   const [tryCount, setTryCount] = useState(0);

   return (
      <div className="singleplayer-container">
         <div className="singleplayer-guess-list-wrapper">
            <GuessBoard guessList={guessList} latestTry={currentTry} />
         </div>
         <div className="singleplayer-submit-word-wrapper">
            <GuessInput 
               currentTry={currentTry} 
               setCurrentTry={setCurrentTry} 
               tryCount={tryCount} 
               setTryCount={setTryCount} 
               guessList={guessList} 
               setGuessList={setGuessList}
               hintsActivated={true} 
            />
         </div>
      </div>
   );
}

export default Singleplayer;