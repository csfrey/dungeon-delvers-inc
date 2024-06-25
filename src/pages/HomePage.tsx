import { Box } from "@mui/material";
import HeroHeader from "../components/HeroHeader";
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
