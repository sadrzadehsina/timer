import { createContext, useContext } from "react";
import { Timer } from "./types";

interface AppContextType {
  timer: Timer;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
