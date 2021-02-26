import React from 'react';
import SCHEMES from '../../constants/constants';

const Pistol = (props) => {
  const { x, y, directionGun, isPressTrigger } = props;
  const path = SCHEMES.schemeePistol.replace(/%/g, '');

  if (isPressTrigger) {
    const laser = document.querySelector('.real-laser');
    const rect = laser.getBoundingClientRect();
    console.log(rect);

    const { right, y } = rect; // end laser
    const { x, bottom } = rect; // start laser

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const diagonalLength = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));

    function clear() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0,0,canvas.width,canvas.height);
    }

    let offset = 0;
    let timeoutId;

    function draw() {
      clear();
      ctx.setLineDash([8, diagonalLength]);
      ctx.lineDashOffset = -offset;
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.moveTo(x, bottom);
      ctx.lineTo(right, y);
      ctx.stroke();
    }

    function shot() {
      if (offset >= diagonalLength) window.clearTimeout(timeoutId)
      else {
        offset += 30;
        timeoutId = window.setTimeout(shot, 5);
        draw();
      }
    }

    shot();
  }
  
  return (
    <>
      <defs>
        <g id="laser" transform={`rotate(${directionGun})`}>
          <line x1="75" x2="100%" y1="26" y2="26" stroke="red" strokeWidth="1.6" strokeLinecap="round"/>
        </g>
        <g id="pistol" transform={`rotate(${directionGun})`}>
          <polygon
            points={path} stroke="black" strokeWidth="2"
            fill="#607d8b"
          />
        </g>
      </defs>

      <use className="real-laser" x={x + 10} y={`${y}%`} xlinkHref="#laser"/>
      <use className="real-pistol" x={x + 10} y={`${y}%`} xlinkHref="#pistol"/>
    </>
  );
}

export default Pistol;
