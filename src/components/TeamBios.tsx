import { Box } from "@mui/material";
import { richBlack } from "../constants";
import { TeamBio } from "../types";
import altheaBlackwood from "../images/althea_blackwood.png";
import aventisMargeaux from "../images/aventis_margeaux.jpeg";
import droganIronfist from "../images/drogan_ironfist.jpeg";
import kethrilStormcaller from "../images/kethril_stormcaller.jpg";
import lirienSilverleaf from "../images/lirien_silverleaf.png";
import Bio from "./Bio";

const TeamBios = () => {
  const teamBios: Array<TeamBio> = [
    {
      name: "Kethril Stormcaller",
      pronouns: "he/him",
      title: "Chief Executive Officer",
      stats: "Half-Elf, Warlock 20 (Great Old One)",
      description:
        "Kethril is the CEO of Dungeon Delvers, Inc., and is responsible for setting the company's strategy and vision. He is a charismatic and enigmatic leader, and his employees both respect and fear him. In addition, he has made a pact with a powerful entity from beyond the stars, and uses his eldritch powers to achieve his goals.",
      image: kethrilStormcaller,
    },
    {
      name: "Althea Blackwood",
      pronouns: "she/her",
      title: "Chief Financial Officer",
      stats: "Human, Rogue 15 (Mastermind)",
      description:
        "Althea is the mastermind behind Dungeon Delvers' financial success. She is a shrewd negotiator and skilled accountant, and knows how to make the most of the company's resources.",
      image: altheaBlackwood,
    },
    {
      name: "Drogan Ironfist",
      pronouns: "he/him",
      title: "Chief Security Officer",
      stats: "Dwarf, Paladin 12 (Oath of Devotion)",
      description:
        "Drogan is in charge of keeping Dungeon Delvers' employees and assets safe from harm. He is a skilled warrior and devoted follower of his god, using his powers to protect those in need. He takes his duties very seriously, and will not hesitate to take on any threat to the company.",
      image: droganIronfist,
    },
    {
      name: "Aventis Margeaux",
      pronouns: "they/she",
      title: "Chief Operations Officer / Director",
      stats: "Tiefling, Bard 17 (College of Whispers)",
      description:
        "As the COO of Dungeon Delvers, Inc., Aventis is responsible for overseeing all aspects of the company's day-to-day operations, and is known for her no- nonsense approach and unwavering commitment to success. She is a skilled diplomat and negotiator, using her charm and charisma to forge alliances and broker deals.",
      image: aventisMargeaux,
    },
    {
      name: "Lirien Silverleaf",
      pronouns: "they/them",
      title: "Chief Technology Officer",
      stats: "Human, Artificer 18 (Battlesmith)",
      description:
        "Lirien is a master of magical technology, and is responsible for developing the company's cutting-edge tools and equipment. She is highly innovative and creative, and is known for her ability to turn even the wildest ideas into practical applications.",
      image: lirienSilverleaf,
    },
  ];

  return (
    <Box
      sx={{
        padding: "2vh 8vw 0 8vw",
        color: richBlack,
      }}
    >
      <Box
        sx={{
          fontSize: "calc(30px + 1vw)",
          fontStyle: "italic",
        }}
      >
        Meet Our Team
      </Box>
      {teamBios.map((bio, i) => (
        <Bio info={bio} imageOnLeft={i % 2 === 0} />
      ))}
    </Box>
  );
};

export default TeamBios;
