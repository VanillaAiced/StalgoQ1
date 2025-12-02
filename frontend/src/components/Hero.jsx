import React from 'react';
import cafeFront from './images/mscd.jpg';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${cafeFront})`,
      }}
    >
    </section>
  );
}
