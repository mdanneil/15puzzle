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
  let start;
  let end;
  const colTiles: { [key: number]: number } = {};
  const rowTiles: { [key: number]: number } = {};

  switch (direction) {
    case "left":
      start = Math.min(clickedIndex, blankIndex);
      end = Math.max(clickedIndex, blankIndex);
      for (let i = start; i <= end; i++) {
        rowTiles[i] = tiles[i];
      }
      for (let i = start; i < end; i++) {
        newTiles[i] = newTiles[i + 1];
      }
      newTiles[end] = tiles[start];
      return newTiles;
    case "right":
      start = Math.min(clickedIndex, blankIndex);
      end = Math.max(clickedIndex, blankIndex);
      for (let i = start; i <= end; i++) {
        rowTiles[i] = tiles[i];
      }
      for (let i = end; i >= start; i--) {
        newTiles[i] = newTiles[i - 1];
      }
      newTiles[start] = tiles[end];
      return newTiles;
    case "up":
      start = Math.max(clickedIndex, blankIndex);
      end = Math.min(clickedIndex, blankIndex);
      for (let i = start; i >= end; i -= numCols) {
        colTiles[i] = tiles[i];
      }
      for (let i = end; i < start; i += numCols) {
        newTiles[i] = newTiles[i + numCols];
      }
      newTiles[start] = tiles[end];
      return newTiles;
    case "down":
      start = Math.max(clickedIndex, blankIndex);
      end = Math.min(clickedIndex, blankIndex);
      for (let i = start; i >= end; i -= numCols) {
        colTiles[i] = tiles[i];
      }
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
