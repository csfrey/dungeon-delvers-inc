import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import { richBlack, vanilla } from "./constants";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Garamond",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "contained" &&
              ownerState.color === "primary" && {
                backgroundColor: vanilla,
                color: richBlack,
              }),
          }),
        },
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "hsl(52, 62%, 92%)",
          color: "white",
          fontFamily: "Garamond",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RouterProvider router={router} />
        <Box>
          <SiteFooter />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
