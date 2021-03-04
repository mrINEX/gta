import React, { useEffect } from 'react';

const Enemy = (props) => {
  const { enemyIsAlive } = props;

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  // const style = {
  //   border: '1px solid black',
  //   position: "absolute"
  // }

  useEffect(() => {
    const canvasEnemy = document.getElementById('canvas-enemy');
    const ctx = canvasEnemy.getContext('2d');

    ctx.save();
    ctx.clearRect(0,0, canvasEnemy.width, canvasEnemy.height);
    ctx.beginPath();
    ctx.arc(randomInteger(0, window.innerWidth), randomInteger(0, window.innerHeight), randomInteger(5, 50), 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }, [enemyIsAlive]);

  return (
    <text x={20} y={window.innerHeight - 20}>Killed enemies {enemyIsAlive}</text>
  );
};

export default Enemy;
