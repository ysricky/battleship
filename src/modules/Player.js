const Player = () => {
  const attackEnemyBoard = (enemyBoard, coordinate) => {
    enemyBoard.receiveAttack(coordinate);
  };

  const randomAttack = (enemyBoard) => {
    const legalMove = enemyBoard.board.reduce((objArr, obj, index) => {
      if (obj === null || obj.isHit === false) objArr.push(index);
      return objArr;
    }, []);

    const randomMove = Math.floor(Math.random() * legalMove.length);
    enemyBoard.receiveAttack(legalMove[randomMove]);
  };

  return { attackEnemyBoard, randomAttack };
};

export default Player;
