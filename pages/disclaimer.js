import React from "react";
import Head from 'next/head'
import { Col, Row } from "react-bootstrap";
import {useRouter} from 'next/router'



const Disclaimer = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      
       <Head>
      <title>Disclaimer | CDR For Engineer</title>
      <meta name='description' content='Disclaimer | CDR For Engineer'/>
      <link rel="canonical" href={canonicalUrl} />

      </Head>
      <div
        style={{
          background: `linear-gradient(
  90deg,
  #60269e 0%,
  #4c1980 35.73%,
  #360b62 100%
)`,
          minHeight: "6rem",
        }}
      >
        <div className="container px-3 px-md-5">
          <Row>
            <Col md={6} xs={12} className="text-white mt-md-5 pt-md-5 mb-5">
              <p className="text-center text-md-start my-4">
                Home &gt; <strong>Disclaimer</strong>
              </p>
            </Col>

            <Col className="mt-5" md={6} xs={12}></Col>
          </Row>
        </div>
      </div>
      <Row className="px-md-5 py-md-3">
        <h1
          className="ms-md-5 my-3"
          style={{
            fontFamily: "Cambria",
            fontWeight: "700",
            fontSize: "30px",
            color: "#561F8E",
          }}
        >
          Disclaimer
        </h1>
        <Row>
          <Col xs={1}>
            <i
              className="fa-solid fa-arrow-right mt-2"
              style={{ float: "right" }}
            ></i>
          </Col>
          <Col xs={11}>
            <p
              style={{
                fontFamily: "Cambria",
                fontWeight: "400",
                fontSize: "25px",
                color: "#000000",
              }}
            >
              All the information on this website -{" "}
              <a href="https://cdrforengineer.com/">
                https://cdrforengineer.com/
              </a>{" "}
              - is published in good faith and only general information.
              CDR For Engineer does not make any warranties about this
              information's completeness, reliability, and accuracy. Any action
              you take upon the information you find on this website
              (CDR For Engineer) is strictly at your own risk. CDR For Engineer will
              not be liable for any losses and damages in connection with the
              use of our website.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={1}>
            <i
              className="fa-solid fa-arrow-right mt-2"
              style={{ float: "right" }}
            ></i>
          </Col>
          <Col xs={11}>
            <p
              style={{
                fontFamily: "Cambria",
                fontWeight: "400",
                fontSize: "25px",
                color: "#000000",
              }}
            >
              You can visit other websites from our website by following
              hyperlinks to such external sites. While we strive to provide only
              quality links to useful and ethical websites, we have no control
              over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found
              on these sites. Site owners and content may change without notice
              and may occur before we can remove a link that may have gone
              'bad'.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={1}>
            <i
              className="fa-solid fa-arrow-right mt-2"
              style={{ float: "right" }}
            ></i>
          </Col>
          <Col xs={11}>
            <p
              style={{
                fontFamily: "Cambria",
                fontWeight: "400",
                fontSize: "25px",
                color: "#000000",
              }}
            >
              Please be also aware that other sites may have different privacy
              policies and terms that are beyond our control when you leave our
              website. Please be sure to check the Privacy Policies of these
              sites and their "Terms of Service" before engaging in any business
              or uploading any information.
            </p>
          </Col>
        </Row>

        <h1
          className="ms-md-5 my-3"
          style={{
            fontFamily: "Cambria",
            fontWeight: "700",
            fontSize: "30px",
            color: "#561F8E",
          }}
        >
          Consent
        </h1>
        <Row>
          <Col xs={1}>
            <i
              className="fa-solid fa-arrow-right mt-2"
              style={{ float: "right" }}
            ></i>
          </Col>
          <Col xs={11}>
            <p
              style={{
                fontFamily: "Cambria",
                fontWeight: "400",
                fontSize: "25px",
                color: "#000000",
              }}
            >
              {" "}
              You, at this moment, consent to our disclaimer and agree to its
              terms by using our website.
            </p>
          </Col>
        </Row>

        <h1
          className="ms-md-5 my-3 "
          style={{
            fontFamily: "Cambria",
            fontWeight: "700",
            fontSize: "30px",
            color: "#561F8E",
          }}
        >
          Update
        </h1>
        <Row>
          <Col xs={1}>
            <i
              className="fa-solid fa-arrow-right mt-2"
              style={{ float: "right" }}
            ></i>
          </Col>
          <Col xs={11}>
            <p
              style={{
                fontFamily: "Cambria",
                fontWeight: "400",
                fontSize: "25px",
                color: "#000000",
              }}
            >
              If we update, amend or make any changes to this document, those
              changes will be prominently posted here.
            </p>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Disclaimer;
