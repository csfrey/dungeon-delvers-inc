import { Box } from "@mui/material";
import HeroHeader from "../components/HeroHeader";
import LearnMore from "../components/LearnMore";
import kingdom from "../images/kingdom.png";
import { startPlayingGames } from "../constants";
import MediaQuery from "react-responsive";
import ActionButton from "../widgets/ActionButton";

const HomePage = () => {
  return (
    <Box>
      <HeroHeader
        image={kingdom}
        centerText="World-class adventuring parties on demand"
        action={<ActionButton href={startPlayingGames}>Book Now</ActionButton>}
      />
      <LearnMore />
    </Box>
  );
};

export default HomePage;
