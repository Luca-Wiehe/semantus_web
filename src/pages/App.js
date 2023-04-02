import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import Home from '../pages/Home';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Daily from "../pages/Daily";

import '../styles/style.css';
import '../styles/pages/App.css';

const App = () => {
   // state variable for conditional rendering based on screen size
   const [isLargeScreen, setIsLargeScreen] = useState(false);

   // state variable for menu bar in mobile screen
   const [isMenuOpen, setMenuOpen] = useState(false);

   // continuously track screen size
   useEffect(() => {
      const handleResize = () => {
         setIsLargeScreen(window.innerWidth > 768);
      };
   
      handleResize();
   
      window.addEventListener('resize', handleResize);
   
      return () => {
         window.removeEventListener('resize', handleResize);
      };
      }, []);

   return (
      <Router>
         <div className="app">
            <MenuBar isLargeScreen={isLargeScreen} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {!isMenuOpen && 
               <div className="body-bg">
                  <div className="body-container">
                     <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/login" exact element={<Login />}/>
                        <Route path="/signup" exact element={<Signup />}/>
                        <Route path="/daily" exact element={<Daily />}/>
                     </Routes>
                  </div>
               </div>
            }
         </div>
      </Router>
   );
}

export default App;
