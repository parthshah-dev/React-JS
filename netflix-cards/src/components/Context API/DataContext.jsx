import { createContext } from "react";

//Create context
export const DataContext = createContext();

//Provider component
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value="React is awesome!">
      {children}
    </DataContext.Provider>
  );
};
