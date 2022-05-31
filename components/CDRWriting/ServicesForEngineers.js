import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";

const ServicesForEngineers = () => {
  return (
    <Container>
      <PurpleHeading title="CDR Report Writing Services for Engineers Australia" />
      <p className="cdrWritingP">
        CDR For Engineer is recognised as one of Australia&apos;s best CDR Report
        Writing Service providers for high Quality (CDR) Competency
        Demonstration Report Writing. CDR for engineer offers top-notch quality
        services with a 100 % positive assessment and approval record of
        Competency Demonstration Report(CDR) from Engineers Australia (EA). All
        the engineering aspirants seeking an opportunity in Australia for
        skilled Migration must prepare their quality CDR Report; only quality
        CDR reports are given priority and have a 100% possibility of being
        examined by Engineers Australia (EA).Writing a CDR report is a difficult
        task, but it is also critical to make your CDR report plagiarism-free
        and faultless for it to be authorisedby EA. With all of these
        considerations in mind, we are here to help you make your task easier.
        We have top professional report writers, engineers, and computing
        professionals who have been offering quality assistance For DR
        Reviewing, Resume Writing, RPL Writing, Plagiarism Checking, and Removal
        services.
      </p>
      <Row className="">
        <img
          src="/images/cdr-writing.png"
          alt="Competency Demonstration Report"
        />
      </Row>
      <PurpleHeading title="What is CDR? Need of Quality CDR Report." />

      <p className="cdrWritingP" style={{ textAlign: "center" }}>
        Competency Demonstration Report,CDR report,is a technical report used by
        engineers in Australia to evaluate applicants who want to further their
        careers in engineering professions in Australia. Engineers Australia
        assesses an engineer&apos;s competency-basedon various factors, including
        engineering skills,knowledge, management, communication, and leadership.
        Lookat the key considerations for writing a high-quality CDR report, as
        per the guidelines by Engineers Australia (EA).
      </p>
    </Container>
  );
};

export default ServicesForEngineers;
