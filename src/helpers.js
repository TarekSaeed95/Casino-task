export const fetchJackpot = async (setJackpots) => {
  try {
    const jackpotFetch = await fetch(
      "http://stage.whgstage.com/front-end-test/jackpots.php"
    );
    const jackpotsData = await jackpotFetch.json();
    setJackpots(jackpotsData);
  } catch (error) {
    console.log(error);
  }
};
export const fetchData = async (setGames) => {
  try {
    const req = await fetch(
      "http://stage.whgstage.com/front-end-test/games.php"
    );
    const gamesData = await req.json();
    setGames(gamesData);
  } catch (error) {
    console.log(error);
  }
};
