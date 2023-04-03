import React from 'react';

import 'animate.css';
import '../styles/style.css';
import '../styles/pages/GameMode.css';

const gameModes = [
  {
    title: 'Wort des Tages',
    limit: 'Kein Limit',
    reward: '1000 Punkte',
    hint: '500 Punkte / Tipp',
    preview: ['images/calendar-icon.svg']
  },
  {
    title: 'Einzelspieler',
    limit: 'Kein Limit',
    reward: '500 Punkte',
    hint: '200 Punkte / Tipp',
    preview: ['images/player-icon.svg']
  },
  {
    title: 'Gegeneinander',
    limit: '5min Limit',
    reward: '250 Punkte',
    hint: 'Keine Tipps',
    preview: ['images/player-icon.svg', 'images/versus-icon.svg', 'images/player-icon.svg']
  },
  {
    title: 'Miteinander',
    limit: 'Kein Limit',
    reward: '500 Punkte',
    hint: '100 Punkte / Tipp',
    preview: ['images/player-icon.svg', 'images/team-icon.svg', 'images/player-icon.svg']
  },
];

const GameMode = () => {
  return (
    <div className="gamemodes-container">
      <h1>Wähle einen <br/> Spielmodus</h1>
      <div className="gamemodes-overview">
        {gameModes.map((gameMode, index) => (
            <div className={`gamemode animate__animated animate__fadeInRight delay-${index + 1}`} key={index}>
               <h3>{gameMode.title}</h3>
               <ul>
                  <li className="gamemode-icon clock">{gameMode.limit}</li>
                  <li className="gamemode-icon reward">{gameMode.reward}</li>
                  <li className="gamemode-icon idea">{gameMode.hint}</li>
               </ul>
               <div className="gamemode-preview">
                 {gameMode.preview.map((previewItem, previewIndex) => (
                   <img 
                     src={previewItem} 
                     key={previewIndex} 
                     alt={'previewIcon ' + previewIndex}
                     className={`${previewIndex === 1 ? 'preview-image-small' : 'preview-image'}`}
                   />
                 ))}
               </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default GameMode;
