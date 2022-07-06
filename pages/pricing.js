import React from "react";
import Head from 'next/head'
import FrequentlyAsked from "../components/Prices/FrequentlyAsked";
import FeaturesPricing from "../components/Prices/FeaturesPricing";
import ReportPrices from "../components/Prices/ReportPrices";
import CDRReportAccepted from "../components/Home/CDRReportAccepted";
import FeelingCurious from "../components/Prices/FeelingCurious";
import {useRouter} from 'next/router'


const Pricing = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
    
<Head>
        <title>Pricing | CDR For Engineer</title>
        <meta name="description" content="Pricing | CDR For Engineer" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      {/* <Hero
        title="Check our Excellent Pricing 
on Various Services
"
        details="We provide CDR Writing Service at a very convenient and 
valued price."
      /> */}
      <ReportPrices />
      <FeaturesPricing />
      <CDRReportAccepted
        title="Hundreds of our clients have received positive approval! Now is your Time !"
        data="Our main aim is to see our client’s approval for a well-formed report that adheres to the proper guidelines created for the migrants. 
        CDRReportWriters offers high-quality service at an affordable price to ensure complete customer satisfaction"
        buttonName="Get Pricing Details Here"
        link="/pricing"
      />
      <FrequentlyAsked />
      <FeelingCurious />
    </div>
  );
};

export default Pricing;
