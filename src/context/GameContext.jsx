import { createContext, useState } from "react";

const GameContext = createContext();
export function GameProvider({ children }) {
  const [currentTab, setCurrentTab] = useState("top");
  return (
    <GameContext.Provider
      value={{
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
export default GameContext;
