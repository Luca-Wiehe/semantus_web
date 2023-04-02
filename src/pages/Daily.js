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

   const submitAction = (word) => {
      // check if word is already in guessList
      const isRedundant = guessList.some(guess => guess.word === word);
      
      // TODO: validate existence of word in German language

      // TODO: compute cosine similarity
      const similarity = (Math.random() * 2 - 1).toFixed(2);

      // TODO: check if word in top 1000, otherwise specify "warm", "medium", or "cold"
      const rank = similarity < 0 ? "cold" : (similarity <= 0.25 ? "medium" : (similarity <= 0.5 ? "warm" : `${1000 - (Math.floor(Math.random() * 1000) + 1)}`));

      if (!isRedundant) {
         // if word exists, increment tryCount
         setCurrentTry(currentTry + 1);
         setTryCount(tryCount + 1);

         // add try to guessList
         setGuessList(
            [...guessList, {"try": currentTry + 1,"word": word,"similarity": similarity,"rank": rank}]
         );
      }else {
         const redundantElement = guessList.filter(guess => guess.word === word)[0].try
         setCurrentTry(redundantElement);
      }
   }

   return (
      <div className="daily-container">
         <div className="guess-list-wrapper">
            <GuessBoard guessList={guessList} latestTry={currentTry} />
         </div>
         <div className="daily-submit-word-wrapper">
            <GuessInput hintsActivated={true} submitAction={submitAction} />
         </div>
      </div>
   );
}

export default Daily;
