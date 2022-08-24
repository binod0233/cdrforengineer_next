import Head from "next/head";
import OurReports from "../components/Home/OurReports";
import CDRReport from "../components/Home/CDRReport";
import EngineersTakeHelp from "../components/Home/EngineersTakeHelp";
import FrequentlyAsked from "../components/Home/FrequentlyAsked";
import GetYourCDR from "../components/Home/GetYourCDR";
import Hero from "../components/Hero";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import parse from "html-react-parser";

export default function Home({ landingRes }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  console.log(landingRes);
  const { hero, seo } = landingRes;

  return (
    <div>
      {/* <Head>
        <title>CDR For Engineer</title>
        <meta name="description" content="A CDR For Engineer website" />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}

      <Seo seo={seo} />
      <Hero
        title={hero?.title}
        details={hero?.paragraph && parse(hero.paragraph)}
      />
      <OurReports data={landingRes} />
      <CDRReport data={landingRes} />
      <EngineersTakeHelp data={landingRes} />

      <FrequentlyAsked data={landingRes} />
      <GetYourCDR data={landingRes} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const landing = await fetch(NEXT_STRAPI_API_URL + "landing?populate=deep");

  const landingRes = await landing.json();

  return {
    props: {
      landingRes: landingRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};
