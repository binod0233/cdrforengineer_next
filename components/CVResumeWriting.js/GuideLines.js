import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const GuideLines = () => {
  return (
    <Container>
      <PurpleHeading title=" Things to Consider When Writing a Best CDR Cv-Resume Report" />
      <Row>
        <TextParagraph
          content="Cv-Resume Writing for CDR Report is an essential document that acts as a link between you and your dream job. CDR Cv-Resume writing represents a positive impression on Engineers Australia, including educational history, work experience, accomplishments, certifications, and objectives (EA). A cv is also known as a curriculum vitae. When writing a CV-Resume, follow all of Engineers Australia's (EA) criteria in the Migration Skills Assessment (MSA)booklet."
          family="Arial"
        />
      </Row>
      <p
        className="thingsToConsiderTitle"
        style={{
          color: "#666666",
          fontSize: "20px",
          fontFamily: "Arial",
        }}
      >
        <strong>
          Engineers Australia (EA) rules and guidelines as outlined in the
          Migration Skills Assessment (MSA) booklet:
        </strong>
      </p>
      <Row>
        <Col xs={1} md={1}>
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="Cv-Resume Writing for CDR Report length should be between three and five pages, and pages should be A4 sized paper."
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="    
            The font size for a CV-Resume for a CDR Report should be between 11 and 12 because small font sizes are difficult to read for Engineers Australia (EA).
        "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="Because technology advances rapidly, it is no longer necessary to list all of your previous employment more than ten years ago.
        "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="Grammatical plays a vital role be aware of grammatical issues for getting 100 % Approval from Engineers Australia (EA), so always go for CDR Cv-Resume writing help in Australia."
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="One should be transparent because whatever details you provide will verify later during your interview period or by your reference.
        "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="  
            Avoid saying details such as prior earnings and bonus payments because these details will verify later during your interview.
    "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="CDR Cv-Resume writing should be inperfect English so that Engineers Australia (EA) can adequately grasp it."
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="Include your extracurricular activities, hobbies, and involvement in any membership organisations or groups."
            family="Arial"
          />
        </Col>
      </Row>
      {/* <Row>
        <Col md={1}>
          {" "}
          <i
            className="fa-solid fa-check mt-2 text-danger"
            style={{ float: "right" }}
          ></i>
        </Col>
        <Col md={11}>
          <TextParagraph
            content="Finally, include all of your extracurricular activities and hobbies, as well as any groups or membership organizations to which you belong.
     "
            family="Arial"
          />
        </Col>
      </Row> */}
    </Container>
  );
};

export default GuideLines;
