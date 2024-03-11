import Tile from "../Tile/Tile";
import "./Board.css";

interface BoardProps {
  numRows: number;
  numCols: number;
  tiles: number[];
}

const Board = ({ numRows, numCols, tiles }: BoardProps) => {
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
      }}
    >
      {tiles.map((tileNumber: number) => (
        <Tile key={tileNumber} number={tileNumber} isBlank={tileNumber === 0} />
      ))}
    </div>
  );
};

export default Board;
