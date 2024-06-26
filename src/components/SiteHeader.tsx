import { Menu } from "@mui/icons-material";
import { Box, Drawer, List, ListItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import MediaQuery from "react-responsive";
import HeaderButton from "../widgets/HeaderButton";
import { richBlack, vanilla } from "../constants";

const Title = () => (
  <Box
    className="title-container"
    sx={{
      padding: "0.5vw",
    }}
  >
    <MediaQuery minWidth={720}>
      <Box
        sx={{
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/")}
      >
        <Box
          className="title"
          sx={{
            fontSize: "calc(30px + 1vw)",
            textAlign: "center",
            fontWeight: "bold",
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

const headerButtons = (
  <React.Fragment>
    <HeaderButton href="/about" text="About" />
  </React.Fragment>
);

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    return () => {
      setOpen(newOpen);
    };
  }

  return (
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
        <Title />
      </Box>
      <Box
        className="header-top-center"
        sx={{
          flexGrow: 1,
        }}
      ></Box>
      <Box className="header-top-right">
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: "100%",
          }}
        >
          <MediaQuery minWidth={720}>{headerButtons}</MediaQuery>
          <MediaQuery maxWidth={719}>
            <ListItem>
              <Menu onClick={toggleDrawer(true)} />
            </ListItem>
          </MediaQuery>
        </List>
      </Box>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            backgroundColor: vanilla,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List sx={{ color: richBlack }}>{headerButtons}</List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SiteHeader;
