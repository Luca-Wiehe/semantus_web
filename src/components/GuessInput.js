import React, { useEffect, useRef } from 'react';

import '../styles/style.css';
import '../styles/components/GuessInput.css';

const getSynonyms = async (input) => {
   const filePath = process.env.PUBLIC_URL + "/synonyms/openthesaurus.txt";
   const response = await fetch(filePath);
   const data = await response.text();
   const synonymsData = data.split('\n');

   for (let line of synonymsData) {
      const synonyms = line.split(';');
      if (synonyms.includes(input)) {
        return synonyms.filter(synonym => synonym !== input);
      }
   }
 
   return ["Keine Synonyme"];
 }

const GuessInput = ({ guessList, setGuessList, currentTry, setCurrentTry, tryCount, setTryCount, hintsActivated }) => {
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   const onSubmit = async (event) => {
      event.preventDefault();

      // check if word is already in guessList
      const isRedundant = guessList.some(guess => guess.word === inputRef.current.value);

      if (!isRedundant) {
         const doesExist = true

         if (doesExist) {
            // TODO: compute cosine similarity
            const similarity = (Math.random() * 2 - 1).toFixed(2);

            // TODO: check if word in top 1000, otherwise specify "warm", "medium", or "cold"
            const rank = similarity < 0 ? "cold" : (similarity <= 0.25 ? "medium" : (similarity <= 0.5 ? "warm" : `${1000 - (Math.floor(Math.random() * 1000) + 1)}`));
            
            const synonyms = (await getSynonyms(inputRef.current.value)).slice(0,5);

            // add try to guessList
            setGuessList(
               [
                  ...guessList, 
                  {
                     "try": tryCount + 1,
                     "word": inputRef.current.value,
                     "synonyms": synonyms,
                     "similarity": similarity,
                     "rank": rank
                  }
               ]
            );

            // if word exists, increment tryCount
            setCurrentTry(tryCount + 1);
            setTryCount(tryCount + 1);
         }
      }else {
         // if word is already in list, move it to top of list
         const redundantElement = guessList.filter(guess => guess.word === inputRef.current.value)[0].try
         setCurrentTry(redundantElement);
      }

      // empty input and request focus
      inputRef.current.value = '';
      inputRef.current.focus();
   }

   // allow submission with 'enter'-key
   const onInputKeyDown = (event) => {
      if (event.key === 'Enter') {
         onSubmit(event);
      }
   }

   return (
      <>
         <form className="submit-guess-form">
            <input className="submit-guess-input" type="text" ref={inputRef} onKeyDown={onInputKeyDown} />
            <button className="submit-guess-btn" type="button" onClick={onSubmit}>Senden</button>
         </form>
         {hintsActivated && 
            <div className="hint-btn-wrapper">
               <button className="hint-btn">
                  <img src="/images/idea-icon.svg" alt="hint-icon" />Tipp
               </button>
            </div>
         }
      </>
      
   );
  
}

export default GuessInput;