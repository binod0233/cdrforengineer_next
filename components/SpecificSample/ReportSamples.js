import React from "react";
import { Container } from "react-bootstrap";// import PurpleHeading from "../PurpleHeading";
// import TextParagraph from "../TextParagraph";
import FancyTabs from "../FancyTabs";

const ReportSamples = ({ fancySteps }) => {
  return (
    <Container>
      
      {fancySteps && fancySteps.length > 0 && <FancyTabs data={fancySteps} />}
     
    </Container>
  );
};

export default ReportSamples;
