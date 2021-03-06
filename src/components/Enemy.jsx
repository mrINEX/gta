import React, { useEffect } from 'react';
import SCHEMES from '../constants/constants';

const Enemy = (props) => {
  const { xHero, yHero, enemyIsAlive } = props;

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  useEffect(() => {
    const canvasEnemy = document.getElementById('canvas-enemy');
    const ctx = canvasEnemy.getContext('2d');
    const x = randomInteger(0, window.innerWidth);
    const y = randomInteger(0, window.innerHeight);
    
    ctx.clearRect(0,0, canvasEnemy.width, canvasEnemy.height);
    
    const g = (x * x + y * yHero) / Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)) * (Math.pow(x, 2) + Math.pow(yHero, 2)));
    SCHEMES.drawPistol(x, y, ctx, Math.acos(g));

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, randomInteger(7, 50), 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  }, [enemyIsAlive]);

  return (
    <>
      <text x={20} y={window.innerHeight - 20}>Killed enemies {enemyIsAlive}</text>
    </>
  );
};

export default Enemy;
