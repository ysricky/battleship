const Ship = (length) => {
  const shipBody = Array(length).fill('safe');

  const hit = (position) => {
    shipBody[position] = 'hit';
  };

  const isSunk = () => {
    const sunk = shipBody.every((part) => part === 'hit');
    return sunk;
  };

  return { hit, isSunk };
};

export default Ship;
