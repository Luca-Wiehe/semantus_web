import React, { useEffect, useRef } from 'react';

import '../styles/style.css';
import '../styles/components/GuessInput.css';

const GuessInput = ({ hintsActivated, submitAction }) => {
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   const onSubmit = (event) => {
      event.preventDefault();
      submitAction(inputRef.current.value);
      inputRef.current.value = '';
      inputRef.current.focus();
   }

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
                  <img src="images/idea-icon.png" alt="hint-icon" />Tipp
               </button>
            </div>
         }
      </>
      
   );
  
}

export default GuessInput;