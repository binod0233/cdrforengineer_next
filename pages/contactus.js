import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Card, Container, Row, Button } from "react-bootstrap";
import PurpleHeading from "../components/PurpleHeading";
import TextParagraph from "../components/TextParagraph";
import ContactUsForm from "../components/Contactus/ContactUsForm";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { MonetizationOn } from "@mui/icons-material";

const ContactUs = () => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <Container>
      <Head>
        <title>Contact Us | CDR For Engineer</title>
        <meta
          name="description"
          content="We are available 24 hours 7 days and you can reach to us through different medium like phone email  | CDR For Engineer"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <PurpleHeading title="Contact Us" />
      <TextParagraph
        content="Any questions or remarks? Feel free to contact us if you need any assistance or have any questions related to our service. "
        family="Arial"
        centerAlign
      />
      <div>
        <div
          className="position-relative"
          style={{
            background: "#FFFFFF",
            boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.25)",
            borderRadius: "18px",
          }}
        >
          <div className="d-flex contactUsFull">
            <div style={{ flex: "0.4" }} className="p-1 contactUsHalf">
              <Card
                className="p-md-5 p-2"
                style={{ background: "#3D1F91", borderRadius: "12px" }}
              >
                <div
                  className="position-absolute contactUsDesignBubble"
                  style={{
                    height: "0px",
                    width: "0px",
                    // background: "#F8929D",
                    borderLeft: "200px solid transparent",
                    borderRight: "200px solid transparent",
                    borderRadius: "50%",
                    borderTop: "200px solid #F8929D",
                    bottom: "-30px",
                    right: "-130px",
                    transform: "rotate(-45deg)",
                  }}
                ></div>
                <div
                  className="position-absolute contactUsDesignBubble"
                  style={{
                    height: "140px",
                    width: "140px",
                    background: "#7E53FA",
                    borderRadius: "70px",
                    bottom: "55px",
                    right: "57px",
                  }}
                ></div>
                <h1
                  className="my-4 "
                  style={{
                    fontSize: "25px",
                    color: "white",

                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  Contact Us
                </h1>
                <p
                  className="mb-md-5 mb-2"
                  style={{
                    color: "white",

                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>

                <p
                  className="mt-2 mb-md-5 mb-2 ms-4"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  <WhatsAppIcon
                    className="me-3"
                    style={{ color: "#F8929D", fontSize: "22px" }}
                  />
                  +61 482 072 510
                </p>

                <p
                  className="mt-2 mb-md-5 mb-2 ms-4"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  <EmailOutlinedIcon
                    className="me-3"
                    style={{ color: "#F8929D", fontSize: "22px" }}
                  />
                  info@cdrforengineer.com
                </p>

                <p
                  className="mt-2 mb-5 ms-4"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  <FmdGoodRoundedIcon
                    className="me-3"
                    style={{ color: "#F8929D", fontSize: "22px" }}
                  />
                  102 Street 2714 Don
                </p>

                <h1
                  className="mt-md-5 mt-0 mb-2"
                  style={{
                    fontSize: "22px",
                    color: "white",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  Social Links
                </h1>
                <Row>
                  <div className="d-flex flex-row my-2">
                    <a
                      href="https://www.facebook.com/cdrforengineer001"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <FacebookOutlinedIcon
                        style={{
                          fontSize: "20px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="me-2"
                      />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <TwitterIcon
                        style={{
                          fontSize: "20px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="mx-2"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/cdrforengineer/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <InstagramIcon
                        style={{
                          fontSize: "20px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="mx-2"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/cdrforengineer001"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <LinkedInIcon
                        style={{
                          fontSize: "20px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="mx-2"
                      />
                    </a>
                  </div>
                </Row>
              </Card>
            </div>
            <div style={{ flex: "0.6" }} className="px-4 contactUsHalf">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
      <Row className="mb-5">
        <PurpleHeading title="Stay connected with CDR For Engineer! Contact us via our Social Channels" />
        <Row className="mt-3 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Button
              className="mx-3"
              style={{
                fontSize: "20px",
                background: "#FA2545",
                border: "none",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=61482072510"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <WhatsAppIcon className="me-2" />
                Whatsapp
              </a>
            </Button>
            <Button
              className="mx-3"
              style={{
                fontSize: "20px",
                background: "#FA2545",
                border: "none",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <a
                href="https://www.facebook.com/cdrforengineer001"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FacebookOutlinedIcon className="m-1" />
                Facebook
              </a>
            </Button>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default ContactUs;
