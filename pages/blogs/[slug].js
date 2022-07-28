import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";
import PurpleHeading from "../../components/PurpleHeading";
import axios from "axios";
import DesignBubble from "../../components/DesignBubble";
import BlogCard from "../../components/Blog/BlogCard";

const SpecificBlog = () => {
  const router = useRouter();
  const id = router.query.slug;
  // const [data,setData] = useState(dat)
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <div>
      <Head>
        <title>{id}</title>
        <meta name="description" content={id} />
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
        <div className="px-5 ">
          <Row>
            <p className="mt-5  text-center text-md-start text-white">
              Home &gt; Blogs &gt; Australia Migration &gt;{" "}
              {/* <strong>{title}</strong> */}
            </p>
          </Row>
        </div>
      </div>
      <Container>
        {" "}
        <div className="row pt-3">
          <div className=" shadow-sm col">
            <div className="card-body">
              <p
                className="card-text"
                style={{
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "17px",
                  color: "#370C64",
                }}
              >
                Australia Migration
              </p>
              <p
                className="card-text"
                style={{
                  fontFamily: "Century Gothic",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#370C64",
                }}
              >
                Best CDR writing services for engineers Australia{" "}
              </p>
              <p
                className="card-text"
                style={{
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "17px",
                  color: "#666666",
                }}
              >
                Competency Demonstration Report (CDR) is an essential document
                that showcases your engineering skills and Knowledge to meet
                Australian standards. EA is the central authority that examines
                the CDR Report of Engineering Applicants.
              </p>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "17px",
                  color: "#370C64",
                }}
              >
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
            // lalyout="fill"
            // width={20}
            // height={20}
            // src="../../public/images/blog/BLOgs3.png"
            className="col"
            style={{ width: "20%", height: "260px" }}
          />
        </div>
        <Row className="pt-5">
          <Col xs={8}></Col>
          <Col>
            <Stack gap={3}>
              <div className="bg-light border">
                <h3>Table of Content</h3>
                <p>data 1</p>
                <p>data 1</p>
                <p>data 1</p>
                <p>data 1</p>
                <p>data 1</p>
                <p>data 1</p>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
                }}
              >
                <Row className="m-0 p-4 " style={{ color: "white" }}>
                  <h5 className="pb-2">
                    World-class articles, delivered weekly.
                  </h5>
                  <Form.Control
                    placeholder="Add your item here..."
                    className="mb-2 "
                  />
                  <Button variant="danger ">Suscribe</Button>
                  <p className="pt-2 ">
                    Subscription implies consent to our privacy policy
                  </p>
                  {/* <Row className=" p-5">
                   
                  </Row> */}
                </Row>
              </div>
              <h3>want to share</h3>
              <div className="d-flex    ">
                <Button
                  variant="white"
                  size="sm"
                  // className="bg-light"
                  style={{
                    backgroundColor: "#EEDDFF",
                    color: "#461578",
                  }}
                  width="10%"
                >
                  Share on Facebook
                </Button>{" "}
                <div className="px-5">
                  <Button
                    variant="white"
                    size="sm"
                    // className="bg-light"
                    style={{
                      backgroundColor: "#EEDDFF",
                      color: "#461578",
                    }}
                  >
                    Share on Twitter
                  </Button>{" "}
                </div>
              </div>
              <div className="d-flex    ">
                <Button
                  variant="white"
                  size="sm"
                  // className="bg-light"
                  style={{
                    backgroundColor: "#EEDDFF",
                    color: "#461578",
                  }}
                  width="10%"
                >
                  Share on Facebook
                </Button>{" "}
                <div className="px-5">
                  <Button
                    variant="white"
                    size="sm"
                    // className="bg-light"
                    style={{
                      backgroundColor: "#EEDDFF",
                      color: "#461578",
                    }}
                  >
                    Share on Twitter
                  </Button>{" "}
                </div>
              </div>
              <h2>trending articles</h2>
              <Row>
                <p>Australia Migration</p>
                <p>Australia Migration Australia Migration</p>
                <hr className="bg-danger border-2 border-top border-danger" />
              </Row>
              <Row>
                <p>Australia Migration</p>
                <p>Australia Migration Australia Migration</p>
                <hr className="bg-danger border-2 border-top border-danger" />
              </Row>
              <Row>
                <p>Australia Migration</p>
                <p>Australia Migration Australia Migration</p>
                <hr className="bg-danger border-2 border-top border-danger" />
              </Row>
              <h2>Read Next</h2>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <h2>Our Blog Categories</h2>
              <div className="d-flex    ">
                <Button
                  variant="white"
                  size="sm"
                  // className="bg-light"
                  style={{
                    backgroundColor: "#EEDDFF",
                    color: "#461578",
                    borderRadius: "20px",
                  }}
                  width="10%"
                >
                  Success
                </Button>{" "}
                <div className="px-5">
                  <Button
                    variant="white"
                    size="sm"
                    // className="bg-light"
                    style={{
                      backgroundColor: "#EEDDFF",
                      color: "#461578",
                      borderRadius: "20px",
                    }}
                  >
                    Success
                  </Button>{" "}
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start bd-highlight">
                <Button
                  variant="white"
                  size="sm"
                  // className="bg-light"
                  style={{
                    backgroundColor: "#EEDDFF",
                    color: "#461578",
                    borderRadius: "20px",
                  }}
                >
                  Success
                </Button>{" "}
              </div>
              <h2>How Was the Blog</h2>
              <div className="d-flex    ">
                <Form.Control type="email" placeholder="Full Name" />

                <div className="px-2">
                  <Form.Control type="email" placeholder="Email" />
                </div>
              </div>
              <div
                className="d-flex flex-row justify-content-start "
                style={{ height: "12rem" }}
              >
                <Form.Control type="email" placeholder="Comment" />
              </div>
              <Button
                variant="danger"
                style={{
                  alignSelf: "center",
                  color: "white",
                  width: "80%",
                }}
              >
                Post Comment
              </Button>{" "}
              <br />
            </Stack>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          background:
            "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
        }}
      >
        {/* <Stack gap={3} style={{ color: "white" }}> */}
        <div
          className="d-flex align-items-center flex-column bd-highlight mb-3"
          style={{ color: "white", height: "200px" }}
        >
          {/* <DesignBubble colour="yellow" bottom="-6rem" right="-39rem" /> */}
          <div className="">
            <h2 className="px-3" style={{ textAlign: "center" }}>
              We CDRforengineer known for Best Quality CDR writing and reviewing
              service agency strive to help each field of engineers get the 100%
              Approval outcome.
            </h2>
          </div>
          <div className="">
            Subscription implies consent to our privacy policy
          </div>
          <Button variant="danger " className="">
            Suscribe
          </Button>
        </div>
        {/* </Stack> */}
      </div>
      <div className="album py-5 ">
        <div className="container">
          <h2 className="pb-5">Most-read Articles</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default SpecificBlog;
