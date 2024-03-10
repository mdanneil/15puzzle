import { renderTiles } from "../../helpers/helpers";
import Tile from "../Tile/Tile";

interface BoardProps {
  numRows: number;
  numCols: number;
}

const Board = ({ numRows, numCols }: BoardProps) => {
  const tiles = renderTiles(numRows, numCols);

  return (
    <div className="board">
      {tiles.map((tileNumber: number) => (
        <Tile key={tileNumber} number={tileNumber} />
      ))}
    </div>
  );
};

export default Board;
