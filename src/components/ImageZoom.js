import { useState, useEffect } from "react";
import theme from "../theme";

const ImageZoom = (props) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[coordX, coordY], setCoordXY] = useState([0, 0]);
  const src = props.img;
  const width = props.width;
  const height = props.height;
  const magnifierHeight = 150;
  const magnifierWidth = 150;
  const zoomLevel = 3;

  useEffect(() => {
    console.log([coordX, coordY]);
  }, [coordX, coordY]);

  const updateImgSize = (e) => {
    // update image size and turn-on magnifier
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const updateCursorPosition = (e) => {
    // update cursor position
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    // calculate cursor position on the image
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setXY([x, y]);
  };

  const closeMagnifier = () => {
    // close magnifier
    setShowMagnifier(false);
  };

  const getCursorPosition = (e) => {
    // calculate cursor position on the page
    const x = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const y = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    setCoordXY([x, y]);
  };

  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
    >
      <img
        src={src}
        style={{ height: height, width: width, cursor: "crosshair" }}
        onMouseEnter={updateImgSize}
        onMouseMove={updateCursorPosition}
        onMouseLeave={closeMagnifier}
        onMouseDown={getCursorPosition}
        alt={"img"}
      />

      {/* Magnifier Lens */}
      <div
        style={{
          borderRadius: "50%",
          border: `3px solid ${theme.palette.secondary.main}`,
          display: showMagnifier ? "" : "none",
          position: "absolute",
          // prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
};

export default ImageZoom;
