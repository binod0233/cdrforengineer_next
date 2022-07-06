import React from "react";
import Head from 'next/head' 
import {useRouter} from 'next/router'
import HowReview from "../../components/CDRReviewing/HowReview";
import ReviewingServices from "../../components/CDRReviewing/ReviewingServices";
import WhyCdr from "../../components/CDRReviewing/WhyCdr";
import Steps from "../../components/CDRWriting/Steps";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";
import PurpleHeading from "../../components/PurpleHeading";
import TextParagraph from "../../components/TextParagraph";

const CDRReviewing = () => {
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
        title="High-Quality CDR Reviewing 
services for Engineers 
Australia (EA)"
        details="Seeking help for your CDR Reviewing services! No worries our 
professional writers are here to help you with your CDR Reviewing  
process."
      />
      <ReviewingServices />
      <Container className="pt-3">
        <PurpleHeading title="What is CDR Reviewing?"/>
        <TextParagraph content="CDR Reviewing Engineers Australia is the process of analyzing the CDR report in order to determine which are sensitive or otherwise relevant to 
the case. It is basically a process of finding out mistakes to avoid CDR rejection. The Approval of the CDR Report by the Engineer Australia (EA) 
is needed to get the skilled Migration visa of Australia. CDR Report also plays an important role for all the students of Engineers Applicant applying 
to Australia.  Many Applicants who write their CDR by themselves and submit it to EA which is Engineers Australia have a high chance to commit 
many mistakes while preparing it, so Engineers Australia does not approve it easily and they need to rewrite or resubmit CDR Report so many times. 
for this case, we are here we are a CDR Reviewing service near you in Australia. Our Top Experts CDR Writers in Australia is here to help you with 
the preparation of your Competency demonstration Report CDR."/>
        
      </Container>
      <CDRReportAccepted 
        title="To know more about how the CDR Reviewing service provider in Australia can 
        help you get instant help from our professional writers "
        buttonName="Get Free Consultation"
      />
      <WhyCdr />
      <Steps
        tabItem={[
          {
            description: `In the first Step read the MSA booklet before you start to write Your CDR Report. We at CDR For Engineer are known for the Best CDR 
          Report writing and Reviewing service in Australia also follow the same steps and tips to avoid rejection and get a 100 % Approval 
          Rate from Engineers Australia.`,
            title: "Step 01",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
          the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
          So, if you do not want 
          a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
          service in Australia, we focus on quality and we are result-oriented.
          `,
          },
          {
            description: `Understand the purpose of preparing the Report and its main components such as CPD, three career Episodes, and a 
          summary statement.`,
            title: "Step 02",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
          the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
          So, if you do not want 
          a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
          service in Australia, we focus on quality and we are result-oriented.
          `,
          },
          {
            description: `Choose your project wisely which is a very important task to do for career episodes writing. For that, you should explore all the 
          competencies that Engineers Applicants are looking for in the best candidates and make comprehensive episodes that show 
          your knowledge and skills.`,
            title: "Step 03",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
            the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
            So, if you do not want 
            a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
            service in Australia, we focus on quality and we are result-oriented.
            `,
          },
          {
            description: `Each career episode needs to be clear and unique. It helps to distinguish your project into two career episodes and Engineers 
            Applicants always want to know your abilities in a different project.
            `,
            title: "Step 04",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
          the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
          So, if you do not want 
          a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
          service in Australia, we focus on quality and we are result-oriented.
          `,
          },
          {
            description: `While you write your CDR Report ensure it is written in Australian English. So, make sure you are following all the formats 
            and guidelines provided by the MSA booklet. If you prepare the career episode in other languages you should have 
            to provide a translation.`,
            title: "Step 05",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
            the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
            So, if you do not want 
            a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
            service in Australia, we focus on quality and we are result-oriented.
            `,
          },
          {
            description: `All the spelling, grammar, and writing styles should be similar to that of the Australian Language. You should write it in the first 
            person and have an active voice. Also mention all your contribution and role in the project.`,
            title: "Step 06",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
          the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
          So, if you do not want 
          a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
          service in Australia, we focus on quality and we are result-oriented.
          `,
          },
          {
            description: `All the spelling, grammar, and writing styles should be similar to that of the Australian Language. You should write it in the first 
            person and have an active voice. Also mention all your contribution and role in the project.`,
            title: "Step 07",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
          the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
          So, if you do not want 
          a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
          service in Australia, we focus on quality and we are result-oriented.
          `,
          },
          {
            description: `All the spelling, grammar, and writing styles should be similar to that of the Australian Language. You should write it in the first 
            person and have an active voice. Also mention all your contribution and role in the project.`,
            title: "Step 08",
            extraContent: `Above mentioned Steps play a crucial role in getting a 100 % Approval rate from Engineers Australia. So if you are not well aware of these steps and 
          the requirements of EA then these are the possible answers to your queries Why was CDR rejected by engineers in Australia?
          So, if you do not want 
          a rejection and want 100 % Approval from EA then we say rely on us because we can proudly say we are the Best CDR Report writing and Reviewing 
          service in Australia, we focus on quality and we are result-oriented.
          `,
          },
        ]}
      />
      <HowReview />
    </div>
  );
};

export default CDRReviewing;
