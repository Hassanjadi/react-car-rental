import React, { createContext, useState, useContext } from "react";

const CarFilterContext = createContext();

export const CarFilterProvider = ({ children }) => {
  const [passengerFilter, setPassengerFilter] = useState("");
  const [filterTrigger, setFilterTrigger] = useState(false);

  const applyFilter = () => {
    setFilterTrigger(true);
  };

  const resetFilterTrigger = () => {
    setFilterTrigger(false);
  };

  return (
    <CarFilterContext.Provider
      value={{
        passengerFilter,
        setPassengerFilter,
        filterTrigger,
        applyFilter,
        resetFilterTrigger,
      }}
    >
      {children}
    </CarFilterContext.Provider>
  );
};

export const useCarFilter = () => useContext(CarFilterContext);
