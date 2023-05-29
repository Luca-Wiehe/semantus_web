import React from 'react';
import { Link } from 'react-router-dom';

import 'animate.css';
import '../styles/style.css';
import '../styles/pages/GameMode.css';

import gameModes from '../constants/gameModes.json';

const GameMode = () => {
   return (
      <div className="gamemodes-container">
         <h1>Wähle einen <br/> Spielmodus</h1>
         <div className="gamemodes-overview">
            {gameModes.map((gameMode, index) => (
               <Link className="link gamemode-link" to={gameMode.link} key={index}>
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
               </Link>
            ))}
         </div>
     </div>
   );
};

export default GameMode;
