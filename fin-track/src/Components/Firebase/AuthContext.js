import React, { createContext, useContext, useEffect, useState } from "react";
import {auth} from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, initializeUser);
    return unSubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      console.log("User logged in:", user);
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      console.log("No user logged in");
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    isAuthenticated: userLoggedIn, // Renamed to isAuthenticated
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
