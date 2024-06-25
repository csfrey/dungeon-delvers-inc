import { Box, Button } from "@mui/material";
import HeroHeader from "../components/HeroHeader";
import { loremipsum, richBlack } from "../constants";
import LearnMore from "../components/LearnMore";

const HomePage = () => {
  return (
    <Box>
      <Box>
        <HeroHeader />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <LearnMore />
      </Box>
    </Box>
  );
};

export default HomePage;
