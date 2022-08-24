import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";
const CDRReport = ({ data }) => {
  const { positive } = data;
  const list = [
    { image: "/images/Home/3-career.png", title: "3 Career Episodes" },
    { image: "/images/Home/summary-statement.png", title: "Summary Statement" },
    {
      image: "/images/Home/professionaldevelopment.png",
      title: "Continuing Professional Development",
    },
    { image: "/images/Home/resume-writing.png", title: "CV Resume Writing" },
  ];
  return (
    <Container>
      <Row>
        <Col md={5}>
          <img
            src={positive.image?.data?.attributes?.url}
            alt={positive.image?.data?.attributes?.alternativeText}
            className="img-fluid"
          />
        </Col>
        <Col md={7}>
          <PurpleHeading title={positive?.title} />
          <p
            className="textParagraphP"
            style={{
              // color: "#666666",
              // textAlign: centerAlign ? "center" : "justify",
              fontSize: "18px",
            }}
          >
            Engineers pursuing a career in Australia demonstrate their expertise
            through CDR report in written form. To assess an engineer’s
            proficiency in engineering skills and knowledge, management,
            communication and leadership Engineers Australia uses a variety of
            customized papers. CDR report for Engineers Australia consists of
            three different documents namely:
          </p>
          <Row>
            {list.map((l, i) => (
              <Col key={i} md={6} className="p-2">
                <div
                  style={{
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
                    padding: "10px",
                    display: "flex",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      flex: "0.3",
                      background: "#FA2545",
                      borderRadius: "10px",
                      height: "80px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img src={l.image} alt={l.title} />
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      flex: "0.7",
                      color: "#370B63",
                      fontWeight: "700",
                      fontFamily: "Century Gothic",
                      fontSize: "18px",
                    }}
                  >
                    {l.title}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CDRReport;
