import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import ResumeWriting from "../../components/CVResumeWriting.js/ResumeWriting";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import ThingsToConsider from "../../components/CVResumeWriting.js/ThingsToConsider";
import GuideLines from "../../components/CVResumeWriting.js/GuideLines";
import Hero from "../../components/Hero";
import WhyCDR from "../../components/CVResumeWriting.js/WhyCDR";


const CVResumeWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>professional CV-Resume Writing services for Engineers Australia.</title>
        <meta name='description' content="Searching for Best cv-Resume Writing service provider in Australia? Our professional writers help you with Best Cv-Resume Report for Engineers Australia"/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Hero
        title="CV-Resume writing services for Engineers Australia"
        details="Grab your High-Quality CV-Resume Report today from CDR For Engineer Professional Writers."
      />
      <ResumeWriting />
      <CDRReportAccepted
        title="We CDR For Engineer known for Best CV Resume Writing to help each field of Engineers get the 100 % Approval outcome. 
"
        data="Contact us today for the Best Quality CV Resume Writing"
        buttonName="Contact Us"
        link="/contactus"
      />
      <ThingsToConsider />
      <CDRReportAccepted
        title="Interested in our Top-notch Services? Have a look at our affordable prices."
        data="We provide the best quality at the best and most affordable prices of CDR services under different 
        packages. You can select any exclusive plan as per your needs and requirements."
        buttonName="Check Pricing"
                link="/pricing"

      />
      <GuideLines />
      <WhyCDR />
    </div>
  );
};

export default CVResumeWriting;
