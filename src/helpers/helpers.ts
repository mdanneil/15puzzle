export const shuffleTiles = (numRows: number, numCols: number) => {
  let tiles: number[];
  do {
    tiles = Array.from({ length: numRows * numCols }, (_, index) => index + 1);
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
  } while (tiles.some((tile, index) => tile === index + 1));
  tiles[tiles.length - 1] = 0;
  return tiles;
};

export const getDirection = (
  clickedIndex: number,
  blankIndex: number,
  numCols: number
) => {
  const clickedRow = Math.floor(clickedIndex / numCols);
  const clickedCol = clickedIndex % numCols;
  const blankRow = Math.floor(blankIndex / numCols);
  const blankCol = blankIndex % numCols;

  if (clickedRow === blankRow) {
    return clickedCol < blankCol ? "right" : "left";
  } else if (clickedCol === blankCol) {
    return clickedRow < blankRow ? "down" : "up";
  }

  return "";
};

export const moveTiles = (
  tiles: number[],
  direction: string,
  clickedIndex: number,
  blankIndex: number,
  numCols: number
): number[] => {
  let newTiles = [...tiles];
  let start =
    direction === "left" || direction === "down" ? blankIndex : clickedIndex;
  let end =
    direction === "left" || direction === "down" ? clickedIndex : blankIndex;

  switch (direction) {
    case "left":
      for (let i = start; i < end; i++) {
        newTiles[i] = newTiles[i + 1];
      }
      newTiles[end] = tiles[start];
      return newTiles;
    case "right":
      for (let i = end; i >= start; i--) {
        newTiles[i] = newTiles[i - 1];
      }
      newTiles[start] = tiles[end];
      return newTiles;
    case "up":
      for (let i = end; i < start; i += numCols) {
        newTiles[i] = newTiles[i + numCols];
      }
      newTiles[start] = tiles[end];
      return newTiles;
    case "down":
      for (let i = start; i > end; i -= numCols) {
        newTiles[i] = newTiles[i - numCols];
      }
      newTiles[end] = tiles[start];
      return newTiles;

    default:
      break;
  }
  return newTiles;
};

export const isSolved = (tiles: number[]): boolean => {
  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] !== i + 1) {
      return false;
    }
  }
  return tiles[tiles.length - 1] === 0;
};
