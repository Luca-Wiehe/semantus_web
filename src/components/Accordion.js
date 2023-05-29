import React, { useState } from 'react';
import '../styles/components/Accordion.css';

const Accordion = ({ itemList }) => {
   const [selectedIndex, setSelectedIndex] = useState(-1);

   const toggleIndex = (index) => {
      if (index === selectedIndex) {
         setSelectedIndex(-1);
      } else {
         setSelectedIndex(index);
      }
   }

   return (
      <div className="accordion-container">
         <ul>
            {itemList.map((item, index) => (
               <li key={index}>
                  <input type="checkbox" defaultChecked />
                  <i></i>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Accordion;
