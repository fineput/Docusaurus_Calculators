import React, { useState } from 'react';

const TriangleAreaCalculator = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [area, setArea] = useState('');

  const calculateArea = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setArea('Invalid input');
    } else {
      const s = (a + b + c) / 2;
      const areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      setArea(areaValue.toFixed(2));
    }
  };

  return (
    <div>
      <h1>Triangle Area Calculator (Heron's Formula)</h1>
      <div>
        <input
          type="text"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          placeholder="Enter side A length"
        />
        <input
          type="text"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          placeholder="Enter side B length"
        />
        <input
          type="text"
          value={sideC}
          onChange={(e) => setSideC(e.target.value)}
          placeholder="Enter side C length"
        />
        <button onClick={calculateArea}>Calculate Area</button>
      </div>
      <div>
        {area && <p>Triangle Area: {area}</p>}
      </div>
    </div>
  );
};

export default TriangleAreaCalculator;
