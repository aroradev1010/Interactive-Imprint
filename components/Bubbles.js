import React from "react";

function Bubbles() {
  const spanStyles = [
    { "--i": 35 },
    { "--i": 12 },
    { "--i": 14 },
    { "--i": 22 },
    { "--i": 32 },
    { "--i": 35 },
    { "--i": 15 },
    { "--i": 19 },
    { "--i": 35 },
    { "--i": 11 },
    { "--i": 12 },
  ];
  return (
    <div className="container2">
      <div className="bubbles h-[100vh]">
        {spanStyles.map((style, index) => {
          return (
            <>
              <span key={index} style={style}></span>
            </>
          );
        })}
        </div>
    </div>
  );
}

export default Bubbles;
