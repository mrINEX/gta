import React from 'react';
import SCHEMES from '../../constants/constants';

const Pistol = (props) => {
  const { x, y, directionGun, isPressTrigger } = props;
  const path = SCHEMES.schemePistol3.replace(/%/g, '');

  if (isPressTrigger) {
    const canvasBullet = document.getElementById('canvas-bullet');
    const ctx = canvasBullet.getContext('2d');
    let ref;
    // x = r*cos(fi) y = r*sin(fi)

    const bullet = {
      offset: 10,
      radius: 82,
      draw: function () {
        ctx.save();
        ctx.translate(x + this.offset, y + this.offset);
        const xBullet = this.radius * Math.cos((Math.PI / 180) * directionGun);
        const yBullet = this.radius * Math.sin((Math.PI / 180) * directionGun);
        ctx.translate(xBullet, yBullet);
        ctx.rotate((Math.PI / 180) * directionGun);
        ctx.fillRect(0, 0, 9, 3.5);
        ctx.restore();
      }
    };

    function draw() {
      const diagonalLength = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
      ctx.clearRect(0,0, canvasBullet.width, canvasBullet.height);
      if (bullet.radius > diagonalLength) {
        window.cancelAnimationFrame(ref);
        bullet.radius = 82;
      } else {
        bullet.draw();
        bullet.radius += 45;
        ref = window.requestAnimationFrame(draw);
      }
    }

    bullet.draw();
    ref = window.requestAnimationFrame(draw);
  }
  
  return (
    <g transform={`translate(${x + 10}, ${y + 10}) rotate(${directionGun})`}>
      {/* <polyline id="laser"
        points={`82,0 ${Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))},0`}
        stroke="red" strokeWidth="1.6" strokeLinecap="round"/> */}
      <polygon id="pistol"
        points={path} stroke="black" strokeWidth="2"
        fill="#607d8b"
      />
    </g>
  );
}

export default Pistol;
