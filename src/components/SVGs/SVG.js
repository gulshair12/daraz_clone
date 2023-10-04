import React from "react";

const SVGPath = {
  Checkmark: "M1 6L3.91667 9L9 1",
};

const SVG = ({
  fill,
  width,
  height,
  pathName,
  strokeColor,
  strokeWidth,
  strokeLinejoin,
  strokeLinecap,
  className,
  viewBox,
}) => {
  const path = SVGPath[pathName];

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={viewBox}
      fill={fill}
    >
      <path
        d={path}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
      />
    </svg>
  );
};

export default SVG;
