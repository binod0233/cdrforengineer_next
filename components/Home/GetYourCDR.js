import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import Chatra from "@chatra/chatra";
import "../../styles/componentStyles.module.css";
import parse from "html-react-parser";
const GetYourCDR = ({ data }) => {
  const { approval, steps } = data;
  return (
    <Container className="my-5">
      <Row>
        <Col md={5} className="px-5">
          <PurpleHeading title={approval?.title} />
          <TextParagraph
            content={approval?.paragraph && parse(approval.paragraph)}
            family="Arial"
          />
          <Button
            className="formSubmitButton"
            variant="primary"
            type="submit"
            // onClick={() => Chatra("openChat", true)}
          >
            <div data-id="a454874ff4" className="livechat_button">
              <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                Contact Us
              </a>
            </div>
            {/* Contact Us */}
          </Button>
        </Col>
        <Col md={7}>
          <div
            className="onTimeDelivery"
            style={{
              background: "#EAF0FC",
              height: "100px",
              width: "500px",
              marginTop: "60px",
              borderRadius: "10px",
            }}
          >
            <Row className="p-3">
              <Col md={9} xs={9} style={{ fontSize: "13px" }}>
                <strong style={{ color: "#370B63" }}>
                  Best prices Guarantee
                </strong>
                <br />
                We Care about you so we provide quality services at very
                reasonable prices and also, we are sure our offer cannot be
                duplicated by any competitors.
              </Col>
              <Col md={3} xs={3}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "80px",
                    background: "#FA2545",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/images/Home/best-prices.png"
                    alt="best prices guarantee"
                    style={{ height: "70%", objectFit: "contain" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="onTimeDelivery"
            style={{
              background: "#EAF0FC",
              height: "100px",
              width: "500px",
              marginTop: "30px",
              marginLeft: "40px",
              borderRadius: "10px",
            }}
          >
            <Row className="p-3">
              <Col md={9} xs={9} style={{ fontSize: "13px" }}>
                <strong style={{ color: "#370B63" }}>On-time delivery</strong>
                <br />
                We Care about you so we provide quality services at very
                reasonable prices and also, we are sure our offer cannot be
                duplicated by any competitors.
              </Col>
              <Col md={3} xs={3}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "80px",
                    background: "#FA2545",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/images/Home/on-time-delivery.png"
                    alt="best prices guarantee"
                    style={{ height: "70%", objectFit: "contain" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="onTimeDelivery"
            style={{
              background: "#EAF0FC",
              height: "100px",
              width: "500px",
              marginTop: "30px",
              borderRadius: "10px",
            }}
          >
            <Row className="p-3">
              <Col md={9} xs={9} style={{ fontSize: "13px" }}>
                <strong style={{ color: "#370B63" }}>Plagiarism Free</strong>
                <br />
                We avoid duplication and error and provide concisely and quality
                reports free from plagiarism. We properly revise and complete
                your report before we deliver.
              </Col>
              <Col md={3} xs={3}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "80px",
                    background: "#FA2545",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/images/Home/plagarism-free.png"
                    alt="best prices guarantee"
                    style={{ height: "70%", objectFit: "contain" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetYourCDR;
