import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#ffcc80",
    },
  },
});

export default theme;
