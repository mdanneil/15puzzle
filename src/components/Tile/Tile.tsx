interface TileProps {
  number: number;
}

const Tile = ({ number }: TileProps) => {
  return <div className="tile">{number}</div>;
};

export default Tile;
