import React from 'react';
import SCHEMES from '../../constants/constants';

const Pistol = (props) => {
  const { x, y, directionGun, isPressTrigger } = props;
  const path = SCHEMES.schemePistol3.replace(/%/g, '');

  if (isPressTrigger) {
    const ctx = document.getElementById('canvas').getContext('2d');

    ctx.save();
    ctx.translate(x + 10, y + 10);
    ctx.translate(82 * Math.cos((Math.PI / 180) * directionGun), 82 * Math.sin((Math.PI / 180) * directionGun));
    // x = r*cos(fi)
    // y = r*sin(fi)
    ctx.rotate((Math.PI / 180) * directionGun);
    ctx.fillRect(0, 0, 7, 2);
    ctx.restore();
  }
  
  return (
    <g transform={`translate(${x + 10}, ${y + 10}) rotate(${directionGun})`}>
      <polyline id="laser"
        points={`82,0 ${Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))},0`}
        stroke="red" strokeWidth="1.6" strokeLinecap="round"/>
      <polygon id="pistol"
        points={path} stroke="black" strokeWidth="2"
        fill="#607d8b"
      />
    </g>
  );
}

export default Pistol;
