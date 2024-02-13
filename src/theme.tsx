import { createTheme } from "@mui/material";

export function useThemeOptions() {
  const theme = createTheme({
    palette: {},
  });
  return theme;
}
