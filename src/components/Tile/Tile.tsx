import "./Tile.css";

interface TileProps {
  number: number;
  isBlank: boolean;
  onClick: () => void;
}

const Tile = ({ number, isBlank, onClick }: TileProps) => {
  return (
    <div
      className="tile"
      style={{ visibility: isBlank ? "hidden" : "visible" }}
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default Tile;
