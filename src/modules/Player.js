const Player = () => {
  const attackEnemyBoard = (enemyBoard, coordinate) => {
    enemyBoard.receiveAttack(coordinate);
  };
  return { attackEnemyBoard };
};

export default Player;
