/* eslint-disable react/prop-types */

import { FaPlay } from "react-icons/fa";
function GameItem({ name, image, categories, jackpot }) {
  let category = [];
  if (categories.includes("top")) {
    category.push("top");
  } else if (categories.includes("new")) category.push("new");
  return (
    <>
      <div className="game-item">
        {jackpot && <span>€ {jackpot}</span>}

        <img src={image} alt="Game-image" />
        <div className="content">
          <FaPlay />
          {name}
        </div>
        {category.length && (
          <div className="ribbon ribbon-top-right">
            <span>{category}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default GameItem;
