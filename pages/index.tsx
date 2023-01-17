import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PipesterIllustration from "../components/PipesterIllustration/PipesterIllustration";
import { HomeAllAbout, HomeCallToActions, HomeHero } from "../layout/home/";
import { pipesterColors } from "../theme/colors";

const HomeColor = pipesterColors.blue;
export default function Home() {
  return (
    <>
      <NavBar color={HomeColor} />
      <HomeHero />
      <PipesterIllustration color={pipesterColors.blue} />
      <HomeAllAbout />
      <HomeCallToActions />
      <Footer />
    </>
  );
}
