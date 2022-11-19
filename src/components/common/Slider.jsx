import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
const delay = 5000;

const Slider = ({ sliders }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const evaluateIndex = (prevIndex) => {
    return prevIndex === sliders.length / 2 ? 0 : prevIndex + 1;
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
        <div className="leftAngle">
          <i className="fa-solid fa-angle-left"></i>
        </div>
        {sliders.map((slideItem, index) => (
          <div className="slide" key={index}>
            {slideItem}
          </div>
        ))}
        <div className="rightAngle">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
