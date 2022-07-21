import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "../../components/Hero";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import FreeDownload from "../../components/Samples/FreeDownload";
import HighQualityCDRSamples from "../../components/Samples/HighQualityCDRSamples";
import HowHelps from "../../components/Samples/HowHelps";
import SamplesForEngineers from "../../components/Samples/SamplesForEngineers";
import WhyRely from "../../components/Samples/WhyRely";
import parse from "html-react-parser";
const Samples = ({ sampleDataRes }) => {
  const router = useRouter();

  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  console.log("canonicalUrl");

  console.log("sampleDataRes", sampleDataRes);
  // const { hero } = sampleDataRes;

  return (
    <>
      {parse(sampleDataRes.data[0].attributes.body)}
      {/* <div>
      <Head>
        <title>CDR Samples</title>
        <meta name="description" content="Download cdr report samples" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Hero
        title={hero?.title}
        details={hero?.paragraph ? parse(hero.paragraph) : ""}
      />
      <SamplesForEngineers />
      <CDRReportAccepted
        title="You deserve the best CDR results,  so get started with us"
        buttonName="Contact Us"
        data="All our professional and premium quality report samples for each and every category of the available 
Engineering professions are given below."
      />
      <HighQualityCDRSamples />
      <CDRReportAccepted
        title="CDR For Engineer is always Near to you for all Your CDR Report Queries."
        buttonName="Chat With Us"
        data="CDR For Engineer is known as one of the Top and best CDR writing service provider in Australia. To get help, connect 
        with us and we with our Expert Experienced CDR writers are always there to help you at any time."
      />
      <HowHelps />
      <WhyRely />
      <FreeDownload />
    </div> */}
    </>
  );
};

export async function getStaticProps({ params }) {
  const { NEXT_STRAPI_API_URL } = process.env;

  // const sample = await fetch(NEXT_STRAPI_API_URL + "cdr-sample?populate=deep");
  const sample = await fetch("http://localhost:1337/api/articles");

  const sampleData = await sample.json();

  return {
    props: {
      // sampleDataRes: sampleData.data ? sampleData?.data?.attributes : "",
      sampleDataRes: sampleData,
    },
    revalidate: 1,
  };
}

export default Samples;
