import React, { useState } from 'react';
import Hero from './Hero';
import Ground from './Ground';
import SCHEMES from '../constants/constants';
import './scss/Canvas.scss';

const Canvas = () => {
  const [skin, setSkin] = useState(SCHEMES.schemePistol);

  const style = {
    border: '1px solid black',
    position: "absolute"
  };
  const styleBullet = {
    border: '1px solid gold',
    position: "absolute"
  };
  const styleEnemy = {
    border: '1px solid green',
    position: "absolute",
    zIndex: 10,
  };
  const viewBox = [0, 0, window.innerWidth, window.innerHeight];

  function changeSkin(e) {
    const { value } = e.target;
    setSkin(SCHEMES[value]);
  }

  return (
    <>
      <div className="prompts">
        <code className="btn-key">E (shot with weapon)</code>
        <code className="btn-key">← and → or A and D (move)</code>
        <code className="btn-key">↑ and ↓ (weapon direction)</code>
        <code className="btn-key">L (on/off weapon laser)</code>
        <code className="btn-key">M (on/off weapon sound)</code>
        <code className="btn-key">C (change Hero color)</code>
        <select className="btn-key" name="select" onChange={changeSkin}>
          <option value="schemePistol">Skin weapon 1</option>
          <option value="schemePistol2">Skin weapon 2</option>
          <option value="schemePistol3">Skin weapon 3</option>
        </select>
      </div>

      <canvas id="canvas-bullet" style={styleBullet} width={window.innerWidth} height={window.innerHeight}></canvas>
      <canvas id="canvas-enemy" style={styleEnemy} width={window.innerWidth} height={window.innerHeight}></canvas>

      <svg id="svg-canvas" style={style} viewBox={viewBox}>
        <Ground />
        <Hero skin={skin}/>
      </svg>
    </>
  );
};

export default Canvas;
