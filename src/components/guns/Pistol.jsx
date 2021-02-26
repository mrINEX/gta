import React, { useEffect } from 'react';
import SCHEMES from '../../constants/constants';

const Pistol = (props) => {
  const { x, y, directionGun, isPressTrigger } = props;
  const path = SCHEMES.schemeePistol.replace(/%/g, '').split(' ');

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.translate(x, y);
    SCHEMES.drawPistol(ctx, path);
  });

  if (isPressTrigger) {
    const diagonalLength = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    SCHEMES.removePistol(ctx, path);
    ctx.rotate((Math.PI / 180) * -10);
    SCHEMES.drawPistol(ctx, path);
  }

  return (
    <div></div>
  );
}

export default Pistol;
