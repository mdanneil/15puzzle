import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import { shuffleTiles } from "../../helpers/helpers";
import "./Game.css";

const Game = () => {
  const [numRows, setNumRows] = useState(4);
  const [numCols, setNumCols] = useState(4);
  const [tiles, setTiles] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  useEffect(() => {
    const shuffledTiles = shuffleTiles(numRows, numCols);
    setTiles(shuffledTiles);
    setIsSolved(false);
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
    setIsSolved(false);
  };

  const handleSolve = () => {
    const solvedTiles = Array.from(
      { length: numRows * numCols },
      (_, index) => index + 1
    );
    solvedTiles[solvedTiles.length - 1] = 0;
    setTiles(solvedTiles);
    setIsSolved(true);
  };

  return (
    <div className="game">
      <h1>15 Puzzle Game</h1>
      <div className="game-container">
        <div className="board-container">
          <Board
            tiles={tiles}
            numRows={numRows}
            numCols={numCols}
            setTiles={setTiles}
            setIsSolved={setIsSolved}
          />
          {isSolved && (
            <div className="overlay">
              Congratulations! You solved the puzzle!
            </div>
          )}
        </div>
        <div className="options">
          <div className="input-fields">
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
          <div className="buttons">
            <button className="solve-button" onClick={handleSolve}>
              Solve
            </button>
            <button className="shuffle-button" onClick={handleShuffle}>
              Shuffle Tiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
