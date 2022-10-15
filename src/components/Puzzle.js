/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import ImageZoom from "./ImageZoom";

const Puzzle = (props) => {
  const { puzzles } = props;
  const params = useParams();
  const thisPuzzle = puzzles.find((item) => item.id === params.id);
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      `}
    >
      <ImageZoom img={thisPuzzle.img} width={"100%"} height={"100%"} />
    </div>
  );
};

export default Puzzle;
