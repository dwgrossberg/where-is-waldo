import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function FormDialog(props) {
  const { gameOver, puzzleTime, level } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEnter = (e) => {
    console.log(value);
    navigate(`/best-times/level-${level}`);
  };

  React.useEffect(() => {
    if (gameOver) {
      setOpen(true);
    }
  }, [gameOver]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Puzzle Complete! <p>Final Time: {puzzleTime}</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Well done, you found Waldo and all of his friends. Enter your name
            to record your time for this level:
          </DialogContentText>
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEnter}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
