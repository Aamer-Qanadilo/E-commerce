import React from "react";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
const delay = 5000;

const Slider = ({ sliders }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    console.log(timeoutRef, timeoutRef.current);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const evaluateIndex = (prevIndex) => {
    return prevIndex === sliders.length / 2 - 1 ? 0 : prevIndex + 1;
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => evaluateIndex(prevIndex)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliders.map((advItem, index) => (
          <div className="slide" key={index}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
