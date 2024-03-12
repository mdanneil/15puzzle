import Tile from "../Tile/Tile";
import { getDirection, moveTiles } from "../../helpers/helpers";
import "./Board.css";

interface BoardProps {
  numRows: number;
  numCols: number;
  tiles: number[];
  setTiles: React.Dispatch<React.SetStateAction<number[]>>;
}

const Board = ({ numRows, numCols, tiles, setTiles }: BoardProps) => {
  const handleClick = (row: number, col: number) => {
    const clickedIndex: number = row * numCols + col;
    const blankIndex: number = tiles.indexOf(0);

    const direction = getDirection(clickedIndex, blankIndex, numCols);

    let newTiles = moveTiles(
      tiles,
      direction,
      clickedIndex,
      blankIndex,
      numCols
    );

    setTiles(newTiles);
  };

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
      }}
    >
      {tiles.map((tileNumber: number, index: number) => {
        const row = Math.floor(index / numCols);
        const col = index % numCols;

        return (
          <Tile
            key={index}
            number={tileNumber}
            isBlank={tileNumber === 0}
            onClick={() => handleClick(row, col)}
          />
        );
      })}
    </div>
  );
};

export default Board;
