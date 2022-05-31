import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const CDRSample = ({
  title,
  titleDetails,
  image,
  secondTitle,
  secondTitleSecond,
  secondTitleSecondDetails,
}) => {
  return (
    <Container>
      <PurpleHeading title={title} />
      <TextParagraph content={titleDetails} family="Arial" />
      <Row>
        <img src={image} alt="engineering sample" />
      </Row>
      <PurpleHeading title={secondTitle} />
      <PurpleHeading title={secondTitleSecond} />

      <TextParagraph content={secondTitleSecondDetails} />
    </Container>
  );
};

export default CDRSample;
