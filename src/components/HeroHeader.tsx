import { Box } from "@mui/material";
import SiteHeader from "./SiteHeader";
import React, { ReactNode } from "react";

const HeroHeader = ({
  image,
  centerText,
  action,
}: {
  image: string;
  centerText: ReactNode;
  action: ReactNode;
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SiteHeader />
      <Box
        className="header-center"
        sx={{
          padding: "0 16vw",
          flexGrow: 1,
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          className="hero-text"
          sx={{
            textAlign: "center",
            alignContent: "center",
            fontSize: "calc(40px + 2vw)",
            cursor: "default",
            fontWeight: "bold",
          }}
        >
          {centerText}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {action}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroHeader;
