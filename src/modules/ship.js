const Ship = (length) => {
  const damagedPart = new Array(length).fill(false);
  const hit = (pos) => {
    damagedPart[pos] = true;
  };
  const isSunk = () => {
    const sunk = damagedPart.reduce((prev, next) => prev && next, true);
    return sunk;
  };

  return { hit, isSunk };
};

export default Ship;
