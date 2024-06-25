import { Box } from "@mui/material";
import { fictionDisclaimer, richBlack } from "../constants";

const SiteFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: richBlack,
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "calc(8px + 0.2vw)",
        padding: "0.5vh 24vw",
      }}
    >
      {fictionDisclaimer}
    </Box>
  );
};

export default SiteFooter;
