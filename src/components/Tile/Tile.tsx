import "./Tile.css";

interface TileProps {
  number: number;
  isBlank: boolean;
}

const Tile = ({ number, isBlank }: TileProps) => {
  return (
    <div
      className="tile"
      style={{ visibility: isBlank ? "hidden" : "visible" }}
    >
      {number}
    </div>
  );
};

export default Tile;
