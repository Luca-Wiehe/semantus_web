import React from "react";

import '../styles/components/HintDialog.css';

const DialogText = ({ pointsPerHint, isCoop }) => {
   const singleplayerTexts = [`Jeder Spieler muss ${pointsPerHint} Punkte bezahlen.`, "Jeder Spieler schaut sich einen kurzen Werbespot an."]
   const coopTexts = [`Sie müssen ${pointsPerHint} Punkte bezahlen.`, "Sie schauen sich einen kurzen Werbespot an."]

   const dialogText = isCoop ? singleplayerTexts : coopTexts

   return (
      <>
         <ul>
            <li data-option="Option 1">
               Mit Punkten kaufen. {dialogText[0]}
            </li>
            <li data-option="Option 2">
               Mit Werbung kaufen. {dialogText[1]}
            </li>
         </ul>
      </>
   );
}

const HintDialog = ({ pointsPerHint, isCoop, setPopupOpen, isLargeScreen }) => {
   return (
      <>
         <div className="hint-dialog-wrapper">
            <div className="hint-icon-wrapper">
               <img src="/images/idea-icon.svg" alt="hint-icon" />
            </div>
            <span>Wie möchten Sie Ihren Tipp erhalten?</span>
            {isLargeScreen && <DialogText pointsPerHint={pointsPerHint} isCoop={isCoop} />}
            <div className="button-wrapper">
               <button className="primary">{isLargeScreen ? "Über Punkte" : `${pointsPerHint} Punkte`}</button>
               <button 
                  className="secondary"
               >
                  {isLargeScreen ? "Über Werbung" : "Werbung schauen"}
               </button>

               {!isLargeScreen && 
                  <button 
                     className="tertiary"
                     onClick={() => {setPopupOpen(false);}}
                  >
                        Abbrechen
                  </button>
               }
            </div>
         </div>
      </>
   );
}

export default HintDialog;