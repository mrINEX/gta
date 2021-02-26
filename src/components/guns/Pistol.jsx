import React from 'react';
import SCHEMES from '../../constants/constants';

const Pistol = (props) => {
  const { x, y, directionGun, isPressTrigger } = props;
  const path = SCHEMES.schemeePistol.replace(/%/g, '');

  if (isPressTrigger) {
    
  }
  
  return (
    <g transform={`translate(${x}, ${y}) rotate(${directionGun})`}>
      <polyline id="laser"
        transform={`translate(24, 0)`}
        points={`80,26 ${Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))},26`}
        stroke="red" strokeWidth="1.6" strokeLinecap="round"/>
      <polygon id="pistol"
        transform={`translate(24, 0)`}
        points={path} stroke="black" strokeWidth="2"
        fill="#607d8b"
      />
    </g>
  );
}

export default Pistol;
