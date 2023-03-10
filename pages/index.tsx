import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { HomeAllAbout, HomeCallToActions, HomeHero } from "../layout/home/";
import { HomeAboutProps } from "../layout/home/HomeAllAbout/HomeAllAbout";
import { CallToActionsProps } from "../layout/home/HomeCallToActions/HomeCallToActions";
import { HomeHeroProps } from "../layout/home/HomeHero/HomeHero";
import { pipesterColors } from "../theme/colors";
import apiClient from "../utils/apiClient";

const HomeColor = pipesterColors.blue;
export default function Home(props: HomeStaticData) {
  return (
    <>
      <Head>
        <title>Pipester</title>
        <meta
          name="description"
          content="Indulge in a unique snacking experience with Pipester Chocolate Factory! Our vending machines serve premium chocolate desserts and a visually stunning robotic show. Perfect for a quick snack or for capturing that epic moment you've always dreamed of."
        ></meta>
      </Head>
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
  const get = await apiClient.get("products?populate=deep");
  console.log(get.data);

  const homepageGet = (await apiClient.get("homepage?populate=deep")).data;

  const { Hero, about, CallToActions } = homepageGet.data.attributes;

  const HomeHeroProps: HomeHeroProps = {
    image: Hero.heroImage.data.attributes.url,
    heroTitle: Hero.heroTitle,
    heroText: Hero.heroText,
    videoButtonText: Hero.videoButtonText,
    buzzwords: Hero.buzzwords,
    videoModalContentUrl: Hero.videoModalContentUrl,
  };

  const HomeAboutProps: HomeAboutProps = {
    title: about.Title,
    paragraph: about.Paragraph,
  };

  const CallToActionsProps: CallToActionsProps = {
    callToActions: CallToActions.CallToActionCards.map((cta: any) => {
      return {
        ...cta,
        backgroundImage: cta.backgroundImage.data.attributes.url,
      };
    }),
  };
  return {
    props: { HomeHeroProps, HomeAboutProps, CallToActionsProps },
  };
};
