import React from "react";
import { Container } from "react-bootstrap";
// import PurpleHeading from "../PurpleHeading";
// import TextParagraph from "../TextParagraph";
import FancyTabs from "../FancyTabs";

const ReportSamples = ({ fancySteps }) => {
  return (
    <Container>
      {/* <PurpleHeading title="Engineering Manager Career Episode Report Samples" />
      <TextParagraph
        content="The career episode must be written on your own based on your recent work experience and must be in the English language. Each career episode 
should highlight the problems faced in your project and the steps taken to overcome them. It would be best if you numbered each paragraph of your 
career episodes as ‘Career episode 1 (paragraphs 1.1, 1.2, 1.3, etc.)’. The primary four components are as follows:
"
        family="Arial"
      /> */}
      {fancySteps && fancySteps.length > 0 && <FancyTabs data={fancySteps} />}
      {/* <PurpleHeading title="Engineering Manager Summary Statement" />
      <TextParagraph
        content="This is the summary statement sample that demonstrates the section of competency. It consists of the consolidated report to describe 16 competencies 
elements that perfectly summarizes how the applicant fulfills the required competencies based on the mentioned Carrer Episodes."
        family="Arial"
      /> */}
    </Container>
  );
};

export default ReportSamples;
