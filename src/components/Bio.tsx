import { Box } from "@mui/material";
import { TeamBio } from "../types";

const Bio = ({
  info,
  imageOnLeft,
}: {
  info: TeamBio;
  imageOnLeft: boolean;
}) => {
  const image = <img src={info.image} />;
  const { name, pronouns, title, stats, description } = info;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "4vh",
      }}
    >
      {imageOnLeft ? image : null}
      <Box
        sx={{
          padding: "0 2vw",
        }}
      >
        <Box
          sx={{
            fontSize: "calc(20px + 1vw)",
            fontStyle: "bold",
          }}
        >
          {name} ({pronouns})
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
        <Box>{description}</Box>
      </Box>
      {!imageOnLeft ? image : null}
    </Box>
  );
};

export default Bio;
