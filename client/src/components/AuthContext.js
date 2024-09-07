import React, { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Assume user is always logged in
  const isLoggedIn = true;

  const login = () => {
    // For now, this function doesn't need to do anything
    console.log('User logged in');
  };

  const logout = () => {
    // For now, this function doesn't need to do anything
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};