import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import "./Game.css";
import { shuffleTiles } from "../../helpers/helpers";

const Game = () => {
  const [numRows, setNumRows] = useState(4);
  const [numCols, setNumCols] = useState(4);
  const [tiles, setTiles] = useState<number[]>([]);

  useEffect(() => {
    const shuffledTiles = shuffleTiles(numRows, numCols);
    setTiles(shuffledTiles);
  }, [numRows, numCols]);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumRows(parseInt(e.target.value));
  };

  const handleColsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumCols(parseInt(e.target.value));
  };

  const handleShuffle = () => {
    const shuffledTiles = shuffleTiles(numRows, numCols);
    setTiles(shuffledTiles);
  };

  return (
    <div className="game">
      <h1>15 Puzzle Game</h1>
      <div className="game-container">
        <div className="board-container">
          <Board tiles={tiles} numRows={numRows} numCols={numCols} />
        </div>
        <div className="options">
          <label htmlFor="rows">Rows:</label>
          <input
            type="number"
            id="rows"
            value={numRows}
            min={1}
            onChange={handleRowsChange}
          />
          <label htmlFor="cols">Columns:</label>
          <input
            type="number"
            id="cols"
            value={numCols}
            min={1}
            onChange={handleColsChange}
          />
        </div>
        <button className="shuffle-button" onClick={handleShuffle}>
          Shuffle Tiles
        </button>
      </div>
    </div>
  );
};

export default Game;
