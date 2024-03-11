export const shuffleTiles = (numRows: number, numCols: number) => {
  const totalTiles = numRows * numCols - 1;
  const tiles = Array.from({ length: totalTiles }, (_, index) => index + 1);

  tiles.push(0);

  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }

  return tiles;
};
