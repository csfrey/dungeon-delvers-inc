import { Box, Button } from "@mui/material";
import hero from "../images/hero.png";
import { richBlack, startPlayingGames, vanilla } from "../constants";

const SiteHeader = () => {
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
          <Box
            className="title-container"
            sx={{
              padding: "0.5vw",
            }}
          >
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
          </Box>
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
          World-class adventuring parties to meet your needs
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
            }}
            variant="contained"
            size="large"
            href={startPlayingGames}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SiteHeader;
