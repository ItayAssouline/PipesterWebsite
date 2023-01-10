import Bagles from "../assets/images/temp/Bagles.png";
import GirlsEating from "../assets/images/temp/GirlsEating.png";
import Machine from "../assets/images/temp/Machine.png";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PipesterIllustration from "../components/PipesterIllustration/PipesterIllustration";
import { pipesterColors } from "../theme/colors";

import { HomeAllAbout, HomeHero } from "../layout/home/";
import styles from "../styles/Home.module.css";
import HomeCallToActions from "../layout/home/HomeCallToActions/HomeCallToActions";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <HomeAllAbout />
      <HomeCallToActions />
      <Footer />
    </>
  );
}
