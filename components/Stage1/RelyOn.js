import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const RelyOn = () => {
  return (
    <Container>
      <Row className="py-4 ">
        <img
          src="/images/rely-on.jpg"
          alt="Stage 1 Competency Assessment service provider for Engineers Australia"
        />
      </Row>
      <Row>
        <PurpleHeading title="Stage 1 Competency Assessment service provider for Engineers Australia" />
        <TextParagraph
          content="CDR For Engineer, based in Australia itself, offers professional Engineers with years of experience to assist you on Stage 1 Competency Assessment for Engineers Australia’s membership and National Registers. We are willing  to  review  and  revise  your  CDR  to ensure  that Engineers  Australia  will  assess  your  report. Professional writers from an engineering background with years of experience in CDR report writing make us the best stage 1 Competency Assessment service provider in Australia."
          family="Arial"
        />

        <PurpleHeading title="What is Stage 1 Competency Assessment for Engineers" />
        <TextParagraph
          content="Stage  1  Competency  Assessment  is  the  level  of  competency  needed  for  entry  to  practice  as  a  qualified member of the engineering team. Candidates writing CDR  holding engineering qualifications from overseas countries  which Engineers Australia  does  not  recognise have  to  show  their  competency through  Stage  1 assessment. Stage  1  competency  means  the professional has  a  thorough  knowledge  of  the  body  of engineering knowledge relevant to their occupational category.Stage 1 Competency Assessment is a CDR skill assessment for persons seeking recognition as eligible for membership  with  Engineers  Australia. Professionals  with  engineering  knowledge  applicable  to the occupational category as Engineering Technologist, Professional Engineer, or Engineering Associate need Stage 1 competency Assessment.Stage 1 Competency Assessment is also required for candidates holding Australian engineering qualifications that have not been accredited or approved by Engineers Australia. Each occupational category’s stage 1 competency Assessment standard consists of the following  three competencies"
          family="Arial"
        />
      </Row>
      <Row className="d-flex justify-content-center align-items-center my-4">
        <div
          style={{
            width: "fit-content",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            borderRadius: "8px",
            padding: "0 5px",
          }}
        >
          <div
            className="relyOnCard"
            style={{
              background: "#5813A0",
              boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              color: "white",
              padding: "10px 5px",
            }}
          >
            <strong> Competency No. 1:</strong>
          </div>
          <div
            style={{
              borderRadius: "5px",
              color: "black",
              padding: "10px 5px",
              width: "280px",
              paddingLeft: "10px",
            }}
          >
            <strong>Knowledge and skill base</strong>
          </div>
        </div>
      </Row>
      <Row className="d-flex justify-content-around align-items-center my-5">
        <div
          className="relyOnCard"
          style={{
            width: "fit-content",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            borderRadius: "8px",
            padding: "0 5px",
          }}
        >
          <div
            style={{
              background: "#5813A0",
              boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              color: "white",
              padding: "10px 5px",
            }}
          >
            <strong> Competency No 2:</strong>
          </div>
          <div
            style={{
              borderRadius: "5px",
              color: "black",
              padding: "10px 5px",
              width: "280px",
              paddingLeft: "10px",
            }}
          >
            <strong>Engineering Capability</strong>
          </div>
        </div>
        <div
          className="relyOnCard mt-5 mt-md-0"
          style={{
            width: "fit-content",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            borderRadius: "8px",
            padding: "0 5px",
          }}
        >
          <div
            style={{
              background: "#5813A0",
              boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              color: "white",
              padding: "10px 5px",
            }}
          >
            <strong>Competency No 3:</strong>
          </div>
          <div
            style={{
              borderRadius: "5px",
              color: "black",
              padding: "10px 5px",
              width: "280px",
              paddingLeft: "10px",
            }}
          >
            <strong> Professional and Personal Ability</strong>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default RelyOn;
