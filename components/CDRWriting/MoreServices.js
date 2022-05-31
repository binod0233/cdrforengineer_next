import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";

const MoreServices = () => {
  const moreServices = [
    {
      title:
        "1. Career Episode Report Writing service by Experienced professionals.",
      paragraph: `Career episode report writing is a crucial part of CDR Report writing that needs more attention and effort for making a good impression on (EA) 
    Engineers Australia. It demonstrates different aspects of engineering work, skills, knowledge, and working experience. All the Aspirants Applicants 
    need to submit three career Episodes to EA that reflect your skill, knowledge, capacity as well as experience in the engineering field so you need 
    to choose the best writers from engineering backgrounds to showcase your competencies as per Engineers Australia Guidelines. Our Professional 
    Writers are experts in career episode repost writing as per your requirements before deadlines.`,
    },
    {
      title: "2. Summary statement writing  ",
      paragraph: `Summary Statement writing covers a brief explanation of all three Career episodes prepared by an applicant mentioned in the CDR Report. If we 
    talk about its basic structure it is in tabular form as instructed by (EA) Engineers Australia. We know the first impression is the last impression so 
    make a good first impression with a very quick summary of all of the three career episodes.CDRAustraliaMigration is here to help you cover all the 
    aspects and elements needed in your summary statement.`,
    },
    {
      title: "3. Continuing professional Development Writing service",
      paragraph: `CPD continuing professional Development for (EA) Engineers Australia is one of the important parts of CDR (Competency Demonstration Report) 
    for Australia skill migration and it cannot be taken for granted. CPD for EA is a record or documentation of the professional experience like knowledge, 
    skills, experience, internship or training, surveys, etc gained by the engineer in the field of engineering. CPD structure format should be in a list format 
    and it is usually classified into two parts they are training based and development based so you need professional experience writers to prepare your 
    continuing professional Development writing (CPD).`,
    },
    {
      title: "4. CV or Resume writing service",
      paragraph: `CV which is also known as curriculum vitae or Resume writings for EA-Engineers Australia should be written precisely and perfectly by following the 
    formats in the right ways. A clearly and perfectly written CV or Resume covering all elements such as educational background, work experience, 
    accomplishments, objectives, and important credentials is the best way to create a positive impression on the (EA) engineers in Australia. we  CDR
    Australiamigration provides the best quality CDR, CV, or Resume writing services for Engineers Australia by following all the strict rules and guidelines 
    mentioned in the MSA booklet.`,
    },
  ];
  return (
    <Container>
      <PurpleHeading title="What Other Services are Included in CDR Writing Services?" />
      <p className="cdrWritingP">
        CDR For Engineer always focuses on quality. We believe only quality brings
        100% positive assessment, and with the quality, we can beat every
        competitor in Australia. We have professional and expert writers who
        provide all the writing documents in CDR Report Writing to maintain
        quality.
      </p>

      <p className="cdrWritingP">
        Suppose you are an engineer or a student looking to relocate to
        Australia for better opportunities. In that case, we are here to help
        with our most demanding services in CDRreport writing with accuracy and
        100 % originality.
      </p>
      <p className="cdrWritingP">Know more about our demanding services:</p>

      {moreServices.map((m, index) => (
        <div key={index}>
          <h5 className="moreServicesTitle">
            <strong>{m.title}</strong>
          </h5>
          <p
            className="cdrWritingP"
            style={{ marginLeft: "30px", color: "#666666" }}
          >
            {m.paragraph}
          </p>
        </div>
      ))}
      <Row className="px-5 py-4">
        <Row className="px-5">
          {" "}
          <img
            src="/images/high-quality-CDR.jpg"
            alt="high-quality CDR Report"
          />
        </Row>
      </Row>
      <PurpleHeading title="Grab your high-quality CDR Report from CDR For Engineer." />
      <p className="cdrWritingP">
        Engineers who want to apply for a skilled migration visa to Australia
        might use the CDR Report to demonstrate their abilities. CDR-Competency
        Demonstration Report is the most crucial document for Aspirants who want
        to make a career in Australia.
      </p>
      <p className="cdrWritingP">
        We provide the best quality CDR Report Writing, KA02 Writing, ACS RPL
        Report Writing, IPENZ New Zealand, NER Australia, and P.Eng Canada
        services for engineers planning to migrate to Australia, New Zealand,
        Canada, and other countries. CDR For Engineer is the leading service
        provider of CDR Report writing services in Australia, ranking among the
        top-rated CDR Report writing services for EA Engineers Australia. We
        value quality and achieve100 % accurate positive assessment results.
      </p>
      <p className="cdrWritingP">
        Weworkhard to deliver promise serviceto our clients. Many
        engineeringclients have faith in us because of ourhigh-quality
        services.Allof our clientshave profited from the CDR report writing
        serviceswe provide. We have licensed professional engineers on theteam
        to provide quality CDRreport writing services. We have a 100% approval
        rate from relevant bodies in several countries.
      </p>
      <p className="cdrWritingP">
        We worked along with fixed deadlines by following all the strict rules
        and guidelines mentioned in the MSA booklet, which assists us in
        preparing high-quality CDR reports that are consistently approved by
        Engineers Australia (EA).
      </p>
    </Container>
  );
};

export default MoreServices;
