import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import AustraliaGuarantees from "../../components/CDRWriting/AustraliaGuarantees";
import CDRAssessmentsComponent from "../../components/CDRWriting/CDRAssessmentsComponent";
import MoreServices from "../../components/CDRWriting/MoreServices";
import CDRReportWriting from "../../components/CDRWriting/CdrReportWriting";
import Steps from "../../components/CDRWriting/Steps";
import StepsBeforeHiring from "../../components/CDRWriting/StepsBeforeHiring";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import Hero from "../../components/Hero";


const CDRWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <>
        <Head>
        <title>High-Quality CDR Report Writing Service for Engineers Australia</title>
        <meta name='description' content="Engineering Applicants seeking the best service provider for CDR Writing? Grab your high-quality CDR Report to get 100 % Approval from Engineers Australia."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Hero
        title="Don’t worry About CDR 
Report Rejection"
        details="Get help from Our professional writers for 100 % Approval 
CDR Report"
      />
      <CDRReportWriting />
      <Steps
        tabItem={[
          {
            description: `Once you finish writing the Career Episodes, their corresponding CPD
          and summary statements have to be revised or reviewed to make sure
          there aren’t any mistakes. You should revisit all the documents and
          see if all the technical parts are included or not. Also, to
          maintain the quality of language, check the grammatical mistakes and
          spelling errors thoroughly.`,
            title: "01. Read Guidelines",
          },
          {
            description: `After you check the guidelines and get information from them regarding CDR preparation, projects to consider, and other 
          technicalities in the CDR, it is time to make the plan and strategy for further work.`,
            title: "02. Developing a Strategy",
          },
          {
            description: `You should start writing after you choose three projects for the base of your three Career Episodes. This part is essential and crucial. You 
          should have excellent writing skills and the right knowledge of the content you are supposed to describe in the CDR Report. You 
          should be wise while writing and decide what to keep and what to leave. The essential technical details must not be left 
          out, including figures, simple calculations, etc. and other information that isn’t critical need to be left out. The 
          Engineers Australia have set the word limit for career episodes, so be tactful in writing and including all 
          the crucial details in it. At this point, hiring a professional would be a great idea.`,
            title: "03. Start Writing",
          },
          {
            description: `Once you finish writing the Career Episodes, their corresponding CPD and summary statements have to be revised or reviewed 
          to make sure there aren’t any mistakes. You should revisit all the documents and see if all the technical parts are included or 
           not. Also, to maintain the quality of language, check the grammatical mistakes and spelling errors thoroughly.`,
            title: "04. Revise and Reflect",
          },
          {
            description: `After the effort of preparing the CDR with maintaining all the guidelines and techniques, there might be some mistakes and errors which 
         will not make an excellent impression to EA evaluators. Therefore you need to seek advice and suggestions about the quality of the 
         CDR you have prepared by the professionals. Since you don’t have any idea about how it is goingto be assessed by EA, it is an 
         excellent initiative to have someone else take a look at it, note down the points that can be improved, and tell you accordingly 
         about it. CDRReportWriters.com can be the best option for taking advice about your CDR. They provide high-quality CDR 
         writing services along with CDR reviewing and plagiarism checking service.`,
            title: "05. Look for Advisors",
          },
        ]}
      />
      <StepsBeforeHiring />
      <AustraliaGuarantees />
      <CDRReportAccepted
        title="Are you looking for professional help for your CDR Report?"
        data="Get a complete package of professional CDR Report with a guaranteed positive assessment. You can get a free consultation with our experts."
        buttonName="Get Free Consultation"
      />
      <CDRAssessmentsComponent />
      <MoreServices />
    </>
  );
};

export default CDRWriting;
