import React from "react";
import { Container } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const HowReview = () => {
  return (
    <div style={{ background: "#F1F1F1" }}>
      <Container className="pb-5">
        <PurpleHeading title="How do we Review your CDR?" />
        <TextParagraph
          content="CDR For Engineer tops the list of best CDR Reviewing for skill Assessment service providers because of its quality and positive result rate. We have a team 
of engineers Applicants (EA) Experts and professional engineers and CDR writers in preparing Top Quality CDR report for Engineers Australia as 
well as CDR Reviewing for Engineers Australia.
"
          family="Arial"
        />
        <TextParagraph
          family="Arial"
          content="Let’s Explore about CDR reviewing process to improve and eliminates all the missing elements in the following areas: "
        />

        <TextParagraph
          family="Arial"
          content="Our Top Experts writersof CDR For Engineer known for Best CDR Report writing and Reviewing service in Australia always focus on checking the technical aspects of CDR Report to make you high-quality CDR repor"
        />
        <FancyTabs
          data={[
            {
              details: (
                <div>
                  Our Experienced writers proof read and edit your CDR Report
                  for EA skills Assessment and also make sure your report is
                  free from any typing error, spelling error, and grammatical
                  mistake
                </div>
              ),

              title: "Proofreading and Editing",
            },
            {
              details: (
                <div>
                  We take care of your CDR Report and observe your CDR Report
                  structure is followed by the guidelines of MSA booklets for
                  Engineers Australia(EA)
                </div>
              ),
              title: "CDR Report Structure",
            },
            {
              details: (
                <div>
                  We make sure that your CDR Report for EA that is Engineers
                  Australia is in a perfect flow for getting 100 % Approval.
                </div>
              ),
              title: "Perfect Flow",
            },
            {
              details: (
                <div>
                  Our Top Experts writers of CDR For Engineer known for Best CDR Report
                  writing and Reviewing service in Australia always focus
                  onchecking the technical aspects of CDR Report to make you
                  high-quality CDR report.
                </div>
              ),
              title: "Technical Requirements Aspects",
            },
          ]}
        />
        <TextParagraph
          family="Arial"
          content="Our Top Experts writers of CDR For Engineer known for Best CDR Report writing and Reviewing service in Australia always focus on checking the technical aspects of CDR Report to make you high-quality CDR report"
        />
        <TextParagraph
          family="Arial"
          content="CDR For Engineer  follows  these  smart  ways for the CDR  reviewing process. Whether want a high-quality CDR report or CDR report review service before submit tingit to the EA then contact us."
        />
      </Container>
    </div>
  );
};

export default HowReview;
