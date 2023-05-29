import React from 'react';

const Timer = ({ remainingTime, totalTime }) => {
   // Calculate the angle of the partial circle based on the input value
   const angle = (remainingTime / totalTime) * 360 * 0.733;

   // Set the strokeDasharray and strokeDashoffset CSS properties to create a partial circle outline
   const strokeDasharray = `${angle} 1000`;
   const strokeDashoffset = `${1000 - angle} 0`;

   // Adjust the rotation of the filled circle to start at the top
   const transform = `rotate(-90 50 50)`;

   return (
      <svg viewBox="0 0 100 100">
         <circle cx="50" cy="50" r="48" fill="none" strokeWidth="0.5" stroke="var(--color_primary)" />
         <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" stroke="var(--color_secondary)" />
         <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" stroke="var(--color_quaternary)"
         strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} transform={transform} />
         <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--color_primary)">{Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}</text>
      </svg>
   );
}

export default Timer;
