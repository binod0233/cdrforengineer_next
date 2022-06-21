import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const ReviewingServices = () => {
  return (
    <Container>
      <PurpleHeading title="CDR Reviewing Services for Engineers Australia" />
      <TextParagraph
        family="Arial"
        content="CDR reviewing process requires plenty of effort yet, there is a high chance of rejection if the report is not reviewed and corrected properly. The guidance of our experienced expert writers maximizes the chances of approval rate while  reducing the  chances  of  rejection. There are plenty  of Service providers, writers, consultants, agency out there. Among them,you have to choose a reliable, trustworthy, and result-oriented service provider for getting your High-quality CDR Report at reasonable prices
"
      />
        <TextParagraph
        family="Arial"
        content="Renowned for the service we provide of reviewing CDR in Australia, CDR For Engineer offers help on preparing flawless  CDR that  will  get  assessed  by  Engineers  Australia at  a  reasonable  price. Professionals  from engineering backgrounds are hired at CDR For Engineer as CDR writers to review all three sections of your report.We work on your report and make sure Engineers Australia accepts your CDR. Professionals with years of experience in the EA assessment processon our team, CDR For Engineer stands out as the best CDR reviewing agency in Australia. We offer service on reviewing all the three sections of your CDR, they are
"
      />
      <Row>
        <img
          src="/images/review.png"
          alt="CDR Reviewing Services"
        />
      </Row>

    
    </Container>
  );
};

export default ReviewingServices;
