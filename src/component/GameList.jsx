import { useContext, useEffect, useMemo, useState } from "react";
import GameItem from "./GameItem";
import NoContentPage from "./NoContentPage";
import { fetchData, fetchJackpot } from "../helpers";
import Spinner from "./Spinner";
import GameContext from "../context/GameContext";

function GameList() {
  const [games, setGames] = useState([]);
  const [jackpots, setJackpots] = useState([]);

  const { currentTab } = useContext(GameContext);

  let gameFetched = false;
  let gamesElement;
  useEffect(() => {
    fetchData(setGames);
    gameFetched = true;
  }, []);
  useEffect(() => {
    fetchJackpot(setJackpots);
  }, [gameFetched]);

  let otherCategory = ["ball", "virtual", "fun"];
  const seedElement = () =>
    games
      .map((game) => {
        //this game image not found
        if(game.id==='NYXJACKPOTJESTER50000')return 
       else if (
          game.categories.includes(currentTab.toLowerCase()) ||
          (currentTab === "Other" &&
            game.categories.some((g) => otherCategory.includes(g)))
        ) {
          return (
            <GameItem
              currentTab={currentTab}
              key={game.id}
              id={game.id}
              categories={game.categories}
              name={game.name}
              image={game.image}
              jackpot={game.jackpot}
            />
          );
        } 
        
        else return;
      })
      .filter((game) => game !== undefined);
  gamesElement = useMemo(() => seedElement(), [currentTab, jackpots]);
  if (games.length && jackpots.length) {
    games.forEach((game) => {
      jackpots.forEach((jack) => {
        if (jack.game === game.id) {
          game["jackpot"] = jack.amount;
        }
      });
    });
  }
  if (!games.length || !jackpots.length) return <Spinner />;
  else if (gamesElement.length === 0) return <NoContentPage />;
  return (
    <div className="container">
      <div className="game-card-holder">{gamesElement}</div>
    </div>
  );
}

export default GameList;
