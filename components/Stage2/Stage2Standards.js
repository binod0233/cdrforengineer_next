import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const Stage2Standards = () => {
  const contentData = [
    "Understand all the requirements of the consumers, stakeholders, and society as whole",
    "Dedication and determination to expand all three aspects like economic, social, and environmental aspects",
    "Tackle with other professions from diverse backgrounds",
    "Show that the engineering input is fully helpful in the overall project or program",
    "Utilizing technical possibilities for culture, industry, and government",
    "Managing and finding a way to mitigate risk and maintain sustainable viability",
    "Identifying how emerging technologies apply to old ones",
    "Ensuring all the prices, limits, risks, are fully known about the results",
  ];
  return (
    <Container>
      <PurpleHeading title="Stage 2 Competency Assessment standards for professional engineers" />
      <TextParagraph
        content="Stage 2 Competency  Assessment  standards are the profession’s expressionof  the knowledge and skill base, engineering capabilities, and professionals’skills,values,and attitudes that must mention topractice independently or unsupervised.As a professional engineer,you need to deliver various competencies according to your experience. Wheresome of the essentialparts of competencies are as given bellows"
        family="Arial"
      />
      <TextParagraph
        content="As a professional engineer, you need to deliver various competencies according to your experience where some of the important parts of 
        competencies are as given belows:"
        family="Arial"
      />
      <Row>
        {contentData.map((c,i) => (
          <div key={i}>
            <Col xs={1} md={1}>
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: "auto",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="/images/exp-small.png"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
            <Col xs={11} md={11}>
              <p
                className="documentsForStageList"
                style={{
                  color: "#666666",
                  fontSize: "18px",
                  fontFamily: "Arial",
                }}
              >
                {c}
              </p>
            </Col>
          </div>
        ))}
      </Row>
      <TextParagraph
        content="We CDR For Engineer, assure you to guide you through the whole process so your Assessment can   go   on   smoothly   without   any hindrance. We have   our   Top professional  Stage  2  Competency  Assessment  Expert  writers in  preparing such reports"
        family="Arial"
      />
    </Container>
  );
};

export default Stage2Standards;
