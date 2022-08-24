import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const EngineersTakeHelp = ({ data }) => {
  const { reports_title, steps } = data;
  const list = [
    {
      image: "/images/Home/let-us-know-final.png",
      title: "STEP 01",
      subTitle: "Let us Know ",
      details: `First of all, you need to fill up 
      the submission form or directly 
      interact with our agent view chat 
      by providing all the necessary 
      information and details for the 
      CDR Report Writing.`,
    },
    {
      image: "/images/Home/pay-online.png",
      title: "STEP 02",
      subTitle: "Pay Online",
      details: `After you submit all the necessary 
      information and details for CDR 
      report writing, our expert writers 
      will be discussing your project 
      with you and then complete the 
      payment process of the order as 
      mentioned on the pricing page.`,
    },
    {
      image: "/images/Home/draft-copy.png",
      title: "STEP 03",
      subTitle: "Draft Copy",
      details: `As you confirm your payment, 
      our team will send a draft copy 
      of your CDR report to verify and 
      check all the details carefully and 
      pinpoint the changes you want in 
      the report.`,
    },
    {
      image: "/images/Home/get-your-cdr.png",
      title: "STEP 04",
      subTitle: "Get your CDR",
      details: `Go through your top-quality CDR 
      report before your deadline at the 
      best prices. Also, you can ask for 
      amendments if required.
      `,
    },
  ];
  return (
    <Container className="py-4">
      <PurpleHeading title={reports_title} />
      <TextParagraph
        content="We guarantee high-quality CDR reports with original and plagiarism-free content. Expert writers at CDR For Engineers follow the 
guidelines and format mentioned in Engineers Australia's MSA booklet while writing the CDR report. Our professional Experts 
from an engineering background devote a considerable effort to preparing the CDR report. Get a CDR report to ensure a positive 
assessment from Engineers Australia in a few simple steps:"
      />
      <Row>
        {steps.map((item, i) => (
          <Col md={3} xs={12} key={i} style={{ paddingRight: "5px" }}>
            <div style={{ background: "#E5E5E5" }}>
              <div
                style={{
                  height: "260px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image?.data?.attributes?.url}
                  alt={item.image?.data?.attributes?.alternativeText}
                  style={{ height: "100%", objectFit: "contain" }}
                />
              </div>
              <div className="p-2" style={{ height: "250px" }}>
                <p
                  style={{
                    textAlign: "center",
                    margin: 0,
                    color: "#FA2545",
                    fontSize: "25px",
                    padding: "0",
                  }}
                >
                  <strong>{item?.title}</strong>
                </p>
                <br />
                {/* <p
                  style={{
                    textAlign: "center",
                    marginBottom: "0",
                    marginTop: "-10px",
                  }}
                >
                  <strong>{item.subTitle}</strong>
                </p> */}
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    fontFamily: "Arial",
                  }}
                >
                  {item?.paragraph && parse(item.paragraph)}{" "}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EngineersTakeHelp;
