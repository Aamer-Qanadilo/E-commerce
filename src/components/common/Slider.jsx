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

  const changeIndex = (newIndex) => {
    if (newIndex < 0) {
      setIndex(sliders.length - 1);
    } else if (newIndex >= sliders.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

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
      <div className="leftAngle" onClick={() => changeIndex(index - 1)}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliders.map((slideItem, index) => (
          <div className="slide" key={index}>
            {slideItem}
          </div>
        ))}
      </div>
      <div className="rightAngle" onClick={() => changeIndex(index + 1)}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Slider;
