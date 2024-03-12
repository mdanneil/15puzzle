import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import { shuffleTiles } from "../../helpers/helpers";
import "./Game.css";

const Game = () => {
  const [gridSize, setGridSize] = useState({ rows: 4, cols: 4 });
  const [tiles, setTiles] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  useEffect(() => {
    const shuffledTiles = shuffleTiles(gridSize.rows, gridSize.cols);
    setTiles(shuffledTiles);
    setIsSolved(false);
  }, [gridSize]);

  const handleShuffle = () => {
    const shuffledTiles = shuffleTiles(gridSize.rows, gridSize.cols);
    setTiles(shuffledTiles);
    setIsSolved(false);
  };

  const handleSolve = () => {
    const solvedTiles = Array.from(
      { length: gridSize.rows * gridSize.cols },
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
            numRows={gridSize.rows}
            numCols={gridSize.cols}
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
              value={gridSize.rows}
              min={1}
              onChange={(e) =>
                setGridSize({ ...gridSize, rows: parseInt(e.target.value) })
              }
            />
            <label htmlFor="cols">Columns:</label>
            <input
              type="number"
              id="cols"
              value={gridSize.cols}
              min={1}
              onChange={(e) =>
                setGridSize({ ...gridSize, cols: parseInt(e.target.value) })
              }
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
