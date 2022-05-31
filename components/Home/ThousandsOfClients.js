import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import "./componentStyles.css";

const ThousandsOfClients = () => {
  const content = [
    {
      image: "/images/thousandCard-1.jpg",
      title: "Best prices Guarantee",
      paragraph:
        "We  make  sure  your  CDR  will  get  approved,    we  provide high-quality  CDR  writing  services  at  very  reasonable  prices,  and  also,  we  are  sure  any competitors cannot duplicate our offer.",
    },
    {
      image: "/images/thousandCard-2.jpg",
      title: "On-time Delivery ",
      paragraph: `We focus on customer satisfaction,  and quality and on-time delivery should not be compromised when it comes to customer satisfaction. Hence, we always deliver reports before your deadline and meet your satisfaction as soon as possible. `,
    },
    {
      image: "/images/thousandCard-3.jpg",
      title: "Plagiarism -free:",
      paragraph: `We  avoid  duplication  and  error  and  provide  concisely  and  quality reports  free  from  plagiarism.  We  properly  revise  and  complete  your  report  before  we deliver.`,
    },
    {
      image: "/images/guarantee-assessment-final.png",
      title: "Guarantee Assessment",
      paragraph: `We  guarantee  approval  of  your  CDR.  We will  support  you  in every step  of  your CDR  writing  process. Our  experienced  expert  writers  provide  top-quality CDR Reports positively assessed by the Engineers Australia -EA.`,
    },
  ];
  return (
    <Container className="mt-4">
      <div style={{ marginTop: "80px" }}>
        <PurpleHeading title="Thousands of our clients are getting Approval From EA, be the next?" />
        <p
          className="thousandsParagraph"
          style={{
            color: "#666666",
            fontFamily: "Century Gothic",
            fontWeight: "400",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Our main aim is to see our client’s approval for a well-formed report
          that adheres to the proper guidelines created for the migrants. CDR
          Report Writers offers high-quality service at an affordable price to
          ensure complete customer satisfaction.
        </p>
        <Row>
          {content.map((c, index) => (
            <Col xs={12} md={3} key={index} className="p-5 p-md-3">
              <div
                className="thousandsCard"
                style={{
                  borderRadius: "10px",
                  zIndex: "-1",
                  minHeight: "405px",
                  maxHeight: "fit-content",
                }}
              >
                <div className="d-flex justify-content-center">
                  <div style={{ height: "100px", width: "100px" }}>
                    <img
                      src={c.image}
                      alt="main aim is to see our client’s approval for a well-formed report"
                    />
                  </div>
                </div>
                <h5
                  style={{
                    color: "#370B63",
                    textAlign: "center",
                    marginTop: "40px",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  <strong>{c.title}</strong>
                </h5>
                <p
                  className="thousandsParagraph"
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  {c.paragraph}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ThousandsOfClients;
