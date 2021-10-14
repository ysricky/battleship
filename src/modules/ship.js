const Ship = (length) => {
  const shipBody = new Array(length).fill(false);

  const hit = (pos) => {
    shipBody[pos] = true;
  };

  const isSunk = () => {
    const sunk = shipBody.reduce((prev, next) => prev && next, true);
    return sunk;
  };

  return { hit, isSunk };
};

export default Ship;
