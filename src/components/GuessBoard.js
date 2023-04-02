import React from 'react';
import PropTypes from 'prop-types';

import '../styles/style.css';
import '../styles/components/GuessBoard.css';

const GuessBoard = ({ guessList, latestTry }) => {
   if(guessList.length === 0) {
      return (
         <table>
         <thead>
            <tr>
               <th className="left-aligned">#</th>
               <th className="left-aligned">Wort</th>
               <th className="left-aligned">Nähe</th>
               <th className="left-aligned">Rang</th>
               <th className="center-aligned">Synonyme</th>
            </tr>
         </thead>
      </table>
      );
   }

   // sort list in descending order by similarity
   let sortedGuesses = [...guessList].sort((a,b) => b.similarity - a.similarity)

   // save latest try
   const latestTryObject = sortedGuesses.filter(guess => guess.try === latestTry)[0]

   // don't display latest try twice
   sortedGuesses = sortedGuesses.filter(guess => guess.try !== latestTryObject.try)
   
   return (
      <table>
         <thead>
            <tr>
               <th className="left-aligned">#</th>
               <th className="left-aligned">Wort</th>
               <th className="left-aligned">Nähe</th>
               <th className="left-aligned">Rang</th>
               <th className="center-aligned">Synonyme</th>
            </tr>
         </thead>
         <tbody>
            <tr key="latest-try">
               <td>{latestTryObject.try}</td>
               <td className="truncate">{latestTryObject.word}</td>
               <td>{(latestTryObject.similarity)}</td>
               <td>{latestTryObject.rank}</td>
               <td><button className="">Anzeigen</button></td>
            </tr>
            {sortedGuesses.map((item) => (
               <tr key={item.try}>
               <td>{item.try}</td>
               <td className="truncate">{item.word}</td>
               <td>{(item.similarity)}</td>
               <td>
                  <div className="rank-cell">
                     {item.rank}
                     {!isNaN(parseInt(item.rank)) && // only render if rank is given as number (i.e. word is top 1000 word)
                        <div className="guess-progress-background">
                           <div className="guess-progress" style={{"width": `${(1000 - parseInt(item.rank)) / 10}%`}} />
                        </div>
                     }
                  </div> 
               </td>
               <td><button>Anzeigen</button></td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}


GuessBoard.propTypes = {
   guessList: PropTypes.any.isRequired,
};

export default GuessBoard;