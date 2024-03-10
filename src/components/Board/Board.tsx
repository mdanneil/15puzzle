import { renderTiles } from "../../helpers/helpers";
import Tile from "../Tile/Tile";
import "./Board.css";

interface BoardProps {
  numRows: number;
  numCols: number;
}

const Board = ({ numRows, numCols }: BoardProps) => {
  const tiles = renderTiles(numRows, numCols);

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
      }}
    >
      {tiles.map((tileNumber: number) => (
        <Tile key={tileNumber} number={tileNumber} />
      ))}
    </div>
  );
};

export default Board;
