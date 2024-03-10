import React, { useState } from "react";
import Board from "../Board/Board";

const Game = () => {
  const [numRows, setNumRows] = useState(4);
  const [numCols, setNumCols] = useState(4);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumRows(parseInt(e.target.value));
  };

  const handleColsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumCols(parseInt(e.target.value));
  };

  return (
    <div className="game">
      <h1>15 Puzzle Game</h1>
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
      <div className="board-container">
        <Board numRows={numRows} numCols={numCols} />
      </div>
    </div>
  );
};

export default Game;
