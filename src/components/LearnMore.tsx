import { Box, Button } from "@mui/material";
import { learnMore, richBlack } from "../constants";
import kyraDane3x5 from "../images/kyra_dane-3x5.jpeg";
import kyraDane16x9 from "../images/kyra_dane-16x9.jpeg";
import MediaQuery from "react-responsive";
import React from "react";

const minWidth = 1160;

const LearnMoreTitle = () => (
  <Box
    className="learn-more-title"
    sx={{
      fontSize: "calc(30px + 2vw)",
    }}
  >
    We're here to solve your problems
  </Box>
);

const LearnMoreText = () => <Box>{learnMore}</Box>;

const LearnMoreButton = () => (
  <Box>
    <Button variant="contained">Learn More</Button>
  </Box>
);

const PortraitImage = () => (
  <Box>
    <img
      src={kyraDane3x5}
      style={{
        width: "100%",
        objectFit: "cover",
      }}
      alt="Kyra Dane, Health and Safety Coordinator"
    />
    <Box
      className="image-caption"
      sx={{
        fontStyle: "italic",
      }}
    >
      Kyra Dane - Health and Safety Coordinator
    </Box>
  </Box>
);

const LandscapeImage = () => (
  <Box>
    <img
      src={kyraDane16x9}
      style={{
        width: "80%",
        objectFit: "cover",
      }}
      alt="Kyra Dane, Health and Safety Coordinator"
    />
    <Box
      className="image-caption"
      sx={{
        fontStyle: "italic",
      }}
    >
      Kyra Dane - Health and Safety Coordinator
    </Box>
  </Box>
);

const Spacer = () => (
  <Box
    sx={{
      flex: "0 0 18px",
    }}
  ></Box>
);

const LearnMore = () => {
  return (
    <Box
      sx={{
        color: richBlack,
      }}
    >
      <MediaQuery minWidth={minWidth}>
        <Box
          className="learn-more-section"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "4vw 0",
          }}
        >
          <Box
            className="learn-more-left"
            sx={{
              width: "35%",
              padding: "20vh 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <LearnMoreTitle />
            <Spacer />
            <LearnMoreText />
            <Spacer />
            <LearnMoreButton />
          </Box>
          <Box
            className="learn-more-right"
            sx={{
              width: "35%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <PortraitImage />
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery maxWidth={minWidth - 1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
            padding: "4vw 14vw",
          }}
        >
          <LearnMoreTitle />
          <Spacer />
          <LandscapeImage />
          <Spacer />
          <LearnMoreText />
          <Spacer />
          <LearnMoreButton />
        </Box>
      </MediaQuery>
    </Box>
  );
};

export default LearnMore;
