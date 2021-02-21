import React, { useState } from 'react';

const Hero = () => {
    const [position, setPosition] = useState(60);

    return (
      <rect x={position} y="80%" rx="10" ry="10" width="30" height="40" stroke="black" fill="transparent" strokeWidth="5"/>
    );
}

export default Hero;
