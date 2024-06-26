import { Box } from "@mui/material";
import cityStreets from "../images/city_streets.png";
import { foundingText } from "../constants";

const FoundingDDI = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${cityStreets})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "90%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            margin: "4vw",
            padding: "1vw",
            fontWeight: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          {foundingText}
        </Box>
      </Box>
    </Box>
  );
};

export default FoundingDDI;
