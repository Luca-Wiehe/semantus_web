import React from 'react';

import '../styles/components/Leaderboard.css';

const Leaderboard = ({ players, inviteAction }) => {
   players.sort((player1, player2) => player2.bestGuess - player1.bestGuess);

   return (
      <>
         {players.map((player, index) => (
            <div className="leaderboard-user" key={index}>
               <div className="position">{index + 1}</div>
               <img src={player.avatarLink} alt="avatar" className="avatar" />
               <div className="info">
                  <div className="name">{player.name}</div>
                  <div className="guess">
                     <div className="progress-bar">
                        <div className="current-progress" style={{'width': `${player.bestGuess * 100}%`}} />
                     </div>
                     {player.bestGuess}
                  </div>
               </div>
            </div>
         ))}
         <div className="leaderboard-invite">
            <button className="leaderboard-invite-btn" onClick={() => inviteAction()}>Freunde einladen</button>
         </div>
      </>
   );
   }

export default Leaderboard;