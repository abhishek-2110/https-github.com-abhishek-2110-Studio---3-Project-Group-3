import React, { createContext, useState, useEffect, useContext } from "react";

const UserIdContext = createContext();

export const useUserId = () => useContext(UserIdContext);

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState(null); // Add state for user type

  // Update local storage when userId or userType changes
  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    }

    if (userType) {
      localStorage.setItem("userType", userType); // Store user type in local storage
    }
  }, [userId, userType]);
  
  // Load userId and userType from local storage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUserType = localStorage.getItem("userType"); // Retrieve user type from local storage
    if (storedUserId) {
      setUserId(storedUserId);
    }
    if (storedUserType) {
      setUserType(storedUserType); // Set user type state
    }
  }, []);


  return (
    <UserIdContext.Provider value={{ userId, setUserId, userType, setUserType }}>
      {" "}
      {/* Include userType in the context value */}
      {children}
    </UserIdContext.Provider>
  );
};
