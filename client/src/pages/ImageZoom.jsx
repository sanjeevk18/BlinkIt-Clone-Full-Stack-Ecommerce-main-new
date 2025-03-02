// src/ImageZoom.js
import React, { useState } from "react";
import "../pages/style.css";

const ImageZoom = ({ src, alt }) => {
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // Get X percentage
    const y = ((e.clientY - top) / height) * 100; // Get Y percentage

    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      display: "block",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div
      className="image-zoom-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="image-zoom" />
      <div
        className="zoom-lens"
        style={{
          ...zoomStyle,
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  );
};

export default ImageZoom;
