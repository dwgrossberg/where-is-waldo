/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import theme from "../theme";
import ImageZoom from "./ImageZoom";
import CharactersDialog from "./CharactersDialog";
import Stopwatch from "./Stopwatch";
import SnackbarHit from "./SnackbarHit";
import SnackbarMiss from "./SnackbarMiss";
import FormDialog from "./FormDialog";

const Puzzle = (props) => {
  const { puzzles } = props;
  const params = useParams();
  const thisPuzzle = puzzles.find((item) => item.id === params.id);
  const [[coordX, coordY], setCoordXY] = useState([0, 0]);
  const [[docX, docY], setDocXY] = useState([0, 0]);
  const [open, setOpen] = useState(false);
  const [snackHitOpen, setSnackHitOpen] = useState(false);
  const [snackMissOpen, setSnackMissOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    thisPuzzle.characters[0].name
  );
  const [characters, setCharacters] = useState([
    {
      waldo: {
        coords: [0, 0],
        isHit: false,
      },
    },
    {
      wizard: {
        coords: [0, 0],
        isHit: false,
      },
    },
    {
      wenda: {
        coords: [0, 0],
        isHit: false,
      },
    },
    {
      odlaw: {
        coords: [0, 0],
        isHit: false,
      },
    },
  ]);

  const isCoordWithinTwoDegrees = (coord1, coord2) => {
    return (
      coord1 === coord2 ||
      coord1 + 1 === coord2 ||
      coord1 + 2 === coord2 ||
      coord1 - 1 === coord2 ||
      coord1 - 2 === coord2
    );
  };

  const isGameOver = () => {
    return characters.every(
      (item) => Object.values(Object.values(item))[0].isHit
    )
      ? true
      : false;
  };

  const handleGameOver = () => {
    // document.getElementById("waldo").style.opacity = "";
    // document.getElementById("wizard").style.opacity = "";
    // document.getElementById("wenda").style.opacity = "";
    // document.getElementById("odlaw").style.opacity = "";
    setGameOver(true);
    //stop watch, direct to top scores page - input name
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSnackHitOpen = (value) => {
    setSnackHitOpen(value);
  };

  const handleSnackMissOpen = (value) => {
    setSnackMissOpen(value);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    const charactersCopy = { ...characters };
    switch (value) {
      case "waldo":
        if (
          isCoordWithinTwoDegrees(coordX, characters[0].waldo.coords[0]) &&
          isCoordWithinTwoDegrees(coordY, characters[0].waldo.coords[1])
        ) {
          setSnackHitOpen(true);
          charactersCopy[0].waldo.isHit = true;
          setCharacters([
            charactersCopy[0],
            characters[1],
            characters[2],
            characters[3],
          ]);
          document.getElementById("waldo").style.opacity = 0.15;
          document.getElementById("waldowaldo").style.opacity = 0.5;
          document.getElementById("waldowaldo").style.textDecoration =
            "line-through";
          if (isGameOver()) {
            handleGameOver();
          }
        } else {
          setSnackMissOpen(true);
        }
        break;
      case "wizard":
        if (
          isCoordWithinTwoDegrees(coordX, characters[1].wizard.coords[0]) &&
          isCoordWithinTwoDegrees(coordY, characters[1].wizard.coords[1])
        ) {
          setSnackHitOpen(true);
          charactersCopy[1].wizard.isHit = true;
          setCharacters([
            characters[0],
            charactersCopy[1],
            characters[2],
            characters[3],
          ]);
          document.getElementById("wizard").style.opacity = 0.15;
          document.getElementById("wizardwizard").style.opacity = 0.5;
          document.getElementById("wizardwizard").style.textDecoration =
            "line-through";
          if (isGameOver()) {
            handleGameOver();
          }
        } else {
          setSnackMissOpen(true);
        }
        break;
      case "wenda":
        if (
          isCoordWithinTwoDegrees(coordX, characters[2].wenda.coords[0]) &&
          isCoordWithinTwoDegrees(coordY, characters[2].wenda.coords[1])
        ) {
          setSnackHitOpen(true);
          charactersCopy[2].wenda.isHit = true;
          setCharacters([
            characters[0],
            characters[1],
            charactersCopy[2],
            characters[3],
          ]);
          document.getElementById("wenda").style.opacity = 0.15;
          document.getElementById("wendawenda").style.opacity = 0.5;
          document.getElementById("wendawenda").style.textDecoration =
            "line-through";
          if (isGameOver()) {
            handleGameOver();
          }
        } else {
          setSnackMissOpen(true);
        }
        break;
      case "odlaw":
        if (
          isCoordWithinTwoDegrees(coordX, characters[3].odlaw.coords[0]) &&
          isCoordWithinTwoDegrees(coordY, characters[3].odlaw.coords[1])
        ) {
          setSnackHitOpen(true);
          charactersCopy[3].odlaw.isHit = true;
          setCharacters([
            characters[0],
            characters[1],
            characters[2],
            charactersCopy[3],
          ]);
          document.getElementById("odlaw").style.opacity = 0.15;
          document.getElementById("odlawodlaw").style.opacity = 0.5;
          document.getElementById("odlawodlaw").style.textDecoration =
            "line-through";
          if (isGameOver()) {
            handleGameOver();
          }
        } else {
          setSnackMissOpen(true);
        }
        break;
      default:
        console.log("none");
    }
  };

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
      setCharacters([
        {
          waldo: {
            coords: [
              docSnap.data().characters.waldo.coords[0],
              docSnap.data().characters.waldo.coords[1],
            ],
            isHit: false,
          },
        },
        {
          wizard: {
            coords: [
              docSnap.data().characters.wizard.coords[0],
              docSnap.data().characters.wizard.coords[1],
            ],
            isHit: false,
          },
        },
        {
          wenda: {
            coords: [
              docSnap.data().characters.wendy.coords[0],
              docSnap.data().characters.wendy.coords[1],
            ],
            isHit: false,
          },
        },
        {
          odlaw: {
            coords: [
              docSnap.data().characters.odlaw.coords[0],
              docSnap.data().characters.odlaw.coords[1],
            ],
            isHit: false,
          },
        },
      ]);
    };
    getData();
  }, [thisPuzzle]);

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
          align-items: center;
          gap: 15px;
        `}
      >
        <Stopwatch gameOver={gameOver} />
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
                  id={item.name + item.name}
                  css={css`
                    margin-right: 3px;
                  `}
                >
                  {item.name}
                </p>
                <img
                  alt={item.name}
                  id={item.name}
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
      <SnackbarHit
        isHit={snackHitOpen}
        handleSnackHitOpen={handleSnackHitOpen}
      />
      <SnackbarMiss
        isHit={snackMissOpen}
        handleSnackMissOpen={handleSnackMissOpen}
      />
      <FormDialog gameOver={gameOver} />
    </div>
  );
};

export default Puzzle;
