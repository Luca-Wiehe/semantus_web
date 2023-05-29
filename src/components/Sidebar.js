import React from 'react';

import 'animate.css';
import '../styles/style.css';
import '../styles/components/Sidebar.css';

import { HiChevronDoubleRight } from 'react-icons/hi';

const Sidebar = ({ sidebarContent, isSidebarOpen, changeSidebarState, isLargeScreen }) => {
   return (
      <div className={`sidebar-container ${isSidebarOpen ? 'active' : ''}  `}>
         <div className="sidebar-icon-wrapper">
            <HiChevronDoubleRight size={20} color="var(--color_primary)" onClick={changeSidebarState} />
         </div>
         <div className="sidebar-content-wrapper">
            {sidebarContent}
            {!isLargeScreen && 
               <div className="close-sidebar-btn" onClick={() => {changeSidebarState()}}>
                  Schließen
               </div>
            }
         </div>
         
      </div>   
   );
}

export default Sidebar;