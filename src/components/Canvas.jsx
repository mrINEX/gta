import React from 'react';
import Hero from './Hero';
import Ground from './Ground';

const Canvas = () => {
  const style = {
    border: '1px solid black',
  };
  const viewBox = [0, 0, window.innerWidth, window.innerHeight];

  return (
    <svg id="canvas" style={style} viewBox={viewBox}>
      <Ground />
      <Hero />
    </svg>
  );
};

export default Canvas;
