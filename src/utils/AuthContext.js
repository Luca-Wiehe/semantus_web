import React, { useState } from "react";

export const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {

   const [isLoggedIn, setLoggedIn] = useState(false);

   const login = () => {
      setLoggedIn(true);
   }

   const logout = () => {
      setLoggedIn(false);
   }

   return (
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
}

export const useAuth = () => {
   return React.useContext(AuthContext);
}