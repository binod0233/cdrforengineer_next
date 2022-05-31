import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const EngineerStatus = () => {
  return (
    <div style={{ background: "#F8FCFF" }}>
      <Container>
        <PurpleHeading title="Trust Us and Get Chartered Engineer Status" />
        <p
          className="documentsForStageList"
          style={{
            color: "#666666",
            fontSize: "20px",
            fontFamily: "Arial",
          }}
        >
          <strong>
            <br />
            1) How do I get chartered engineer status?
            <br />
            2) How can an engineer be recognised in Australia?
            <br />
            3) How can an engineered move to Australia?
            <br />
          </strong>
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.7" }}>
            <TextParagraph
              content="Are  you planning to go  to  Australia  for  a  better opportunity  through  a  skill  Assessment immigration visa and seeking the help of someone to help you and provide an answer to all these questions? Then  contact  us  for  your queries and assistance. Professional  writers  from  an engineering  background  with  years  of  experience  make  us  the  best  stage  1  Competency Assessment service provider in Australia. We provide free consultation services for our clients. Our 1000+ clients are getting a 100 % Approval Rate at a minimum price.
              Chartered professional engineers are recognised worldwide for their skills and professionalism. A chartered professional engineer is your token to world recognition and working abroad. So, do you want to become a chartered professional engineer in Australia? Then you are at the right place. We are the Top  Stage  2  Competency  Assessment Agency; we  are  here  to  help  to  boost  your career. Our   professional   Stage   2   Competency   Assessment   Expert   writers will   guide   you throughout  the  process to  prepare  high-quality  Chartered  professional  engineer  documents, including:"
              family="Arial"
            />

            <p
              className="documentsForStageList"
              style={{
                color: "#666666",
                fontSize: "20px",
                fontFamily: "Arial",
              }}
            >
              <strong>
                <br />
                1) CV
                <br />
                2) CPD Log
                <br />
                3) Chartered Evidence Narratives
                <br />
                4) Industry Review Evidence Statements
                <br />
              </strong>
            </p>
          </div>
          <div style={{ flex: "0.3" }}>
            <img
              src="/images/chartered-engineer.png"
              alt="chartered engineer"
              style={{
                height: "350px",
                width: "450px",
              }}
            />
          </div>
        </div>
        <TextParagraph
          content="Let’s Explore these paragraphs if you want to know how to become a Chartered Engineerin Australia? Or wondering, how do I get chartered engineer status?"
          family="Arial"
        />
        <TextParagraph
          content="Becoming a chartered engineer in Australia is not an easy task, and if you become a chartered engineer in Australia, you obtain a great way to unlock your engineering career. Australia chartered engineers are recognised worldwide, so your chartered engineer status is a ticket to global opportunities. Engineers can obtain the chartered credential under the following domain"
          family="Arial"
        />
        <p
          style={{
            color: "#666666",
            fontSize: "20px",
            fontFamily: "Arial",
            marginLeft: "50px",
          }}
        >
          <strong>
            <Row className="px-md-5">
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
                    alt="chartered engineer in Australia"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Col>
              <Col xs={11} md={11}>
                <div>Chartered professional engineer</div>
              </Col>
            </Row>
            <Row className="px-md-5">
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
                    alt="Chartered engineering associate"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Col>
              <Col xs={11} md={11}>
                <div>Chartered engineering associate</div>
              </Col>
            </Row>
            <Row className="px-md-5">
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
                    alt="Chartered engineering technologist"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Col>
              <Col xs={11} md={11}>
                <div> Chartered engineering technologist</div>
              </Col>
            </Row>
          </strong>
        </p>
        <TextParagraph
          content="For  all the above domains Application  process  is similar, but  the  competency  elements may   differ. So   far, Engineers   Australia has   registered   20,000   chartered   engineer professionals"
          family="Arial"
        />
        <TextParagraph
          content="In Australia,  Engineers Australia  (EA) grants you  the  title of  Chartered  Engineer. To  be recognised as a chartered engineer by EA students or Applicants should have to go through the following steps:"
          family="Arial"
        />
        <Row>
          <img
            src="/images/steps-1.jpg"
            alt="Engineers Australia  (EA) grants you  the  title of  Chartered  Engineer"
          />
        </Row>
      </Container>
    </div>
  );
};

export default EngineerStatus;
