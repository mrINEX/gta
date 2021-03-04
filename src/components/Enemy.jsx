import React, { useEffect } from 'react';

const Enemy = () => {
  useEffect(() => {
    const canvasEnemy = document.getElementById('canvas-enemy');
    const ctx = canvasEnemy.getContext('2d');

    ctx.arc(window.innerWidth - 200, window.innerHeight - 150, 50, 0, 2 * Math.PI);
    ctx.fill();
  }, []);

  return (
    <div></div>
    // <circle cx={window.innerWidth - 150} cy={window.innerHeight - 150} r="50"/>
  );
};

export default Enemy;
