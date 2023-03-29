import React from 'react';
import 'animate.css';

import '../styles/style.css'
import '../styles/pages/Home.css';

import Button from '../components/Button';

import {DiAndroid} from 'react-icons/di';
import {AiFillApple} from 'react-icons/ai';

const Home = () => {
   return (
      <div className="home">
         <div>
            <div className="slogan animate__animated animate__fadeInLeft">
               <h1>Rätselhaft.</h1>
               <h1>Herausfordernd.</h1>
               <h1>Unterhaltsam.</h1>
            </div>
            <div className="subtitle animate__animated animate__fadeInLeft">Das Wortratespiel anhand semantischer Ähnlichkeiten</div>
            <div className="animate__animated animate__fadeInLeft animate__delay-1s">
               <Button appearance="secondary" width="150px" height="32px">Jetzt spielen</Button>
            </div>
         </div>
         
         <div className="phone-container animate__animated animate__fadeInRight">
            <img src="images/phone-mock.png" alt="Phone mockup" />
            <div className="mobile-app-btns">
               <div className="mobile-app-btn1">
                  <div className="app-link">
                     <span className="app-icon">
                        <AiFillApple size={24} color="var(--color_primary)" />
                     </span>
                     <span className="app-text">Zur iPhone App</span>
                  </div>
               </div>
               <div className="app-link">
                  <span className="app-icon">
                     <DiAndroid size={24} color="var(--color_primary)" />
                  </span>
                  <span className="app-text">Zur Android App</span>
               </div>
            </div>
         </div>
    </div>
   );
}

export default Home;
