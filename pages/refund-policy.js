import React from "react";
import Head from 'next/head'
import { Col, Container, Row } from "react-bootstrap";
import {useRouter} from 'next/router'


const RefundPolicy = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <>
      <Head>
        <title>Refund Policy | CDR For Engineer</title>
        <meta name="description" content="Refund Policy | CDR For Engineer" />
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
                Home &gt; <strong>Refund Policy</strong>
              </p>
            </Col>

            <Col className="mt-5" md={6} xs={12}></Col>
          </Row>
        </div>
      </div>
      <Container>
        <h1
          className="mt-md-3 mt-3"
          style={{
            fontFamily: "Cambria",
            fontWeight: "700",
            fontSize: "34px",

            color: "#000000",
          }}
        >
          Refund Policy.
        </h1>
        <Row>
          <Col>
            <p
              className="my-md-5 my-3"
              style={{
                fontFamily: "Arial",
                fontWeight: "400",
                fontSize: "25px",
                color: "#000000",
              }}
            >
              There will be no refund of payment at CDR For Engineer once agreed
              to use our service and paid for it. Only if the ordered service is
              not delivered within the stipulated time frame payment will be
              returned.
            </p>
          </Col>
          <Col></Col>
        </Row>
        <h1
          className="mt-md-5 mt-3"
          style={{
            fontFamily: "Cambria",
            fontWeight: "700",
            fontSize: "34px",

            color: "#000000",
          }}
        >
          Cancellation Policy..
        </h1>
        <Row>
          <Col>
            <p
              className="my-md-5 my-3"
              style={{
                fontFamily: "Arial",
                fontWeight: "400",
                fontSize: "19px",
                color: "#000000",
              }}
            >
              Customer can request the cancellation of the order only when the
              order is in process. Once signed in to the system and registered
              an order, it cannot be cancelled.
              <br />
              <br />
              The decision regarding the refund and cancellation policy is
              solely taken by CDR For Engineer and is final.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default RefundPolicy;
