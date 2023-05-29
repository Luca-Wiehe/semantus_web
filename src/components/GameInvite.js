import React, { useState } from 'react';

import '../styles/components/GameInvite.css';
import { FaUserFriends } from 'react-icons/fa';
import { BiCopy } from 'react-icons/bi';
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

const sentInvitations = [
   {
      email: "johannes@example.com",
      username: "Johannes",
      avatarLink: "/images/avatar.png",
      status: "invited",
      isFavorite: "false"
   },
   {
      email: "luca@example.com",
      username: "Luca",
      avatarLink: "/images/avatar.png",
      status: "uninvited",
      isFavorite: "false"
   },
   {
      email: "peter@example.com",
      username: "Peter",
      avatarLink: "/images/avatar.png",
      status: "joined",
      isFavorite: "false"
   },
   {
      email: "dieter@example.com",
      username: "Dieter",
      avatarLink: "/images/avatar.png",
      status: "invited",
      isFavorite: "true"
   },
   {
      email: "x@example.com",
      username: "X",
      avatarLink: "/images/avatar.png",
      status: "joined",
      isFavorite: "false"
   },
]

const receivedInvitations = [
   {
      email: "johannes@example.com",
      username: "Johannes",
      avatarLink: "/images/avatar.png",
      status: "invited",
      isFavorite: "false",
      gamemode: "versus"
   },
   {
      email: "luca@example.com",
      username: "Luca",
      avatarLink: "/images/avatar.png",
      status: "not invited",
      isFavorite: "false",
      gamemode: "coop"
   }
]

const friendRequests = [
   {
      email: "johannes@example.com",
      username: "Johannes",
      avatarLink: "/images/avatar.png"
   }
]

const searchResults = [

]

const statusToStyle = {
   "friended": "primary-btn",
   "requested": "secondary-btn",
   "not requested": "tertiary-btn",
   "joined": "primary-btn",
   "invited": "secondary-btn",
   "uninvited": "tertiary-btn"
}

const onSearchSubmit = (event) => {
   event.preventDefault();
   console.log(event.target.elements.username.value);
}

const FilteredSentInvitations = ({ invitations, isFavorite }) => {
   const filteredInvitations = invitations.filter(invitation => invitation.isFavorite === isFavorite);

   if (filteredInvitations.length === 0){
      return <i>Keine Nutzer gefunden</i>;
   }

   return (
      filteredInvitations
         .sort((a, b) => {
            if (a.status === "joined") {
               return -1;
            } else if (a.status === "invited" && b.status !== "joined") {
               return -1;
            } else {
               return 1;
            }
            })
         .map((invitation, index) => (
            <div key={index} className="sent-invitation-wrapper">
               <div className="invitation-avatar">
                  <img src={invitation.avatarLink} alt="avatar" />
               </div>
               <span>{invitation.username}</span>
               <div className={`user-action-btn ${statusToStyle[invitation.status]}`}>
                  {invitation.status === "uninvited" ? "Einladen" : (invitation.status === "invited" ? "Eingeladen" : "Beigetreten")}
               </div>
            </div>
         ))
   );
}

const ReceivedInvitations = ({ invitations }) => {
   if (invitations.length === 0) {
      return <i>Keine Einladungen erhalten</i>;
   }

   return invitations
      .map((invitation, index) => (
         <div key={index} className="sent-invitation-wrapper">
            <div className="invitation-avatar">
               <img src={invitation.avatarLink} alt="avatar" />
            </div>
            <div className="received-invitation-information">
               <span>{invitation.username}</span>
               {invitation.gamemode === "versus" ? "Gegeneinander" : "Miteinander"}
            </div>
            <div className="invitation-action-wrapper">
               <BsCheckCircleFill fill="var(--color_tertiary)" />
               <BsFillXCircleFill fill="var(--color_quaternary)" />
            </div>
         </div>
      ));
}

const FriendRequests = ({ friendRequests }) => {
   if (friendRequests.length === 0) {
      return <i>Keine offenen Freundschaftsanfragen</i>
   }

   return friendRequests
      .map((request, index) => (
         <div key={index} className="sent-invitation-wrapper">
            <div className="invitation-avatar">
               <img src={request.avatarLink} alt="avatar" />
            </div>
            <div className="received-invitation-information">
               <span>{request.username}</span>
            </div>
            <div className="invitation-action-wrapper">
               <BsCheckCircleFill fill="var(--color_tertiary)" />
               <BsFillXCircleFill fill="var(--color_quaternary)" />
            </div>
         </div>
      ));
}

const SearchResults = ({ searchResults }) => {
   if (searchResults.length === 0) {
      return <i>Keine Ergebnisse gefunden</i>
   }

   return searchResults
      .map((request, index) => (
         <div key={index} className="sent-invitation-wrapper">
            <div className="invitation-avatar">
               <img src={request.avatarLink} alt="avatar" />
            </div>
            <div className="received-invitation-information">
               <span>{request.username}</span>
            </div>
            <div className={`user-action-btn ${statusToStyle[request.status]}`}>
               {request.status === "requested" ? "Angefragt" : (request.status === "not requested" ? "Anfragen" : "Befreundet")}
            </div>
         </div>
      ));
}

const GameInvite = () => {
   const [currentTab, setCurrentTab] = useState(0);
   const [userSearch, setUserSearch] = useState("");

   return (
      <div>
         <div className="friends-container">
            <div className="friends-icon-wrapper">
               <FaUserFriends fill='white' />
               <h1>Einladungen</h1>
            </div>
            <ul className="invitation-tabs">
               {["Gesendet", "Erhalten", "Freunde hinzufügen"].map((text, index) => 
                     <li 
                        key={index} 
                        className={`${currentTab === index? "active" : ""}`} 
                        onClick={() => {setCurrentTab(index)}}
                     >
                        {text}
                     </li>
               )}
            </ul>
            {currentTab === 0 && (
               <>
                  <div className="filtered-invitation-container">
                     <h3>Favoriten</h3>
                     <FilteredSentInvitations invitations={sentInvitations} isFavorite="true" />
                     <h3>Freunde einladen</h3>
                     <FilteredSentInvitations invitations={sentInvitations} isFavorite="false" />
                  </div>
                  <div className="invite-link-container">
                     <div className="invite-link-wrapper">
                        Einladungslink kopieren
                        <div className="invite-icon-wrapper"><BiCopy /></div>
                     </div>
                  </div>
               </>
            )}
            {currentTab === 1 && (
               <>
                  <div className="filtered-invitation-container">
                     <h3>Erhaltene Einladungen</h3>
                     <ReceivedInvitations invitations={receivedInvitations} />
                  </div>
               </>
            )}
            {currentTab === 2 && (
               <>
                  <div className="filtered-invitation-container">
                     <h3>Freundschaftsanfragen</h3>
                     <FriendRequests friendRequests={friendRequests} />
                     <h3>Spieler suchen</h3>
                     <form className="search-player-form" onSubmit={onSearchSubmit}>
                        <input type="text" name="username" placeholder="Username" maxLength={20} />
                        <button type="submit">Suchen</button>
                     </form>
                     <SearchResults searchResults={searchResults} />
                  </div>
               </>
            )}
         </div>
      </div>
   )
}

export default GameInvite;