import Tile from "../Tile/Tile";
import { getDirection, isSolved, moveTiles } from "../../helpers/helpers";
import "./Board.css";

interface BoardProps {
  numRows: number;
  numCols: number;
  tiles: number[];
  setTiles: React.Dispatch<React.SetStateAction<number[]>>;
  setIsSolved: React.Dispatch<React.SetStateAction<boolean>>;
}

const Board = ({
  numRows,
  numCols,
  tiles,
  setTiles,
  setIsSolved,
}: BoardProps) => {
  const handleClick = (index: number) => {
    const clickedIndex: number = index;
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
    if (isSolved(newTiles)) {
      setIsSolved(true);
    }
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
        return (
          <Tile
            key={index}
            number={tileNumber}
            isBlank={tileNumber === 0}
            isCorrectPosition={tileNumber === index + 1}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Board;
