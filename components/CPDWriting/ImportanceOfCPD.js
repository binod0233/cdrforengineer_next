import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import CheckIcon from '@mui/icons-material/Check';


const ImportanceOfCPD = () => {
  return (
    <Container>
      <PurpleHeading title="What is the importance of CPD?" />
      <Row>
        <Col md={8} className="px-5">
          <TextParagraph
            content="It is essential to know about CPD Report writing for Engineers Australia to ensure you are competent in your profession. Here is few importance of CPD,also known as Continuing professional development"
            family="Arial"
          />
        </Col>
        <Col md={4} className="px-5">
          <img src="/images/what-is-cpd.jpg" alt="what is CPD" />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          <CheckIcon className="fa-solid fa-check mt-2" style={{ float: "right" }}/>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="A well-crafted CPD Report writing for Engineers Australia ensures all your abilities keep pace with the current standards of others in the same domain."
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          <CheckIcon className="fa-solid fa-check mt-2" style={{ float: "right" }}/>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="    
            CPD also ensures that you maintain all the skills and knowledge you need to deliver a professional service to the clients, customers as well as the community.
            "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          <CheckIcon className="fa-solid fa-check mt-2" style={{ float: "right" }}/>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="CPD Report Writing ensures that you and your knowledge and skills stay up to date and aware of your profession's recent trends and directions.
            "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          <CheckIcon className="fa-solid fa-check mt-2" style={{ float: "right" }}/>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="CPD also  helps  you  stay  to  make  acountable  contribution  to  your  team. You become more proactive in the workplace
            "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          <CheckIcon className="fa-solid fa-check mt-2" style={{ float: "right" }}/>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="CPD helps to stay updated where you can advance the aspects of knowledge and technology within your career profession."
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          <CheckIcon className="fa-solid fa-check mt-2" style={{ float: "right" }}/>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="CPD  helps to  make  you  stay  knowledgeable  and  updated. A well-written CPD opens  you tonew  possibilities, new  skills,and  new  knowledge in  your  career profession
        "
            family="Arial"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
          <CheckIcon className="fa-solid fa-check mt-2" style={{ float: "right" }}/>
        </Col>
        <Col xs={11} md={11}>
          <TextParagraph
            content="CPD helps you to develop public confidence in your career profession."
            family="Arial"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImportanceOfCPD;
