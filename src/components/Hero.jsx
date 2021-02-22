import React, { useEffect, useState } from 'react';
import Pistol from './guns/Pistol';

const Hero = () => {
    const [positionX, setPositionX] = useState(60);
    const [positionY, setPositionY] = useState(82);
    const [isJump, setIsJump] = useState(false);

    const [directionGun, setDirectionGun] = useState(0);

    const fromAbove = () => {
      for (let i = 0; i < 20; i += 1) {
        setTimeout(() => {
          setPositionY((prev) => prev + 1);
          if (i === 19) setIsJump(false);
        }, i * 6);
      }
    }

    const moveHandler = (e) => {
      e.preventDefault();

      if (e.which === 39 || e.keyCode === 39) {
        setPositionX((prev) => prev + 2);
      }
      if (e.which === 37 || e.keyCode === 37) {
        setPositionX((prev) => prev - 2);
      }
      if (e.which === 32 || e.keyCode === 32) {
        if (!isJump) {
          for (let i = 0; i < 20; i += 1) {
            setTimeout(() => {
              setPositionY((prev) => prev - 1);
              if (i === 19) fromAbove();
            }, i * 8);
          }
        }
        setIsJump(true);
      }
      if (e.which === 38 || e.keyCode === 38) {
        setDirectionGun((prev) => prev - 1);
      }
      if (e.which === 40 || e.keyCode === 40) {
        setDirectionGun((prev) => prev + 1);
      }
    }

    useEffect(() => {
      document.addEventListener('keydown', moveHandler)
      return () => document.removeEventListener('keydown', moveHandler);
    });

    return (
      <g>
        <rect
          x={positionX} y={`${positionY}%`}
          rx="15" ry="15"
          width="40" height="50"
          stroke="black" fill="black" strokeWidth="5"
        />
        <Pistol
          x={positionX} y={positionY}
          directionGun={directionGun}
        />
      </g>
    );
}

export default Hero;
