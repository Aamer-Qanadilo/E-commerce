import React from "react";

const CustomToggle = React.forwardRef(({ onClick, children }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="navButton"
  >
    {children}
  </div>
));

export default CustomToggle;
