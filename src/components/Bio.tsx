import { Box } from "@mui/material";
import { TeamBio } from "../types";
import { vanilla } from "../constants";

const Bio = ({
  info,
  imageOnLeft,
}: {
  info: TeamBio;
  imageOnLeft: boolean;
}) => {
  const image = (
    <img
      style={{
        width: "16vw",
        height: "16vw",
      }}
      src={info.image}
    />
  );
  const { name, pronouns, title, stats, description } = info;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {imageOnLeft ? image : null}
      <Box
        sx={{
          padding: "1vw",
          margin: "0 1vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              fontSize: "calc(20px + 1vw)",
              fontStyle: "bold",
              marginRight: "0.7vw",
            }}
          >
            {name}
          </Box>
          <Box
            sx={{
              alignContent: "center",
              fontSize: "calc(10px + 0.5vw)",
            }}
          >
            ({pronouns})
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "calc(15px + 0.5vw)",
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            fontStyle: "italic",
            marginBottom: "1vh",
          }}
        >
          {stats}
        </Box>
        <Box
          sx={{
            textAlign: "justify",
          }}
        >
          {description}
        </Box>
      </Box>
      {!imageOnLeft ? image : null}
    </Box>
  );
};

export default Bio;
