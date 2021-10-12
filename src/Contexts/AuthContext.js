/** @format */

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const contextVariables = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextVariables}>
      {children}
    </AuthContext.Provider>
  );
};
