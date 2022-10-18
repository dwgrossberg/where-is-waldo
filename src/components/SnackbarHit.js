import * as React from "react";
import { useSnackbar } from "@mui/base/SnackbarUnstyled";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { css, keyframes, styled } from "@mui/system";

const grey = {
  200: "#E0E3E7",
};

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
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
    right: 16px;
    top: 16px;
    left: auto;
    justify-content: start;
    max-width: 560px;
    min-width: 300px;
    background-color: #8fdce4;
    border-radius: 8px;
    border: 1px solid white;
    box-shadow: ${`0 5px 13px -3px ${grey[200]}`};
    padding: 0.75rem;
    color: #202832;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 600;
    animation: ${snackbarInRight} 500ms;
    transition: transform 0.2s ease-out;
  `
);

export default function SnackbarHit(props) {
  const [open, setOpen] = React.useState(false);
  const { isHit, handleSnackHitOpen } = props;

  const handleClose = () => {
    setOpen(false);
    handleSnackHitOpen(false);
  };

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: 5000,
  });

  React.useEffect(() => {
    if (isHit) {
      setOpen(true);
    }
  }, [isHit]);

  return (
    <React.Fragment>
      {open ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <CustomSnackbar {...getRootProps()}>
            That's right, good eye!
          </CustomSnackbar>
        </ClickAwayListener>
      ) : null}
    </React.Fragment>
  );
}
