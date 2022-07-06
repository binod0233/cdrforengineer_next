import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import CompetencyAssessment from "../../components/Stage2/CompetencyAssessment";
import DocumentsForStage2 from "../../components/Stage2/DocumentsForStage2";
import EngineerStatus from "../../components/Stage2/EngineerStatus";
import Stage2Standards from "../../components/Stage2/Stage2Standards";
import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";

const Stage2CompetencyAssessment = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Hero
        title="Engineers Australia CDR Stage2
Competency Assessment"
        details="Get our Top-notch services from professional writers for your 
Stage 2 Competency Assessment Report"
      />
       <Head>
        <title>Stage 2 Competency Assessment Help service provider in Australia</title>
        <meta name='description' content="Are you ready to obtain 100 % Approval from Engineers Australia? Top leading service provider Helps you with High-Quality Stage 2 Competency Assessment."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
<Container>
<h1
        className="stage1Heading" 
        style={{
          fontSize: "34px",
          fontFamily: "Cambria",
          color: "#370C64",
          fontWeight: "700",
          marginTop: "50px",
        }}
      >
        Stage 2 Competency Assessment
      </h1>
</Container>
      
      <CompetencyAssessment />
      <CDRReportAccepted
        title="Trust Us and Get Chartered Engineer Status"
        data="Are you planning to go to Australia for a better opportunity through a skill Assessment immigration visa and seeking the 
help of someone to help you?  Then contact us for your queries and help. We are known as Best Stage 2 Competency 
Assessment consultant in Australia and we provide free consultation services for our clients. Our 1000+ clients are 
getting a 100 % Approval Rate at a minimum price. "
        buttonName="Check Pricing"
        link="/pricing"
      />
      <DocumentsForStage2 />
      <EngineerStatus />
      <CDRReportAccepted
        title="To know more about how the CDR Reviewing service provider in Australia can help you get instant help from our professional writers "
        data="We CDR For Engineer known as the Best Stage 2 Competency Assessment consultant assure you to guide you through the 
        whole process so your Assessment can go on smoothly without any hindrance. For that, we have our Top 
        professional Stage 2 Competency Assessment Expert writers in the field of preparing such report.
        "
        buttonName="Contact Us"
        link="/contactus"
      />
      <Stage2Standards />
    </div>
  );
};

export default Stage2CompetencyAssessment;
