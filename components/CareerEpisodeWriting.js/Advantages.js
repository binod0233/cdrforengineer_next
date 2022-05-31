import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const Advantages = () => {
  return (
    <Container>
      <PurpleHeading title="Benefits of HiringProfessional Career Episode Writer:" />
      {/* <TextParagraph
        family="Cambria"
        content="Career Episode Report writing for Engineer Applicants is an important unit of CDR Report that provides detailed information on technical 
and other skills of all the Aspirants students who are planning to grab a better opportunity in Australia via migration skills assessment visa."
      /> */}
      <Row>
        <Col md={1}>
          <div
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "auto",
              borderRadius: "50%",
            }}
          >
            <img
              src="/images/exp-small.png"
              alt="Professional writers"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        </Col>
        <Col md={11}>
          <TextParagraph
            family="Cambria"
            content="There  is  no  chance  of  error  or  other  forms  of  grammatical  mistakes from professional writers who have  prepared  thousands  of  career  episode  reports. Professional  career  episode  writer  will adhere  to  all  of  the  requirements  and structure,  ensuring  that  your CDR  and  Career  episode writing  report  are  of  high quality, reducing the possibility of rejection and increasing the rate of success."
          />
        </Col>
      </Row>

      <Row>
        <Col md={1}>
          <div
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "auto",
              borderRadius: "50%",
            }}
          >
            <img
              src="/images/exp-small.png"
              alt="Unique report"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        </Col>
        <Col md={11}>
          <TextParagraph
            family="Cambria"
            content="Our top professional career episode writers will ensure that the report is unique. We are aware of several sorts of plagiarism-checking software that demonstrate the originality of the work."
          />
        </Col>
      </Row>

      <Row>
        <Col md={1}>
          <div
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "auto",
              borderRadius: "50%",
            }}
          >
            <img
              src="/images/exp-small.png"
              alt="Value of your time"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        </Col>
        <Col md={11}>
          <TextParagraph
            family="Cambria"
            content="Our certified professional career episode writers are dedicated and appreciate the value of your time, they work hard to meet deadlines and finish writing your report on time."
          />
        </Col>
      </Row>

      <Row>
        <Col md={1}>
          <div
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "auto",
              borderRadius: "50%",
            }}
          >
            <img
              src="/images/exp-small.png"
              alt="Approval  rate"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        </Col>
        <Col md={11}>
          <TextParagraph
            family="Cambria"
            content="When  you hire  an  expert  writer,  your  approval  rate  will  be  high. You  will receive a positive assessment from EA on first attempt. It will to save you money and you will complete your professional episode writing in a short amount of time."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Advantages;
