import React from "react";
import Head from "next/head";
import {useRouter} from 'next/router'

const OurAgents = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const agents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
  return (
    <div>
     
        <Head>
        <title>Meet Our Agents | CDR For Engineer</title>
        <meta name="description" content="Meet Our Agents | CDR For Engineer" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 style={{fontFamily:"Arial",fontSize:"34px",textAlign:'center', fontWeight:"700"}}>OOPS THIS PAGE IS </h1>
        <h1 style={{fontFamily:"Arial",fontSize:"34px",textAlign:'center',color:"#360b62 ", fontWeight:"700"}}> UNDER CONSTRUCTION</h1>
        <p>Sorry for the inconvenience. This Page will be avaiable Soon</p>
        <img src="/images/comming-soon.png" alt="under construction"/>
      </div>
      {/* <div
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
              <h1 className="mt-1  text-center text-md-start">
                Meet Our Agents{" "}
              </h1>
              <p className="text-center text-md-start my-4">
                CDR For Engineer Writer Australia &gt;<strong> Meet Our Agents</strong>
              </p>
            </Col>

            <Col className="mt-5" md={6} xs={12}></Col>
          </Row>
        </div>
      </div>
      <Container>
        <Row className="mt-5">
          {agents.map((a, index) => {
            return (
              <Col key={index} md={3} xs={6} className="p-3">
                <Card
                  className="mb-2"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                  }}
                >
                  <Row className="p-2">
                    <img
                      src="/images/agent.jpg"
                      alt="agent"
                      className=" img-fluid rounded"
                      style={{ height: "300px", width: "300px" }}
                    />
                  </Row>
                  <Row className="ps-2 my-2">
                    <Col
                      style={{
                        fontFamily: "Century Gothic",
                        fontSize: "22px",
                        color: "#370C64",
                        fontWeight: "600",
                      }}
                    >
                      Anna Ahuja
                    </Col>
                    <Col
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#5A5757",
                        fontWeight: "400",
                      }}
                    >
                      CDR Agent
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center align-items-center mb-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        style={{
                          background: "#370C64",
                          padding: "9px 7px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <i
                          style={{ fontSize: "15px" }}
                          className="fa-solid fa-phone mx-1"
                        ></i>
                      </div>
                      <div
                        style={{
                          background: "#370C64",
                          padding: "9px 7px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <i
                          style={{ fontSize: "15px" }}
                          className="fa-brands fa-linkedin-in mx-1"
                        ></i>
                      </div>
                      <div
                        style={{
                          background: "#370C64",
                          padding: "9px 7px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <i
                          style={{ fontSize: "15px" }}
                          className="fa-brands fa-twitter mx-1"
                        ></i>
                      </div>
                      <div
                        style={{
                          background: "#370C64",
                          padding: "9px 7px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <i
                          style={{ fontSize: "15px" }}
                          className="fa-brands fa-instagram mx-1"
                        ></i>
                      </div>
                      <div
                        style={{
                          background: "#370C64",
                          padding: "9px 7px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          margin: "5px 3px",
                          borderRadius: "100%",
                        }}
                      >
                        <i
                          style={{ fontSize: "15px" }}
                          className="fa-brands fa-facebook-f mx-1"
                        ></i>
                      </div>
                    </div>
                  </Row>
                </Card>
                <Row className="d-flex justify-content-center align-items-center">
                  <Button
                    className="px-4"
                    style={{
                      fontSize: "18px",
                      width: "fit-content",
                      borderRadius: "10px",
                      background: "#0EAF00",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <i
                      style={{ fontSize: "20px" }}
                      className="fa-brands fa-whatsapp me-2 "
                    ></i>
                    Talk with Anna
                  </Button>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container> */}
    </div>
  );
};

export default OurAgents;
