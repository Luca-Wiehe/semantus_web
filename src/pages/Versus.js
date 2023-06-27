import React, { useEffect, useState } from 'react';

import 'animate.css';
import '../styles/style.css';
import '../styles/pages/Versus.css';

import GuessBoard from '../components/GuessBoard';
import GuessInput from '../components/GuessInput';
import Leaderboard from '../components/Leaderboard';
import Timer from '../components/Timer';
import GameInvite from '../components/GameInvite';

const Versus = ({ setPopupContent, changeSidebarState, setSidebarContent, setPopupOpen, isLargeScreen }) => {
   const [guessList, setGuessList] = useState([]);

   const players = [
      {
         name: "petrus_der_jünger",
         avatarLink: "/images/avatar.png",
         bestGuess: 0.5747
      },
      {
         name: "yoda_der_aller_beste",
         avatarLink: "/images/avatar.png",
         bestGuess: 0.4119
      },
      {
         name: "yussufa_aliyeti",
         avatarLink: "/images/avatar.png",
         bestGuess: 0.2441
      },
      {
         name: "meister_luca",
         avatarLink: "/images/avatar.png",
         bestGuess: 0.1831
      },
      {
         name: "julia",
         avatarLink: "/images/avatar.png",
         bestGuess: 0.9531
      }
   ]
   
   const [currentTry, setCurrentTry] = useState(0);
   const [tryCount, setTryCount] = useState(0);

   const inviteAction = () => {
      setSidebarContent(<GameInvite />);
      changeSidebarState();
   }

   return (
      <>
         <div className="versus-container">
            <div className="guess-wrapper">
               <div className="versus-guess-list-wrapper">
                  <GuessBoard guessList={guessList} latestTry={currentTry} />
               </div>
               <div className="versus-submit-word-wrapper">
                  <GuessInput 
                     currentTry={currentTry} 
                     setCurrentTry={setCurrentTry} 
                     tryCount={tryCount} 
                     setTryCount={setTryCount} 
                     guessList={guessList} 
                     setGuessList={setGuessList}
                     hintsActivated={false} 
                     setPopupContent={setPopupContent}
                     setPopupOpen={setPopupOpen}
                     isLargeScreen={isLargeScreen} 
                  />
               </div>
            </div>
            <div className="timer-wrapper">
               <Timer remainingTime={68} totalTime={300} />
            </div>
            <div className="leaderboard-wrapper">
               <Leaderboard players={players} inviteAction={inviteAction} />
            </div>
         </div>
      </>
   );
}

export default Versus;