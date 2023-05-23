import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import GameContext from "../context/GameContext";
function Navbar() {
  const { setCurrentTab } = useContext(GameContext);

  let tabs = [
    "Top Games",
    "New Games",
    "Slots",
    "Jackpots",
    "Live",
    "Blackjack",
    "Roulette",
    "Table",
    "Poker",
    "Other",
  ];
  const [active, setActive] = useState("top games");
  const [dropdown, setDropdown] = useState(false);
  let dropdownStyle = `toggler ${!dropdown ? "hidden" : "show"}`;
  const clickHandler = (e) => {
    let category = e.target.textContent.split(" ")[0];
    setCurrentTab(category.toString());
    setActive(e.target.textContent.toLowerCase());
  };
  let navElement = tabs.map((tab, i) => {
    return (
      <li
        key={i}
        onClick={(e) => clickHandler(e)}
        className={active === tab.toLowerCase() ? `active` : ""}
      >
        {tab}
      </li>
    );
  });

  return (
    <nav className="navbar ">
      <ul>{navElement}</ul>
      <h2>Casino</h2>
      <FaBars
        className="bars-toggler"
        onClick={() => setDropdown((prev) => !prev)}
      />
      <ul className={dropdownStyle}>{navElement}</ul>
    </nav>
  );
}

export default Navbar;
