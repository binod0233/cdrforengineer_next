import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router';

import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
// import "./CareerEpisodeWriting.css";

const AustraliaGuarantees = () => {
  const router = useRouter();
  const cardContent = [
    {
      images: "/images/hand-icon.jpg",
      title: "Top Experienced professional Writers",
      data: `CDR For Engineer has  the  best  experienced  Professional  writers  from  an  engineering background to help you in preparing a high-quality Career Episode report without any  errors.  A  plagiarism  free  report boost syour  chance to  obtaina  Positive Assessment from Engineers Australia(EA).`,
    },
    {
      images: "/images/plagarism-icon.jpg",
      title: "No plagiarism 100 % original Content",
      data: `Our experienced expert writers are well-versed in the guidelines and structure of Career  Episode report  writing.  We implement  a  variety  of  plagiarism  detection tools to ensure that all work is 100 % perfect and unique`,
    },
    {
      images: "/images/thumbs-up.jpg",
      title: "100 % Approval Rate",
      data: `An experienced writer can draft better than a non-experienced writer. We proudly proclaim  that  CDR For Engineer prepares flawless CDR aswehave  well-experienced writers from an engineering  background.  We guarantee  you  a  100 % approval rate on your career episode report for EngineersAustralia(EA).`,
    },
    {
      images: "/images/grad-icon.jpg",
      title: "Delivery Beforethe deadline",
      data: `Time is a valuable asset. We understand the value of your time, we set appropriate deadlines for both ofus, and we adhere to them. Our expert writers work hard to deliver outstanding reports on time `,
    },
  ];
  return (
    <div style={{ background: "#F8FCFF" }}>
      <Container>
        <Row>
          <Col md={6}>
            <PurpleHeading title="Features of Engineers Australia Career Episode report writing services." />

            <TextParagraph
              family="Arial"
              content="We are renowned as Australia’s most successful CDR writing, 
RPL writing and KA02 writing service provider.The intellectual 
team of professional Writers, Experts, Engineers, IT Specialists, 
etc. provides high-quality CDR Services to the applicants. We 
help applicants from around the globe who want to migrate to 
Australia as a skilled workforce.
"
            />
            <TextParagraph
              family="Arial"
              content="
Our team of writers possess many years of experience in this 
field and are highly qualified personnel. We have almost a 100% 
success rate until now. We guarantee an excellent quality CDR 
Report with original content."
            />

            <Button
              className="text-white px-4 "
              style={{ background: "#753CAD" }}
              onClick={() => router.push("/cdr-samples")}
            >
              Get Sample
            </Button>
          </Col>
          <Col md={6}>
            <Row>
              {cardContent.map((c, index) => (
                <Col md={6} key={index} className="p-4">
                  <div className="australiaGuaranteesCard">
                    <div className="d-flex justify-content-center mt-3">
                      <img src={c.images} alt="experience" />
                    </div>
                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      <strong>{c.title}</strong>
                    </p>

                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      {c.data}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AustraliaGuarantees;
