/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import theme from "../theme";
import ImageZoom from "./ImageZoom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SimpleDialog from "./PopUp";

const Puzzle = (props) => {
  const { puzzles } = props;
  const params = useParams();
  const thisPuzzle = puzzles.find((item) => item.id === params.id);
  const [open, setOpen] = useState(false);
  const emails = ["username@gmail.com", "user02@gmail.com"];
  const [selectedValue, setSelectedValue] = useState(emails[0]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 15px;
        `}
      >
        <p
          css={css`
            text-align: center;
          `}
        >
          Can you find all of characters in the puzzle below?
        </p>
        <div
          css={css`
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 15px;
            box-shadow: 0 5px 5px -3px ${theme.palette.secondary.main};
            padding: 5px;
          `}
        >
          {thisPuzzle.characters.map((item) => {
            return (
              <div
                key={item.name}
                css={css`
                  display: flex;
                  gap: 7px;
                  align-items: baseline;
                `}
              >
                <p
                  css={css`
                    margin-right: 3px;
                  `}
                >
                  {" "}
                  {item.name}
                </p>
                <img
                  alt={item.name}
                  src={item.img}
                  css={css`
                    height: 30px;
                  `}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
      <ImageZoom
        img={thisPuzzle.img}
        width={"100%"}
        height={"100%"}
        handleClickOpen={handleClickOpen}
      />
      <SimpleDialog
        emails={emails}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default Puzzle;
