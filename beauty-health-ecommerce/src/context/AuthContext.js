import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check localStorage for an existing user session on initial load
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  const login = (userData) => {
    // In a real app, userData would come from your API after successful login
    // For this demo, it's the user object from our local 'users' array
    localStorage.setItem('currentUser', JSON.stringify(userData));
    setCurrentUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    // Optionally, you might want to clear other things like the cart on logout
    // For now, we'll keep it simple.
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};