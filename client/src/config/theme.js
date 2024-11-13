import { createTheme } from "@mui/material";
import { green, grey, indigo } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
      normal: indigo["A700"],
    },
    secondary: {
      main: indigo[50],
    },
    neutral: {
      light: grey[50],
      medium: grey[200],
      normal: grey[700],
      main: grey[900],
    },
    green: {
      main: green[800],
      medium: green[200],
      normal: green[700],
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    link: {
      fontSize: "0.8rem",
      fontWeight: 500,
      color: indigo["A700"], // Update the color if needed
      display: "block",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.8rem",
    },
    h8: {
      fontSize: "0.7rem",
    },
  },
});

export default theme;
