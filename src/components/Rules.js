import React from 'react';

import '../styles/style.css';
import '../styles/components/Rules.css';

import Accordion from './Accordion';

import { VscLaw } from 'react-icons/vsc';

const strings = [
   {
      "title": "Ziel des Spiels",
      "content": "Erraten Sie das Wort! Verwenden Sie so wenige Versuche wie möglich, um ein von uns gewähltes Wort zu erraten. Wir wählen nur Wörter, die weit verbreitet sind und keine Bindestriche oder sonstige Sonderzeichen enthalten."
   },
   {
      "title": "Spielverlauf",
      "content": "Nutzen Sie das Textfeld, um Wörter einzugeben. Jedes gesendete Wort wird mit dem Zielwort verglichen und erhält einen Ähnlichkeitswert zwischen -1 und 1. -1 beschreibt die minimal mögliche Ähnlichkeit, während 1 die Ähnlichkeit des gesuchten Wortes zu sich selbst ist. Mit Hilfe der Ähnlichkeitswerte können Sie sich wie beim Topfschlagen dem gesuchten Wort annähern, bis sie es gefunden haben. Ähnlichkeitswerte werden anhand der semantischen Bedeutung vergeben. Die semantische Ähnlichkeit zwischen den Wörtern 'Messer' und 'Gabel' ist beispielsweise hoch, da diese in der Sprache im gleichen Zusammenhang auftreten. 'Messer' und 'messen' sind sich vergleichsweise unähnlich, obwohl sie von ihren Buchstaben ähnlich aussehen."
   }, 
   {
      "title": "Spielmodi",
      "content": "Wenn Sie sich nicht eingeloggt haben, können Sie lediglich die tägliche Herausforderung spielen. Dieses Wort ist für alle Spieler gleich und wird jeden Tag erneuert. Wenn Sie sich einloggen, können Sie jeden Tag beliebig viele Wörter erraten. Zudem können Sie zusammen mit oder gegen Ihre Freunde im Mehrspielermodus antreten."
   }
]

const Rules = () => {
   return (
      <div className="rules-container">
         <div>
            <div className="rules-icon-wrapper">
               <VscLaw fill='white' />
               <h1>Regeln</h1>
            </div>
         </div>
         <Accordion itemList={strings} />
      </div>
   );
}

export default Rules;