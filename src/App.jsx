import Navbar from "./component/navbar";
import GameList from "./component/GameList";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <>
      <GameProvider>
        <Navbar />
        <GameList />
      </GameProvider>
    </>
  );
}

export default App;
