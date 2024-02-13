import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { useThemeOptions } from "./theme";

function App() {
  return <ThemeProvider theme={useThemeOptions()}>TEST</ThemeProvider>;
}

export default App;
