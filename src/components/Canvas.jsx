import React from 'react';
import Hero from './Hero';
import Ground from './Ground';

const Canvas = () => {
  const style = {
    border: '1px solid black',
    position: "absolute"
  };
  const style2 = {
    border: "1px solid gold",
    position: "absolute",
    zIndex: "4"
  }
  const viewBox = [0, 0, window.innerWidth, window.innerHeight];

  return (
    <>
      <canvas id="canvas" style={style2} width={window.innerWidth} height={window.innerHeight}></canvas>
      <svg id="svg-canvas" style={style} viewBox={viewBox}>
        <Ground />
        <Hero />
      </svg>
    </>
  );
};

export default Canvas;
