import React, { useState } from "react";
import Head from 'next/head'
import { Col, Row, Card, Pagination, Container } from "react-bootstrap";
import PrupleHeading from "../components/PurpleHeading";
import {useRouter} from 'next/router'


const Testimonials = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const testimoniallist = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 18, 19,
  ];
  const pageSize = 6;
  const numberOfPages = testimoniallist.length / pageSize;
  const [list, setList] = useState(testimoniallist.slice(0, 6));
  const [active, setActive] = useState(1);
  const onPageChange = (pageNumber) => {
    setActive(pageNumber);
    setList(
      testimoniallist.slice((pageNumber - 1) * pageSize, pageSize * pageNumber)
    );
  };
  let items = [];
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item
        style={{
          borderColor: "#370C64 !important",
          color: "#370C64 !important",
        }}
        key={number}
        active={number === active}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
    
      <Head>
        <title>Testimonials | CDR For Engineer</title>
        <meta name="description" content="Testimonials | CDR For Engineer"/>
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
              <h1 className="text-center text-md-start my-4">
                Home &gt; <strong>Testimonials</strong>
              </h1>
            </Col>

            <Col className="mt-5" md={6} xs={12}></Col>
          </Row>
        </div>
      </div>
      <Container>
        <PrupleHeading title="Testimonials" />
        <Row className="mt-5">
          {list.map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="p-3">
                <Card
                  className="mb-2"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                  }}
                >
                  <i
                    className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "40px", top: "-20px", right: "20px" }}
                  ></i>
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <i
                      className="fa-solid fa-star"
                      style={{ margin: "5px" }}
                    ></i>

                    <i
                      className="fa-solid fa-star"
                      style={{ margin: "5px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ margin: "5px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ margin: "5px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ margin: "5px" }}
                    ></i>
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      Very impressed with their work. Detailed writing without
                      missing a thing. Very happy with the customer care team.
                      Will use your service again.
                    </p>
                  </Row>
                  <div
                    className="d-flex  align-items-center mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={3}>
                        <img
                          src="/images/agentAvatar.jpg"
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                      </Col>
                      <Col xs={9} className="text-white pt-2 pl-5">
                        <strong>Jessica lamichhane</strong>
                        <br />
                        <p>England</p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
        <div className="d-flex justify-content-center">
          <Pagination>{items}</Pagination>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
