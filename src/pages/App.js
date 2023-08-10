import React, {useState, useEffect } from 'react';
import {Navigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import Home from '../pages/Home';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import GameMode from "../pages/GameMode";
import Daily from "../pages/Daily";
import Singleplayer from "../pages/Singleplayer";
import Versus from "../pages/Versus";
import Coop from "../pages/Coop";

import "../styles/style.css";
import "../styles/pages/App.css";
import Popup from "../components/Popup";
import Sidebar from "../components/Sidebar";
import Rules from "../components/Rules";

import { useAuth } from '../utils/AuthContext';

const App = () => {

   const auth = useAuth();

   // state variables for sidebar 
   const [isSidebarOpen, setSidebarOpen] = useState(false);
   const [sidebarContent, setSidebarContent] = useState(<Rules />);

   // state variables for popups
   const [isPopupOpen, setPopupOpen] = useState(false);
   const [popupContent, setPopupContent] = useState("");

   const changeSidebarState = () => {
      setSidebarOpen(!isSidebarOpen);
   }

   // state variable for menu bar in mobile screen
   const [isMenuOpen, setMenuOpen] = useState(false);

   const [isLargeScreen, setLargeScreen] = useState(false);

   // continuously track screen size
   useEffect(() => {
      const handleResize = () => {
         setLargeScreen(window.innerWidth > 768);
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
            <MenuBar 
               isLargeScreen={isLargeScreen} 
               isMenuOpen={isMenuOpen} 
               setMenuOpen={setMenuOpen} 
               changeSidebarState={changeSidebarState} 
               setSidebarContent={setSidebarContent} 
            />
            {!isMenuOpen && 
               <div className="body-bg">
                  <div className="body-container">
                     <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/login" exact element={ auth.isLoggedIn ? <Navigate to="/gamemode"/> : <Login />}/>
                        <Route path="/signup" exact element={ auth.isLoggedIn ? <Navigate to="/gamemode"/> : <Signup />}/>
                        <Route path="/gamemode" exact element={ auth.isLoggedIn ? <GameMode /> : <Navigate to="/daily"/>}/>
                        <Route path="/daily" exact element={
                           <Daily 
                              setPopupContent={setPopupContent}
                              setPopupOpen={setPopupOpen}
                              isLargeScreen={isLargeScreen}
                           />}
                        />
                        <Route path="/singleplayer" exact element={
                           auth.isLoggedIn ?
                           <Singleplayer 
                              setPopupContent={setPopupContent}
                              setPopupOpen={setPopupOpen}
                              isLargeScreen={isLargeScreen}
                           />
                           :
                           <Navigate to="/login"/>
                        }
                        />
                        <Route path="/versus" exact element={
                           <Versus 
                              setPopupContent={setPopupContent}
                              changeSidebarState={changeSidebarState} 
                              setSidebarContent={setSidebarContent} 
                              setPopupOpen={setPopupOpen}
                              isLargeScreen={isLargeScreen} 
                           />}
                        />
                        <Route path="/coop" exact element={
                           <Coop 
                              setPopupContent={setPopupContent}
                              changeSidebarState={changeSidebarState} 
                              setSidebarContent={setSidebarContent} 
                              setPopupOpen={setPopupOpen}
                              isLargeScreen={isLargeScreen}
                           />}
                        />
                     </Routes>
                  </div>
               </div>
            }
            <Popup popupContent={popupContent} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
            <Sidebar sidebarContent={sidebarContent} isSidebarOpen={isSidebarOpen} changeSidebarState={changeSidebarState} isLargeScreen={isLargeScreen} />
            {isPopupOpen &&
               <div className="overlay" />
            }
            
         </div>
      </Router>
   );
}

export default App;
