import React from 'react';

const Circle = () => {
  const text = "Asphalt Design system";

  const textSpans = text.split("").map((char, i) => (
    <span key={i} style={{ transform: `rotate(${i * 10.3}deg)` }}>
      {char}
    </span>
  ));

  return (
    <div className="circle">
      <div className="logo"></div>
      <div className="text">
        {textSpans}
      </div>
    </div>
  );
};

export default Circle;
