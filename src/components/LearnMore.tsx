import { Box, Button } from "@mui/material";
import { learnMore, richBlack } from "../constants";
import kyraDane3x5 from "../images/kyra_dane-3x5.jpeg";
import kyraDane16x9 from "../images/kyra_dane-16x9.jpeg";
import MediaQuery from "react-responsive";
import React from "react";
import ActionButton from "../widgets/ActionButton";
import Spacer from "../widgets/Spacer";

const breakpoint = 900;
const spacing = "18px";

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

const LearnMoreText = () => (
  <Box
    sx={{
      fontWeight: "bold",
    }}
  >
    {learnMore}
  </Box>
);

const LearnMoreButton = () => (
  <Box>
    <ActionButton href="/about">Learn More</ActionButton>
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

const LearnMore = () => {
  return (
    <Box
      sx={{
        color: richBlack,
      }}
    >
      <MediaQuery minWidth={breakpoint}>
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
            <Spacer s={spacing} />
            <LearnMoreText />
            <Spacer s={spacing} />
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
      <MediaQuery maxWidth={breakpoint - 1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
            padding: "4vw 10vw",
          }}
        >
          <LearnMoreTitle />
          <Spacer s={spacing} />
          <LandscapeImage />
          <Spacer s={spacing} />
          <LearnMoreText />
          <Spacer s={spacing} />
          <LearnMoreButton />
        </Box>
      </MediaQuery>
    </Box>
  );
};

export default LearnMore;
