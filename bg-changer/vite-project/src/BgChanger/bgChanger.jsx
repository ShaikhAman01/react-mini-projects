import React, { useState } from 'react';

const BgChanger = () => {
  const [color, setColor] = useState("#fff");

  const getRed = () => setColor('#ff0000');
  const getYellow = () => setColor('#FFFF00');
  const getBlack = () => setColor('#000000');
  const getGreen = () => setColor('#00FF00');
  const getBlue = () => setColor('#0000FF');
  const getOrange = () => setColor('#FFA500');
  const getDefault = () => setColor('#fff');

  return (
    <div style={{ backgroundColor: color, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={getRed} style={{ backgroundColor: 'red', margin: '5px', color: 'white' }}>Red</button>
      <button onClick={getYellow} style={{ backgroundColor: 'yellow', margin: '5px' }}>Yellow</button>
      <button onClick={getBlack} style={{ backgroundColor: 'black', margin: '5px', color: 'white' }}>Black</button>
      <button onClick={getGreen} style={{ backgroundColor: 'green', margin: '5px', color: 'white' }}>Green</button> 
      <button onClick={getBlue} style={{ backgroundColor: 'blue', margin: '5px', color: 'white' }}>Blue</button>
      <button onClick={getOrange} style={{ backgroundColor: 'orange', margin: '5px', color: 'white' }}>Orange</button>
      <button onClick={getDefault} style={{ backgroundColor: 'white', margin: '5px' }}>Default</button>
    </div>
  );
};

export default BgChanger;
