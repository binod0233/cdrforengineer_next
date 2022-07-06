import React from "react";
import Head from "next/head";
import {useRouter} from 'next/router'
import Hero from "../../components/Hero";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import FreeDownload from "../../components/Samples/FreeDownload";
import HighQualityCDRSamples from "../../components/Samples/HighQualityCDRSamples";
import HowHelps from "../../components/Samples/HowHelps";
import SamplesForEngineers from "../../components/Samples/SamplesForEngineers";
import WhyRely from "../../components/Samples/WhyRely";

const Samples = () => {
  const router = useRouter()

  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>CDR Samples</title>
        <meta name='description' content='Download cdr report samples'/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Hero
        title="Engineers Australia approved 
CDR samples for Engineers."
        details="Your professional assistance for CDR report in Migration Skills 
Assessment from Engineers Australia. Speak with our experts 
to avoid possible rejections."
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
    </div>
  );
};

export default Samples;
