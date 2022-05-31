import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const WhyChooseCdr = () => {
  const cardItems = [
    {
      heading: `Have Trouble writing yourSummary statement report`,
      image: "/images/summary-report.jpg",
    },
    {
      heading: `Want your High-Quality 
    Summary Statement Report`,
      image: "/images/summary-written-report.jpg",
    },
    {
      heading: `Want a 100% Approval Rate from Engineer Applicants`,
      image: "/images/correct.jpg",
    },
    {
      heading: `Worry about High Quality 
    at Affordable fees `,
      image: "/images/affordablefees.jpg",
    },
  ];
  return (
    <div className="px-md-5 px-3" style={{}}>
      <Row className="px-md-5">
        <PurpleHeading title="Why choose Cdr For Engineer Writers forSummary Statement Report Writing?" />
        <TextParagraph
          content="Do not worry you are at the right spot we care about all your Question marks want. We CDRforEngineer is known as the best and No 1 CDR writing service 
          provider in Australia and we have our licensed professional writers from an engineering background who are always ready to help you with high-quality 
          CDR Summary statement Report writing by following all the guidelines of EA mentioned in the MSA booklet. Our professional CDR writers are always 
          near to you, can help you obtain a migration skill assessment visa by writing an original and flawless CDR Summary statement report before a deadline 
          at very affordable prices for that you need to talk to our experts directly and you can get a free consultation response from them as well.      "
          familiy="Arial"
        />
      </Row>
      <Row className="px-5 ">
        {cardItems.map((c, i) => (
          <Col md={3} className="px-3" key={i}>
            <Card className="whyChooseCdrCard mb-5">
              <div
                className="text-white"
                style={{ background: "#5813A0", borderRadius: "15px" }}
              >
                <Row className="p-3">
                  <Col md={10}>
                    <strong>{c.heading}</strong>
                  </Col>
                  <Col
                    md={1}
                    style={{
                      fontSize: "35px",
                      fontWeight: "700",
                    }}
                  >
                    ?
                  </Col>
                </Row>
              </div>
              <Row className="d-flex justify-content-center align-items-center p-5">
                <img
                  src={c.image}
                  alt=""
                  style={{ height: "200px", width: "200px" }}
                />
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyChooseCdr;
