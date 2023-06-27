import React from "react";

import '../styles/components/Popup.css';
import { MdClose } from 'react-icons/md';

const Popup = ({ popupContent, isPopupOpen, setPopupOpen }) => {
   return (
      <>
         <div className={`popup-container${isPopupOpen ? " active" : ""}`}>
            <div className="close-icon" onClick={() => {setPopupOpen(false);}}>
               <MdClose style={{fill: "var(--secondary)"}} />
            </div>
            {popupContent}
         </div>
      </>
   );
}

export default Popup;

