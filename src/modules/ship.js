const Ship = (length) => {
  const shipBody = Array(length).fill(null);

  const hit = (position) => {
    shipBody[position] = 'hit';
    return shipBody;
  };

  const isSunk = () => {
    const sunk = shipBody.every((part) => part === 'hit');
    return sunk;
  };

  return { hit, isSunk };
};

export default Ship;
