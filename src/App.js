import "./App.scss";
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import Input from "./components/Input/Input";
import Lists from "./components/Lists/Lists";

const theme = createTheme({
  palette: {
    success: {
      main: "#90A17D",
    },
    white: {
      main: "#fff",
    },
  },
  textField: {
    fontSize: "30px",
    fontFamily: "Montserrat , sans - serif",
  },
  typography: {
    h5: {
      color: "white",
      background: "#90A17D",
      fontFamily: "Montserrat",
      padding: "10px 40px",
      fontWeight: 600,
      lineHeight: "2",
      letterSpacing: "0.2em",
      marginBottom: "15px",
    },
    h6: {
      color: "white",
      background: "#90A17D",
      padding: "10px 15px 10px 0px",
      borderRadius: "30px",
      fontFamily: "Montserrat",
      cursor: "pointer",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h5">website todo</Typography>
        <Lists />
        <Input />
      </ThemeProvider>
    </div>
  );
}

export default App;
