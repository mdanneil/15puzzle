export const renderTiles = (numRows: number, numCols: number) => {
  const numTiles = numRows * numCols;
  const tiles: number[] = Array.from(
    { length: numTiles },
    (_, index) => index + 1
  );
  return tiles;
};
