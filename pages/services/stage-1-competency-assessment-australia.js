import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import BestCdrWriting from "../../components/Stage1/BestCdrWriting";
import CDRWants from "../../components/Stage1/CDRWants";
import RelyOn from "../../components/Stage1/RelyOn";
import WhyCdrExpertsForStage1 from "../../components/Stage1/WhyCdrExpertsForStage1";
import Hero from "../../components/Hero";

const Stage1CompetencyAssessment = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
    
 <Head>
        <title>Stage 1 Competency Assessment Help service provider in Australia</title>
        <meta name='description' content="Are you ready to obtain 100 % Approval from Engineers Australia? Top leading service provider Helps you with High-Quality Stage 1 Competency Assessment."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Hero
        title="Engineers Australia CDR Stage1
Competency Assessment"
        details="Grab our Top-notch services from professional writers for your 
Stage 1 Competency Assessment Report."
      />
      <h1
        className="stage1Heading"
        style={{
          fontSize: "34px",
          fontFamily: "Cambria",
          color: "#370C64",
          fontWeight: "700",
          marginTop: "50px",
          padding: "0 100px",
        }}
      >
        Stage 1 Competency Assessment
      </h1>
      <RelyOn />
      <CDRReportAccepted
        title="We CDR For Engineer known for Best Quality CDR writing and reviewing service 
agency strive to help each field of engineers get the 100 % Approval outcome. 
"
        data="Contact us today for the Best Quality consultation.
"
        buttonName="Contact Us"
        link="/contactus"
      />
      <CDRWants />
      <WhyCdrExpertsForStage1 />
      <BestCdrWriting />
    </div>
  );
};

export default Stage1CompetencyAssessment;
