import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const ReportPrices = () => {
  return (
    <Container>
      <PurpleHeading title="CDR Report Sevices Prices " />
      <Row>
        <img
          src="/images/report-services.jpg"
          alt="CDR Report Sevices Prices "
        />
      </Row>
      <TextParagraph
        content="CDR For Engineer is also known for Best CDR writing and reviewing Services in Australia. We are Result-oriented service providers who always focus 
on Quality and Affordable prices. Our Experts Writers are always eager to help with Best CDR Writing and Reviewing services in Australia to get 
a positive assessment from Engineers Australia. We CDR For Engineer provides a Top-Notch service at a very affordable price so that anyone can afford 
it. We promise that no other service provider could beat the range of prices for CDR services given hereunder various packages. We offer you 
Various CDR Services as per your needs.

"
        family="Arial"
      />
      <TextParagraph
        content="Let’s Take a look at the various price ranges of CDR For Engineer CDR Services for Engineers Australia (EA) Skill Assessments:"
        family="Arial"
      />
    </Container>
  );
};

export default ReportPrices;
