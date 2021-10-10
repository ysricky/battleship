const Ship = (name, length) => {
  const shipName = name;
  const shipLength = length;
  const hit = () => false;
  const isSunk = () => false;

  return { shipName, shipLength, hit, isSunk };
};

export default Ship;
