import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import FrequentlyAsked from "../components/FAQ/FrequentlyAsked";
import StillHave from "../components/FAQ/StillHave";

const FAQ = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const FAQFirstList = [
    {
      title:
        "What is CDR Report, and why it is Required?",
      details:
        `
        A competency Demonstration report, also known as CDR, is a document that reflects your engineering knowledge, skills, abilities, and experience to get selected as an engineer for an Australian immigration visa. CDR Report is prepared for Engineers Australia to prove that you are an eligible candidate for the position you applied for on an Australian immigration visa.
        `,
    },
    {
      title: "How do I write My perfect competency Demonstration (CDR) Report?",
      details:
        "A perfect CDR Report is written by following all the strict guidelines of Engineers Australia mentioned in the MSA booklet. Engineers Australia Expects you to write an ideal CDR Report on your own; However, you might be an inexperienced writer so you can take professional help from reliable Service providers.",
    },
    {
      title: "Do you offer complete CDRs report writing services for an Australian immigration visa?",
      details:
        "We offer our complete CDRs report writing and reviewing services, including a Summary statement Report, three career Episode Reports, continuing Professional development (CPD) Report, and Cv-Resume Report for an Australian immigration visa.",
    },
    {
      title: "What are the documents required for the CDR writing service?",
      details:
        <div>The Documents Required for CDR writing services are as follows:<br/>
        • Three Career Episodes Report (Academic/project/work bases)<br/>
        • Summary Statement Report<br/>
        • Continuing Professional Development (CPD) Report<br/>
        • Cv-Resume Report<br/>
        • Recent passport size photograph<br/>
        • Bio page of your identity<br/>
        • English language test Report<br/>
        • Academic Transcripts Certificate<br/>
        </div>,
    },
    {
      title: "Which English language tests do Engineers Australia accept?",
      details:<div>
        The English Language tests that Engineers Australia accepts are:<br/>
        • IELTS<br/>
        • TOEFL iBT <br/>

      </div>
    },
    {
      title: "How fast can you deliver my CDRs Report?",
      details:
        "We will deliver you a complete CDR Report within Three weeks.",
    },
    {
      title: "Do I need to provide my academic project?",
      details:
        "An academic project is a crucial document that must be submitted as a career Episode Report during your professional studies. ",
    },
    {
      title: "What do I need to submit for the career Episode Report?",
      details:<div>
        The following Material is crucial while writing a career Episode Report:
        • An engineering Task you completed during your Academic program.
        • A project you have contributed to or are contributing to.
• A specific Engineering challenge and your strategies to solve that challenge.
• Your position on your previous project and current project.

      </div>
    },
   
  ];
  return (
    <div>
       <Head>
      <title>FAQ | CDR For Engineer</title>
      <meta name='description' content='FAQ | CDR For Engineer'/>
      <link rel="canonical" href={canonicalUrl} />

      </Head>
      {/* <Hero
        title="Check our Excellent Pricing 
on Various Services
"
        details="We provide CDR Writing Service at a very convenient and 
valued price."
      /> */}
      <FrequentlyAsked FAQFirstList={FAQFirstList} />
      <StillHave />
    </div>
  );
};

export default FAQ;
