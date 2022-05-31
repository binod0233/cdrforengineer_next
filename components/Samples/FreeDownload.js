import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const FreeDownload = () => {
  return (
    <Container>
      <PurpleHeading title="Free Download CDR Sample" />
      <Row>
        <Col md={8} className="pt-5">
          <TextParagraph
            content="We provide Various CDR Report samples on different Engineering disciplines. All CDR 
Report samples offered by us were all positively examined by the EA and prepared by 
our certified professionals in compliance with the Migration Skill Assessment standard. 
About using our CDR Offerings, one may review our CDR Sample, which will be extremely 
beneficial for guidance. Examine our CDR Samples and get assistance from our Experts 
Writers for crafting the Best CDR Report in obtaining a Positive Assessment from
Engineers Australia."
            family="Arial"
          />
        </Col>
        <Col md={4} style={{ zIndex: "-1" }}>
          <img
            src="/images/Samples/laptopGuy.jpg"
            alt=" free sample"
            className="img-fluid"
            style={{ marginTop: "-70px", zIndex: "-1" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FreeDownload;
