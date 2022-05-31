import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const WhyRely = () => {
  const why = [
    `We always say “NO” to plagiarism so we prepare a high-Quality 
       Original CDR Report without any Plagrairised content.`,
    `For every Engineering discipline, we offer domain-specific 
       professional writers.`,
    `We Offer Various CDR writing Services like CDR reviewing, plagiarism 
       detection and removal, career episode writing, and summary statement 
       writing services.`,
    `We offer the applicant CDR free samples of positively assessed 
       CDR reports.`,
  ];
  return (
    <Container>
      <PurpleHeading title="How does CDR Report Sample help Engineers?" />
      <TextParagraph
        content="Writing a flawless CDR report is a difficult task for inexperienced writers and engineers. Preparing a High-Quality CDR Report takes a massive 
    amount of effort and time, and there is a risk of rejection from Engineers Australia due to copied content. CDR Sample is essential in this scenario 
    to assist engineers in obtaining more in-depth knowledge and crucial insights on how to prepare a CDR report.
    CDR Sample can assist Engineers in understanding key criteria mentioned in the migration skill Assessment (MSA) booklet defined by EA:"
        family="Arial"
      />
      <Row>
        {why.map((m, index) => (
          <Col md={6} key={index} className="px-4 py-3">
            <Row
              style={{
                height: "100px",
                fontFamily: "Arial",
                color: "white",
                fontWeight: "700",
                background: "#6425A7",
              }}
              className="d-flex justify-content-center align-items-center rounded px-2 whyRelyCards"
            >
              {m}
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyRely;
