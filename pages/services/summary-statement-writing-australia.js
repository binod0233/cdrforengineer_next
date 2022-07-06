import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'

import WhatIsSummary from "../../components/SummaryStatementWriting/WhatIsSummary";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import ImportantElement from "../../components/SummaryStatementWriting/ImportantElement";
import TopNotchTips from "../../components/SummaryStatementWriting/TopNotchTips";
import WhyChooseCdr from "../../components/SummaryStatementWriting/WhyChooseCdr";
import Hero from "../../components/Hero";

const SummaryEpisodeWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
     
    <Head>
      <title>Complete Best Summary Statement Writing for Engineers Australia63,156534,9154Stage</title>
      <meta name='description' content='Our Professional CDR Report writers help you with Best Summary Statement Writing Services to showcase your all skills, qualifications in MSA Format by EA .'/>
      <link rel="canonical" href={canonicalUrl} />

    </Head>
      <Hero
        title="Summary Statement Writing 
        for Engineers Australia   "
        details="Our professional writers will help you with writing a High-quality 
        summary statement Report at Affordable prices."
      />
      <WhatIsSummary />
      <CDRReportAccepted
        title="Are you looking for a professional Summary Statement Report writer?"
        data="Career Episodes in a perfect essay format show that you have applied knowledge and skills for your nominated field so you 
need to choose your career episode topics perfectly by keeping all the guidelines and success rate in mind. In simple terms 
career episode is the real meat of CDR. writing is an art and when it comes, to writing career episodes that art has to be the best 
and high quality. That is why you need the help of experienced writers from an engineering background. if we talk about you this is 
a tough job and you need to juggle more to complete career episode writing but not for Expert’s writers. "
        buttonName="Check Pricing"
        link="/pricing"
      />
      <ImportantElement />
      <TopNotchTips />
      <WhyChooseCdr />
    </div>
  );
};

export default SummaryEpisodeWriting;
