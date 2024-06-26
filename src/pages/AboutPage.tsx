import { Box } from "@mui/material";
import MeetTheTeam from "../components/MeetTheTeam";
import HeroHeader from "../components/HeroHeader";
import dragonFight from "../images/dragon_fight.png";
import ActionButton from "../widgets/ActionButton";
import { richBlack, startPlayingGames } from "../constants";
import FoundingDDI from "../components/FoundingDDI";
import Bio from "../components/Bio";
import kethrilStormcaller from "../images/kethril_stormcaller-square.jpg";
import Spacer from "../widgets/Spacer";

const AboutPage = () => {
  const spacing = "2vh";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeroHeader
        image={dragonFight}
        centerText="We fight for you"
        action={
          <ActionButton href={startPlayingGames}>Contact Us</ActionButton>
        }
      />
      <Spacer s={spacing} />
      <Box
        sx={{
          paddingBottom: "2vw",
          fontSize: "calc(40px + 1vw)",
          fontStyle: "italic",
          textAlign: "center",
          color: richBlack,
        }}
      >
        Meet Our Founder
      </Box>
      <Spacer s={spacing} />
      <Bio
        info={{
          name: "Kethril Stormcaller",
          pronouns: "he/him",
          title: "Chief Executive Officer",
          stats: "Half-Elf, Warlock 20 (Great Old One)",
          description:
            "Kethril is the CEO of Dungeon Delvers, Inc., and is responsible for setting the company's strategy and vision. He is a charismatic and enigmatic leader, and his employees both respect and fear him. In addition, he has made a pact with a powerful entity from beyond the stars, and uses his eldritch powers to achieve his goals.",
          image: kethrilStormcaller,
        }}
        imageOnLeft
      />
      <Spacer s="8vw" />
      <FoundingDDI />
      <Spacer s="8vw" />
      <MeetTheTeam />
      <Spacer s={spacing} />
    </Box>
  );
};

export default AboutPage;
