import { Box, Button } from "@mui/material";
import hero from "../images/hero.png";
import { richBlack, startPlayingGames, vanilla } from "../constants";
import MediaQuery from "react-responsive";

const HeroHeader = () => {
  const titleContainer = (
    <Box
      className="title-container"
      sx={{
        padding: "0.5vw",
      }}
    >
      <MediaQuery minWidth={720}>
        <Box
          className="title"
          sx={{
            fontSize: "calc(30px + 1vw)",
            textAlign: "center",
          }}
        >
          DUNGEON DELVERS, INC.
        </Box>
        <Box
          className="subtitle"
          sx={{
            fontSize: "calc(10px + 1vw)",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Excellence In Adventuring
        </Box>
      </MediaQuery>
      <MediaQuery maxWidth={719}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            className="title-abbr"
            sx={{
              fontSize: "calc(40px + 1vw)",
              textAlign: "center",
              marginRight: "2vw",
            }}
          >
            DDI
          </Box>
          <Box
            className="subtitle-inline"
            textAlign="center"
            fontStyle="italic"
            alignContent="center"
          >
            Excellence in Adventuring
          </Box>
        </Box>
      </MediaQuery>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        className="header-top"
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        <Box
          className="header-top-left"
          sx={{
            padding: "1.8vw",
          }}
        >
          {titleContainer}
        </Box>
        <Box
          className="header-top-center"
          sx={{
            flexGrow: 1,
          }}
        ></Box>
        <Box className="header-top-right"></Box>
      </Box>
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
          }}
        >
          <MediaQuery minWidth={1192}>
            World-class adventuring parties <br />
            on demand
          </MediaQuery>
          <MediaQuery maxWidth={1191}>
            World-class adventuring parties on demand
          </MediaQuery>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              marginTop: "2vw",
              backgroundColor: vanilla,
              color: richBlack,
              padding: "1.5vw 2vw",
            }}
            variant="contained"
            href={startPlayingGames}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroHeader;
