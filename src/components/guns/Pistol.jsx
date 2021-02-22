import React from 'react';

const Pistol = (props) => {
  const { x, y, directionGun } = props;
  const path = "78% 21%, 78% 27%, 75% 34%, 31% 32%, 30% 36%, 26% 36%, 23% 47%, 24% 52%, 12% 51%, 15% 46%, 18% 32%, 15% 30%, 11% 28%, 8% 29%, 15% 22%, 15% 19%, 13% 16%, 18% 18%, 20% 20%, 22% 19%, 22% 19%".replace(/%/g, '');
  
  return (
    <>
      <defs>
        <g id="pistol" transform={`rotate(${directionGun})`}>
          <line x1="75" x2="100%" y1="26" y2="82" stroke="red" strokeWidth="1.6" strokeLinecap="round"/>
          <polygon
            points={path} stroke="black" strokeWidth="2"
            fill="#607d8b"
          />
        </g>
      </defs>

      <use className="real-pistol" x={x + 10} y={`${y}%`} xlinkHref="#pistol"/>
    </>
  );
}

export default Pistol;
