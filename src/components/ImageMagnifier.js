import { useState } from "react";

const ImageMagnifier = (props) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const src = props.img;
  const width = props.width;
  const height = props.height;
  const magnifierHeight = 100;
  const magnifierWidth = 100;
  const zoomLevel = 1.5;
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
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
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
          border: "1px solid lightgray",
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

export default ImageMagnifier;
