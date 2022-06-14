import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Kaushan Script",
    body1: {
      fontSize: 18,
      fontWeight: 300,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100vh",
          overflow: "hidden",
          fontFamily: "Kaushan Script",
        },
        body: {
          minHeight: "100vh",
        },
      },
    },
  },
});
