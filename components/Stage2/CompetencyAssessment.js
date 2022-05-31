import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const CompetencyAssessment = () => {
  return (
    <Container>
      <Row className="py-4">
        <img
          src="/images/stage-2.png"
          alt="Stage 2 Competency Assessment for Engineers Australia"
        />
      </Row>
      <Row>
        <PurpleHeading title="Stage 2 Competency Assessment for Engineers Australia " />
        <TextParagraph
          content="Engineers are seeking  to  practice  independently  or  unsupervised  need  to  consider  various knowledge  and  skill  base,  application  ability  of  engineering  skills, attitudes,  ethics,  and professional. To obtain a chartered status of a professional engineer, all the engineer applicants who wish to apply for registration on the national engineering register should go throughastage 2 competency assessment process. In thisstage 2 competency assessment process, we CDR For Engineer will   guide   and   assist   you   increating   lasting   impressions   on   engineering competency"
          family="Arial"
        />

        <PurpleHeading title="What is Stage 2 Competency Assessment for Engineers Australia?" />
        <TextParagraph
          content="To  achieve  Chartered  professional  engineer  status,  all  the  students  or  Applicants  much  go through  a  Stage  2  Competency  Assessment  for  Engineers  Australia.  Stage  2  Competency Assessment reflects  the  applicant’s  knowledge,  skills,  technical  abilities,  principles,   and disciplines performing  work  individually  or  unaccompanied. Chartered  professional  engineer statusis  the  peak  professional  competencies  achieved  through  many  years  of  hardships  and experience. To be a chartered professional engineer or get recognisedas a Chartered professional engineer, show all your skills to test in various domains of expertise"
          family="Arial"
        />
      </Row>
    </Container>
  );
};

export default CompetencyAssessment;
