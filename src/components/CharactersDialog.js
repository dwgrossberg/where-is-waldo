import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";

const CharactersDialog = (props) => {
  const { thisPuzzle, onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} scroll={"paper"}>
      <DialogTitle>Who did you find?</DialogTitle>
      <List sx={{ pt: 0 }}>
        {thisPuzzle.characters.map((item) => (
          <ListItem
            button
            onClick={() => handleListItemClick(item.name)}
            key={item.name}
          >
            <ListItemAvatar>
              <Avatar
                sx={{ bgcolor: blue[100], color: blue[600] }}
                alt={item.name}
                src={item.img}
              >
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default CharactersDialog;
