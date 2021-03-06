import React, { useState } from 'react';
import Enemy from '../Enemy';
import shot from '../../assets/sounds/16557_1460656892.mp3'

const Pistol = (props) => {
  const { x, y, weaponDirection, isPressTrigger, isLaser, isSound, skin } = props;
  const path = skin.replace(/%/g, '');
  const [enemyIsAlive, setEnemyIsAlive] = useState(0);

  if (isPressTrigger) {
    isSound && new Audio(shot).play();
    const canvasBullet = document.getElementById('canvas-bullet');
    const ctx = canvasBullet.getContext('2d');
    const canvasEnemy = document.getElementById('canvas-enemy');
    const ctxEnemy = canvasEnemy.getContext('2d');
    let ref;
    // x = r*cos(fi) y = r*sin(fi)

    const bullet = {
      offset: 10,
      radius: 82,
      step: 70,
      result: { isHit: false },
      draw: function () {
        ctx.save();
        ctx.translate(x + this.offset, y + this.offset);
        const xBullet = this.radius * Math.cos((Math.PI / 180) * weaponDirection);
        const yBullet = this.radius * Math.sin((Math.PI / 180) * weaponDirection);
        ctx.translate(xBullet, yBullet);
        ctx.rotate((Math.PI / 180) * weaponDirection);
        ctx.fillRect(0, 0, 9, 3.5);
        ctx.restore();
      }
    };

    function checkHit(radius, x, y, offset) {
      const xBullet = radius * Math.cos((Math.PI / 180) * weaponDirection);
      const yBullet = radius * Math.sin((Math.PI / 180) * weaponDirection);
      const xCheck = xBullet + (x + offset);
      const yCheck = yBullet + (y + offset);
      const isHit = ctxEnemy.isPointInPath(xCheck, yCheck);
      if (isHit) {
        return { isHit, x: xCheck, y: yCheck };
      }
      return { isHit };
    }

    function draw() {
      const diagonalLength = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
      ctx.clearRect(0,0, canvasBullet.width, canvasBullet.height);

      if (bullet.radius > diagonalLength) {
        bullet.radius = 82;
        window.cancelAnimationFrame(ref);
        if (bullet.result.isHit) {
          ctxEnemy.clearRect(0,0, canvasEnemy.width, canvasEnemy.height);
          setEnemyIsAlive(prev => prev + 1)
        }
      } else {
        bullet.draw();
        bullet.radius += bullet.step;
        ref = window.requestAnimationFrame(draw);
      }
    }

    bullet.draw();
    ref = window.requestAnimationFrame(draw);

    const diagonalLength = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    for (let i = 0; i < diagonalLength; i += 1) {
      const answer = checkHit(bullet.radius + i, x, y, bullet.offset);
      if (answer.isHit) {
        bullet.result = answer;
        break;
      }
    }
  }
  
  return (
    <>
      <g transform={`translate(${x + 10}, ${y + 10}) rotate(${weaponDirection})`}>
        {isLaser && <polyline id="laser"
          points={`82,0 ${Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))},0`}
          stroke="red" strokeWidth="1.6" strokeLinecap="round"/>}
        <polygon id="pistol"
          points={path} stroke="black" strokeWidth="2"
          fill="#607d8b"
        />
      </g>
      <Enemy
        enemyIsAlive={enemyIsAlive}
        xHero={x + 10} yHero={y + 10}
      />
    </>
  );
}

export default Pistol;
