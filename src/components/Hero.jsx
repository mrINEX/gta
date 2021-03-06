import React, { useEffect, useState } from 'react';
import Pistol from './guns/Pistol';
import SCHEMES from '../constants/constants';

const Hero = (props) => {
    const [positionX, setPositionX] = useState(60);
    const [positionY, setPositionY] = useState(window.innerHeight - 150);
    const [colorHero, setColorHero] = useState(0);
    const [isJump, setIsJump] = useState(false);
    const [isPressTrigger, setIsPressTrigger] = useState(false);
    const [isLaser, setIsLaser] = useState(false);
    const [isSound, setIsSound] = useState(false);

    const [weaponDirection, setWeaponDirection] = useState(0);

    const fromAbove = () => {
      for (let i = 0; i < 20; i += 1) {
        setTimeout(() => {
          setPositionY((prev) => prev + 5);
          if (i === 19) setIsJump(false);
        }, i * 6);
      }
    }

    const moveHandler = (e) => {
      console.log(e);
      if (e.which === 39 || e.keyCode === 39 || e.which === 68 || e.keyCode === 68) {
        setPositionX((prev) => prev + 2);
      }
      if (e.which === 37 || e.keyCode === 37 || e.which === 65 || e.keyCode === 65) {
        setPositionX((prev) => prev - 2);
      }
      if (e.which === 32 || e.keyCode === 32) {
        if (!isJump) {
          for (let i = 0; i < 20; i += 1) {
            setTimeout(() => {
              setPositionY((prev) => prev - 5);
              if (i === 19) fromAbove();
            }, i * 8);
          }
        }
        setIsJump(true);
      }
      if (e.which === 38 || e.keyCode === 38) {
        setWeaponDirection((prev) => prev - 1);
      }
      if (e.which === 40 || e.keyCode === 40) {
        setWeaponDirection((prev) => prev + 1);
      }

      if (e.which === 69 || e.keyCode === 69) {
        setIsPressTrigger(true);
        setTimeout(() => setIsPressTrigger(false));
      }

      if (e.which === 76 || e.keyCode === 76) {
        setIsLaser((prev) => {
          if (prev) {
            return false;
          }
          return true;
        });
      }

      if (e.which === 77 || e.keyCode === 77) {
        setIsSound((prev) => {
          if (prev) {
            return false;
          }
          return true;
        });
      }

      if (e.which === 67 || e.keyCode === 67) {
        setColorHero((prev) => prev + 1);
      }
    }

    useEffect(() => {
      document.addEventListener('keydown', moveHandler)
      return () => document.removeEventListener('keydown', moveHandler);
    });

    return (
      <>
        <rect
          x={positionX} y={positionY}
          rx="15" ry="15"
          width="55" height="70"
          fill={SCHEMES.colorsHero[colorHero % (SCHEMES.colorsHero.length + 1)]}
        />
        <Pistol
          x={positionX} y={positionY}
          weaponDirection={weaponDirection}
          isPressTrigger={isPressTrigger}
          isLaser={isLaser}
          isSound={isSound}
          skin={props.skin}
          setIsPressTrigger={setIsPressTrigger}
        />
      </>
    );
}

export default Hero;
