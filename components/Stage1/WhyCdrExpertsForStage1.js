import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const WhyCdrExpertsForStage1 = () => {
  return (
    <Container>
      <PurpleHeading title="Why CDR For Engineer for CDR Stage 1 Competency Assessment?" />
      <Row>
        <Col md={8}>
          <TextParagraph
            content="When you face trouble, you seek help, and when you seek help from someone, you should always ensure whether  the service is reliable  and  trust worthy. CDR For Engineer are  to  help  you  with top-notch best, quality Services. We  believe  in  quality where  others lack, so  we  always  stand  out  at  the  top, providing the  best service for CDR stage 1 Competency Assessment. We are known as the number 1 service provider agency in  Australia. We not  only  speak, but  we  are  also result-oriented, and  1000+  of  our reports have already gotten 100 % Approval from Engineers Australia (EA). 
"
            family="Arial"
          />
          <TextParagraph
            family="Arial"
            content="
            We are the number one Service provider in Australia for CDR Report Writing; our top professional writers from engineers’ backgrounds work smart to provide you with a quality CDR report. We are also known as the number one Writing and reviewing service provider in Australia, and we help you apply for the stage 1 competency Assessment for Engineers Australia. All the engineering students or Applicants who dream of landing in Australia for migration skill Assessment CDR is crucial in obtaining a   skilled migration visa. The quality of your report will help immigration services determine whether you are fit to work in Australia. We CDR For Engineer, known for Best Quality CDR writing and reviewing service agency, strive to help each field of engineers get the 100 % Approval outcome. Contact us today for the Best Quality consultation"
          />
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src="/images/cdrExpertise.jpg"
            alt="number one Service provider in Australia for CDR Report Writing"
            className="img-fluid"
            style={{ height: "350px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyCdrExpertsForStage1;
