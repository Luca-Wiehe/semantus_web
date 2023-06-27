import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import '../styles/style.css';
import '../styles/components/GuessBoard.css';

const GuessBoard = ({ guessList, latestTry }) => {
   // for empty guess list, only display table header
   if (guessList.length === 0) {
      return (
         <table>
            <thead>
               <tr>
                  <th className="left-aligned">#</th>
                  <th className="left-aligned">Wort</th>
                  <th className="left-aligned">Nähe</th>
                  <th className="left-aligned">Rang</th>
                  <th className="center-aligned"></th>
               </tr>
            </thead>
         </table>
      );
   }

   // sort guessList in descending order by similarity
   let sortedGuesses = guessList.sort((a, b) => b.similarity - a.similarity);

   console.log("Latest try: ");
   console.log(latestTry);
   console.log("guessList: ")
   console.log(guessList);

   // find latest try
   const latestGuess = sortedGuesses.filter(guess => guess.try === latestTry)[0];

   // remove latest try to avoid duplicate display
   sortedGuesses = sortedGuesses.filter(guess => guess.try !== latestGuess.try);
   
   // render guess board table with latest try and sorted guesses
   return (
      <table>
         <thead>
            <tr>
               <th className="left-aligned">#</th>
               <th className="left-aligned">Wort</th>
               <th className="left-aligned">Nähe</th>
               <th className="left-aligned">Rang</th>
               <th className="center-aligned"></th>
            </tr>
         </thead>
         <tbody>
            {/* Display the row for the latest try */}
            <tr key="latest-try">
               <td>{latestGuess.try}</td>
               <td className="truncate">{latestGuess.word}</td>
               <td>{latestGuess.similarity}</td>
               <td>
                  <div className="rank-cell">
                     {latestGuess.rank}
                     {!isNaN(parseInt(latestGuess.rank)) && (
                              // Render a progress bar if the rank is a number (top 1000 word)
                              <div className="guess-progress-background">
                                 <div className="guess-progress" style={{ width: `${(1000 - parseInt(latestGuess.rank)) / 10}%` }} />
                              </div>
                           )}
                  </div>
               </td>
               <td>
                  <div className="synonym-btn">
                     Synonyme
                     <ul className="synonym-dropdown">
                        {latestGuess.synonyms.map((synonym, index) => (
                           <li key={"latestGuess" + index}>{synonym}</li>
                        ))}
                        <li>von <a href="https://www.openthesaurus.de" target="_blank">openthesaurus.de</a></li>
                     </ul>
                  </div>
               </td>
            </tr>
            {/* Display rows for the sorted guesses */}
            {sortedGuesses.map((guess) => (
               <tr key={guess.try}>
                  <td>{guess.try}</td>
                  <td className="truncate">{guess.word}</td>
                  <td>{guess.similarity}</td>
                  <td>
                     <div className="rank-cell">
                        {guess.rank}
                        {!isNaN(parseInt(guess.rank)) && (
                           // Render a progress bar if the rank is a number (top 1000 word)
                           <div className="guess-progress-background">
                              <div className="guess-progress" style={{ width: `${(1000 - parseInt(guess.rank)) / 10}%` }} />
                           </div>
                        )}
                     </div>
                  </td>
                  <td>
                     <div className="synonym-btn">
                           Synonyme
                           <ul className="synonym-dropdown">
                              {guess.synonyms.map((synonym, index) => (
                                 <li key={"remainingGuesses" + index}>{synonym}</li>
                              ))}
                              <li>von <a href="https://www.openthesaurus.de" target="_blank">openthesaurus.de</a></li>
                           </ul>
                     </div>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

// PropTypes for type checking
GuessBoard.propTypes = {
   guessList: PropTypes.any.isRequired,
};

export default GuessBoard;
