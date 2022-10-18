import * as React from "react";
import { useSnackbar } from "@mui/base/SnackbarUnstyled";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { css, keyframes, styled } from "@mui/system";

const grey = {
  200: "#E0E3E7",
};

const snackbarInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const CustomSnackbar = styled("div")(
  () => css`
    position: fixed;
    z-index: 5500;
    display: flex;
    left: 16px;
    top: 16px;
    right: auto;
    justify-content: start;
    max-width: 560px;
    min-width: 300px;
    background-color: #d62e45;
    border-radius: 8px;
    border: 1px solid white;
    box-shadow: ${`0 5px 13px -3px ${grey[200]}`};
    padding: 0.75rem;
    color: white;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 600;
    animation: ${snackbarInLeft} 500ms;
    transition: transform 0.2s ease-out;
  `
);

export default function UseSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: 5000,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <button type="button" onClick={handleOpen}>
        Open Snackbar
      </button>
      {open ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <CustomSnackbar {...getRootProps()}>
            Miss! Try again...
          </CustomSnackbar>
        </ClickAwayListener>
      ) : null}
    </React.Fragment>
  );
}
