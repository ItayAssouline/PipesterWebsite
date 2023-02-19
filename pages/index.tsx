import axios from "axios";
import { GetServerSideProps } from "next";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { HomeAllAbout, HomeCallToActions, HomeHero } from "../layout/home/";
import { HomeAboutProps } from "../layout/home/HomeAllAbout/HomeAllAbout";
import { CallToActionsProps } from "../layout/home/HomeCallToActions/HomeCallToActions";
import { HomeHeroProps } from "../layout/home/HomeHero/HomeHero";
import { pipesterColors } from "../theme/colors";

const HomeColor = pipesterColors.blue;
export default function Home(props: HomeStaticData) {
  return (
    <>
      <NavBar color={HomeColor} />
      <HomeHero {...props.HomeHeroProps} />
      <HomeAllAbout {...props.HomeAboutProps} />
      <HomeCallToActions {...props.CallToActionsProps} />
      <Footer />
    </>
  );
}

interface HomeStaticData {
  HomeHeroProps: HomeHeroProps;
  HomeAboutProps: HomeAboutProps;
  CallToActionsProps: CallToActionsProps;
}

export const getServerSideProps: GetServerSideProps<HomeStaticData> = async (
  context
) => {
  const homepageGet = (
    await axios.get("http://127.0.0.1:1337/api/homepage?populate=deep", {
      headers: {
        Authorization:
          "Bearer 699e8b1ad21e526c58c3f77e6a662b437f4192faefefb90044f616c5c09ed8f25272d55674b118247c10d0c16852e52c5d5fb811c83a4249b13db79ac5395adc1a2578f46343b04e947ebac87e3b630489fb24c51a51e3ef0cba9b69bc9bc24bda1513df241cb57d6a3167899e92812ea635007a254b0f22dd1568fc82890bc3",
      },
    })
  ).data;

  const { Hero, about, CallToActions } = homepageGet.data.attributes;

  const HomeHeroProps: HomeHeroProps = {
    image: `http://127.0.0.1:1337${Hero.heroImage.data.attributes.url}`,
    heroTitle: Hero.heroTitle,
    heroText: Hero.heroText,
    videoButtonText: Hero.videoButtonText,
    buzzwords: Hero.buzzwords,
  };

  const HomeAboutProps: HomeAboutProps = {
    title: about.Title,
    paragraph: about.Paragraph,
  };

  const CallToActionsProps: CallToActionsProps = {
    callToActions: CallToActions.CallToActionCards.map((cta: any) => {
      return {
        ...cta,
        backgroundImage: `http://127.0.0.1:1337${cta.backgroundImage.data.attributes.url}`,
      };
    }),
  };
  return {
    props: { HomeHeroProps, HomeAboutProps, CallToActionsProps },
  };
};
