import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import "../../styles/componentStyles.module.css";

const OurReports = () => {
  const list = [
    {
      image: "/images/Home/plagiarismfree.png",
      title: "Plagiarism Free Report",
      details: `We prepare CDR reports free of 
    plagiarism. Using content from the 
    internet in your CDR report will get 
    you banned for plagiarism by EA.`,
    },
    {
      image: "/images/Home/uniqueandsufficient.png",
      title: "Writers with years of experience",
      details: `Professional CDR writers from 
    different engineering backgrounds
    work together and prepare a flawless 
    CDR report that will get approved
    by Engineers Australia`,
    },
    {
      image: "/images/Home/properformat.png",
      title: "Proper format and Structure",
      details: `Engineering skills, education and 
    experience are to be presented in 
    CDR report properly in the same 
    format and structure defined by 
    Engineers Australia.`,
    },
    {
      image: "/images/Home/professionalwriters.png",
      title: "Professional Writers",
      details: `Expert writers with years of experience 
    in CDR writing will assist you in writing 
    a proper CDR report to get a positive 
    assessment.`,
    },
    {
      image: "/images/Home/uniqueandsufficient.png",
      title: "Unique and Sufficient content",
      details: `An incomplete CDR Report will not get 
    assessed by Engineers Australia. 
    Our team of expert writers at 
    CDR For Engineers prepare each 
    CDR report with sufficient and 
    unique content`,
    },
    {
      image: "/images/Home/positiveresult.png",
      title: "Positive result",
      details: `We successfully maintained a high 
    approval rate of the CDR report from 
    Engineers Australia. Our Expert writers 
    have years of experience in this CDR 
    report writing field and always work 
    smart to deliver promised services. `,
    },
  ];
  return (
    <Container>
      <PurpleHeading title="We have an excellent track record in CDR services." />
      <Row className="my-2 my-md-5">
        {list.map((l,index) => (
          <Col key={index} md={4} sm={12} className="p-3 my-md-5 my-3">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1.5px solid black",
                padding: "40px 20px 20px 20px",
                height: "220px",
                borderRadius: "10px",
                position: "relative",
                zIndex: "-1",
              }}
            >
              <div
                className="position-absolute "
                style={{
                  height: "80px",
                  width: "80px",
                  marginTop: "-250px",
                  background: "#FA2545",
                  borderRadius: "100%",
                  padding: "20px",
                }}
              >
                <img
                  src={l.image}
                  alt="Client"
                  style={{ objectFit: "contain" }}
                  className="img-fluid"
                />
              </div>
              <div>
                <h5 className="text-center">{l.title}</h5>
                <p className="text-center">{l.details}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurReports;
