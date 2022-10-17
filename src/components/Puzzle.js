/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import theme from "../theme";
import ImageZoom from "./ImageZoom";
import CharactersDialog from "./CharactersDialog";

const Puzzle = (props) => {
  const { puzzles } = props;
  const params = useParams();
  const thisPuzzle = puzzles.find((item) => item.id === params.id);
  const [[coordX, coordY], setCoordXY] = useState([0, 0]);
  const [[docX, docY], setDocXY] = useState([0, 0]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    thisPuzzle.characters[0].name
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    console.log(value);
  };

  useEffect(() => {
    console.log([coordX, coordY]);
  }, [coordX, coordY]);

  useEffect(() => {
    const getData = async () => {
      let docRef;
      switch (thisPuzzle.level) {
        case 1:
          docRef = doc(db, "puzzles", "level1");
          break;
        case 2:
          docRef = doc(db, "puzzles", "level2");
          break;
        case 3:
          docRef = doc(db, "puzzles", "level3");
          break;
        case 4:
          docRef = doc(db, "puzzles", "level4");
          break;
        case 5:
          docRef = doc(db, "puzzles", "level5");
          break;
        case 6:
          docRef = doc(db, "puzzles", "level6");
          break;
        default:
          docRef = undefined;
      }
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getData();
  }, []);

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
        position: relative;
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
        setCoordXY={setCoordXY}
        setDocXY={setDocXY}
      />
      <CharactersDialog
        thisPuzzle={thisPuzzle}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        coords={[coordX, coordY]}
        docCoords={[docX, docY]}
      />
    </div>
  );
};

export default Puzzle;
