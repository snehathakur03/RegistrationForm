import React, { createContext, useState } from 'react';

// Create context
export const StepperContext = createContext(null);

// Create a provider component
export const StepperProvider = ({ children }) => {
  // Define the state you want to store
  const [userData, setUserData] = useState({ firstname: '', lastname: '' });

  return (
    <StepperContext.Provider value={[userData, setUserData]}>
      {children}
    </StepperContext.Provider>
  );
};
