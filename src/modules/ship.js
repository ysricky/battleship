const shipFactory = (name, length) => {
  const shipName = name;
  const shipLength = length;

  return { shipName, shipLength };
};

export default shipFactory;
