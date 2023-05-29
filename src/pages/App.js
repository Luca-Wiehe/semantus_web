import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import Home from '../pages/Home';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import GameMode from "../pages/GameMode";
import Daily from "../pages/Daily";
import Singleplayer from "../pages/Singleplayer";
import Versus from "../pages/Versus";
import Coop from "../pages/Coop";

import '../styles/style.css';
import '../styles/pages/App.css';
import Sidebar from '../components/Sidebar';
import Rules from '../components/Rules';

const App = () => {
   // state variables for sidebar 
   const [isSidebarOpen, setSidebarOpen] = useState(false);
   const [sidebarContent, setSidebarContent] = useState(<Rules />);

   const changeSidebarState = () => {
      setSidebarOpen(!isSidebarOpen);
   }

   // state variable for menu bar in mobile screen
   const [isMenuOpen, setMenuOpen] = useState(false);

   // state variable for conditional rendering based on screen size
   const [isLargeScreen, setIsLargeScreen] = useState(false);

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
            <MenuBar isLargeScreen={isLargeScreen} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} changeSidebarState={changeSidebarState} setSidebarContent={setSidebarContent} />
            {!isMenuOpen && 
               <div className="body-bg">
                  <div className="body-container">
                     <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/login" exact element={<Login />}/>
                        <Route path="/signup" exact element={<Signup />}/>
                        <Route path="/gamemode" exact element={<GameMode />}/>
                        <Route path="/daily" exact element={<Daily />}/>
                        <Route path="/singleplayer" exact element={<Singleplayer />}/>
                        <Route path="/versus" exact element={<Versus changeSidebarState={changeSidebarState} setSidebarContent={setSidebarContent} isLargeScreen={isLargeScreen} />}/>
                        <Route path="/coop" exact element={<Coop changeSidebarState={changeSidebarState} setSidebarContent={setSidebarContent} />}/>
                     </Routes>
                  </div>
               </div>
            }
            <Sidebar sidebarContent={sidebarContent} isSidebarOpen={isSidebarOpen} changeSidebarState={changeSidebarState} isLargeScreen={isLargeScreen} />
         </div>
      </Router>
   );
}

export default App;
