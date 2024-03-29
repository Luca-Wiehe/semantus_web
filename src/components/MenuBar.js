import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronsDown } from 'react-icons/bi';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import '../styles/style.css'
import '../styles/components/MenuBar.css';
import Button from './Button';
import Rules from './Rules';
import { BaseContext } from '../utils/FirebaseContext';
import { useAuth } from '../utils/AuthContext';

/**
 * A responsive MenuBar that sticks to Semantus style guidelines.
 */
const MenuBar = ({isLargeScreen, isMenuOpen, setMenuOpen, changeSidebarState, setSidebarContent}) => {
   const [username, setUsername] = useState("");
   const [points, setPoints] = useState(0);

   // introduce firebase actions
   const firebase = useContext(BaseContext);

   const auth = useAuth();

   useEffect(() => {
      firebase.getUserData().then((userdata) => {
         if(userdata != null){
            setUsername(userdata.username);
            setPoints(userdata.points);
         }
      });
   }, [auth.isLoggedIn]);

   const firebase_logout = () => {
      firebase.logout();
   }

   // display profile and points when logged in 
   const LoggedInMenuItems = ({isExpanded}) => {
      const menuItems = [
         <li 
            key="loggedin0" 
            className="link-item" 
            onClick={() => {
               firebase_logout();
               auth.logout();
            }}
         >
            Logout
         </li>,
         <li key="loggedin1" className="link-item">
             Mein Profil
         </li>,
         <li key="loggedin2" className="user-item">
            <span className="upper-span">{username}</span>
            <span>{points} Points</span>
         </li>,
         <li key="loggedin3">
            <img className="avatar" src="images/avatar.png" alt="avatar" />
         </li>
      ]
      
      // profile-image is last element for menu bar but first element in expanded menu
      return isExpanded ? menuItems.reverse() : menuItems;
   }

   // display login-button when logged out
   const LoggedOutMenuItems = ({isExpanded}) => {
      
      return isExpanded ? (
         <li className="link-item emphasized">
            <Link className="link full-size-link" to="/login/" onClick={() => {setMenuOpen(false);}}>
               Login
            </Link>
         </li>
      ) :
      (
         <li>
            <Link className="link" to="/login/">
               <Button 
                  appearance="secondary" 
                  width="100px" 
                  height="32px" 
               >
                  Login
               </Button>
            </Link>
         </li>
      );
   }

   return (
      <nav className={`menu-container ${isMenuOpen && !isLargeScreen ? "full-height menu-open" : ""}`}> 
         {/* Menu Bar */}
         <div className={`menu-bar-wrapper ${isMenuOpen && !isLargeScreen ? "menu-open" : ""}`}>

            {/* Logo and 'Semantus' Title */}
            <Link className="link" to="/">
               <div className="title-wrapper">
                  <img className="menu-bar-logo" src="images/logo512.png" alt="Semantus Logo" />
                  <span className="menu-bar-title">Semantus</span>
               </div>
            </Link>

            {/* Menu items */}
            {isLargeScreen ?
               (
                  <ul className="menu-bar-items">
                     <li 
                        className="link-item" 
                        onClick={() => {changeSidebarState(); setMenuOpen(false); setSidebarContent(<Rules />)}}
                     >
                        Regeln
                     </li>
                     {auth.isLoggedIn ? <LoggedInMenuItems isExpanded={!isLargeScreen} /> : <LoggedOutMenuItems isExpanded={!isLargeScreen} />}
                  </ul>
               ) :
               isMenuOpen ? 
                  <IoMdCloseCircleOutline size="50px" color="var(--color_primary)" style={{"cursor": "pointer"}} onClick={() => setMenuOpen(!isMenuOpen)} /> :
                  <BiChevronsDown size="50px" color="var(--color_primary)" style={{"cursor": "pointer"}} onClick={() => setMenuOpen(!isMenuOpen)} />
            }
         </div>
         {/* Expanded Menu */}
         {isMenuOpen && !isLargeScreen && 
            <ul className="expanded-menu-bar-items">
               {auth.isLoggedIn ? <LoggedInMenuItems isExpanded={true} /> : <LoggedOutMenuItems isExpanded={true} />}
               <li className="link-item" onClick={() => {changeSidebarState(); setMenuOpen(false); setSidebarContent(<Rules />)}}>
                  Regeln
               </li>
            </ul>
         }
      </nav>
   );
};

export default MenuBar;