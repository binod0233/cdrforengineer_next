import Head from 'next/head' 
import {useRouter} from 'next/router'
import Advantages from "../../components/CareerEpisodeWriting.js/Advantages";
import AustraliaGuarantees from "../../components/CareerEpisodeWriting.js/AustraliaGuarantees";
import HighQualityCareer from "../../components/CareerEpisodeWriting.js/HighQualityCareer";
import WhatIsCareerEpisode from "../../components/CareerEpisodeWriting.js/WhatIsCareerEpisode";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import Hero from "../../components/Hero";

const CareerEpisodeWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>CDR Three Career Episode Report Writing for Engineers Australia</title>
        <meta name='description' content="Get your Three Career Episode Report  for CDR migration skill Assesment for Engineers Australia from Our Professional writers of Enginnering Backgrounds."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
     
      <Hero
        title="Career Episode Writing Help 
for Engineers Australia"
        details="Craft your High-Quality Three career Episode Report from our 
professional writers for CDR skill Assessment "
      />
      <WhatIsCareerEpisode />
      <CDRReportAccepted
        title="Are you looking for a professional career episode writer?"
        data="Career Episodes in an ideal essay format indicate that you have put your knowledge and skills into your chosen sector; thus, you must carefully select your career episode subjects while  keeping  all  of  the  standards  and  success  rate  in  mind. In  a  nutshell, the  career episode is the heart of CDR. A writer with an engineering background creates report in a specified format including all  elements  of  Career  Episodes.Writing  Career  Episodes  on  your  own  is  challenging, you'll have to juggle more to conclude your career episode writing. With the necessity for a  career  episode  writer  in  mind,  CDR For Engineer  provides  Australia's  best  Career  episode writing service, with a 100% approval rate. "
        buttonName="Check Pricing"
        link="/pricing"
      />
      <HighQualityCareer />
      <Advantages /> 
      <AustraliaGuarantees />
    </div>
  );
};

export default CareerEpisodeWriting;
