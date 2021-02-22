import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [positionX, setPositionX] = useState(60);
    const [positionY, setPositionY] = useState(80);

    const goBack = () => {
      for (let i = 0; i < 20; i += 1) {
        setTimeout(() => {
          setPositionY((prev) => prev + 1);
        }, i * 6);
      }
    }

    const moveHandler = (e) => {
      e.preventDefault();

      if (e.which === 39 || e.keyCode === 39) {
        setPositionX((prev) => prev + 1);
      }
      if (e.which === 37 || e.keyCode === 37) {
        setPositionX((prev) => prev - 1);
      }
      if (e.which === 32 || e.keyCode === 32) {
        for (let i = 0; i < 20; i += 1) {
          setTimeout(() => {
            setPositionY((prev) => prev - 1);
            if (i === 19) goBack();
          }, i * 8);
        }
      }

      // console.log(e);
    }

    useEffect(() => {
      document.addEventListener('keydown', moveHandler)
      return () => document.removeEventListener('keydown', moveHandler);
    });

    return (
      <rect x={positionX} y={`${positionY}%`} rx="10" ry="10" width="30" height="40" stroke="black" fill="black" strokeWidth="5"/>
    );
}

export default Hero;
