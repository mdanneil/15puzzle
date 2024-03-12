import "./Tile.css";

interface TileProps {
  number: number;
  isBlank: boolean;
  isCorrectPosition: boolean;
  onClick: () => void;
}

const Tile = ({ number, isBlank, isCorrectPosition, onClick }: TileProps) => {
  return (
    <div
      className={"tile"}
      style={{
        visibility: isBlank ? "hidden" : "visible",
        backgroundColor: isCorrectPosition ? "#4df97b" : "#fc6254",
      }}
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default Tile;
