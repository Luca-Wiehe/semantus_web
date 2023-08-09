import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { BaseContext } from "../utils/FirebaseContext";

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

// import { useSelector, useDispatch } from 'react-redux';

const App = () => {
   // load dispatch to access variables from store 
   // const dispatch = useDispatch();

   
   //const isLargeScreen = useSelector((state) => state.isLargeScreen);
   //const setLargeScreen = (isLarge) => {
   //   dispatch({ type: 'SET_LARGE_SCREEN', payload: isLarge });
   //};

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
            <MenuBar isLargeScreen={isLargeScreen} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} changeSidebarState={changeSidebarState} setSidebarContent={setSidebarContent} />
            {!isMenuOpen && 
               <div className="body-bg">
                  <div className="body-container">
                     <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/login" exact element={<Login />}/>
                        <Route path="/signup" exact element={<Signup />}/>
                        <Route path="/gamemode" exact element={<GameMode />}/>
                        <Route path="/daily" exact element={
                           <Daily 
                              setPopupContent={setPopupContent}
                              setPopupOpen={setPopupOpen}
                              isLargeScreen={isLargeScreen}
                           />}
                        />
                        <Route path="/singleplayer" exact element={
                           <Singleplayer 
                              setPopupContent={setPopupContent}
                              setPopupOpen={setPopupOpen}
                              isLargeScreen={isLargeScreen}
                           />}
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
