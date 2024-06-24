import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import { StickyContainer } from "react-sticky";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Garamond",
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Box></Box>,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            color: "white",
            fontFamily: "Garamond",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <SiteHeader />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <RouterProvider router={router} />
          </Box>
          <Box>
            <SiteFooter />
          </Box>
        </Box>
      </StickyContainer>
    </ThemeProvider>
  );
}

export default App;
