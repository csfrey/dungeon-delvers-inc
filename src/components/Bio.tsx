import { Box } from "@mui/material";
import { TeamBio } from "../types";
import { richBlack, vanilla } from "../constants";
import Spacer from "../widgets/Spacer";

const Bio = ({
  info,
  imageOnLeft,
}: {
  info: TeamBio;
  imageOnLeft: boolean;
}) => {
  const { name, pronouns, title, stats, description, image } = info;

  const spacing = "18px";

  const NameAndPronouns = () => (
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
  );

  const Title = () => (
    <Box
      sx={{
        fontSize: "calc(15px + 0.5vw)",
      }}
    >
      {title}
    </Box>
  );

  const Stats = () => (
    <Box
      sx={{
        fontStyle: "italic",
        marginBottom: "1vh",
      }}
    >
      {stats}
    </Box>
  );

  const Description = () => (
    <Box
      sx={{
        textAlign: "justify",
      }}
    >
      {description}
    </Box>
  );

  const HeadShot = () => (
    <img
      style={{
        width: "35%",
        height: "auto",
        objectFit: "cover",
      }}
      src={image}
    />
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        color: richBlack,
      }}
    >
      {imageOnLeft ? <HeadShot /> : null}
      <Box
        className="text-stuff"
        sx={{
          width: "35%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NameAndPronouns />
        <Spacer s={spacing} />
        <Title />
        <Spacer s={spacing} />
        <Stats />
        <Spacer s={spacing} />
        <Description />
      </Box>
      {!imageOnLeft ? <HeadShot /> : null}
    </Box>
  );
};

export default Bio;
