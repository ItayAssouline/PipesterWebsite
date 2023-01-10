import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { HomeAllAbout, HomeHero, HomeCallToActions } from "../layout/home/";

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
