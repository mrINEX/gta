import React, { useEffect } from 'react';
import Hero from './Hero';
import Ground from './Ground';

const Canvas = () => {
  const style = {
    border: '1px solid black',
  };
  const path = "78% 21%, 78% 27%, 75% 34%, 31% 32%, 30% 36%, 26% 36%, 23% 47%, 24% 52%, 12% 51%, 15% 46%, 18% 32%, 15% 30%, 11% 28%, 8% 29%, 15% 22%, 15% 19%, 13% 16%, 18% 18%, 20% 20%, 22% 19%, 22% 19%".replace(/%/g, '').split(' ');
  const viewBox = [0, 0, window.innerWidth, window.innerHeight];

  useEffect(() => {
    const canvas = document.getElementById('shut-gun-canvas');

    if (canvas.getContext) {
      
    }
  });

  return (
    <>
      <span onClick={removeGun}>remove</span>
      <canvas id="shut-gun-canvas" style={style} width={window.innerWidth} height={window.innerHeight}>
        Refresh your browser
      </canvas>
      
      <svg id="shut-gun-canvas" style={style} viewBox={viewBox}>
        <Ground />
        <Hero />
      </svg>
    </>
  );
};

export default Canvas;
