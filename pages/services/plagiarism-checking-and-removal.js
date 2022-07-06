import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import ExploreBenefits from "../../components/CDRPlagarism/ExploreBenefits";
import PlagarismChecking from "../../components/CDRPlagarism/PlagarismChecking";
import WhyCDR from "../../components/CDRPlagarism/WhyCDR";
import Steps from "../../components/CDRWriting/Steps";
import Hero from "../../components/Hero";

const CDRPlagarismCheckingAndRemoval = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
     
      <Head>
        <title>CDR Plagiarism Checking and Removal services in Australia.</title>
        <meta name='description' content="Want 100 % Approval from EA? our Best CDR Plagiarism Checking & Removal services in Australia save you from CDR Rejected due to plagiarism"/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>

      <Hero
        title="CDR plagiarism checking & Removal for EA"
        details="Worry about CDR being rejected due to plagiarism! Get your High-Quality original CDR Report at Affordable prices."
      />

      <PlagarismChecking />
      <ExploreBenefits />
      <Steps
        tabItem={[
          {
            description: `To avoid a blatant rejection from Engineers Australia, trustworthy service providers utilize multiple plagiarism detection methods 
          and software to check every content of the CDR report (EA).`,
            title: "Multilevel checking",
          },
          {
            description: `All plagiarized content can be easily detected utilizing advanced software for CDR Report plagiarism testing and removal.`,
            title: "Advanced Software",
          },
          {
            description: `If you request help from a reputable and trustworthy service provider, they will present you with an electronic report of plagiarized 
          information found in your CDR report.`,
            title: "Provide Electronic Service",
          },
          {
            description: `Best CDR plagiarism checking and Removal service provider in Australia is established to provide help and guidance for writing 
          a high-quality CDR report and if you are worried about your CDR Report then you can contact the Top CDR plagiarism checking 
          and Removal service provider in Australia.`,
            title: "Proper Guidance",
          },
        ]}
      />
      <WhyCDR />
    </div>
  );
};

export default CDRPlagarismCheckingAndRemoval;
