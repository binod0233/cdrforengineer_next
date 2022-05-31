import React from "react";
import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";

const CDRAssessmentsComponent = () => {
  return (
    <div className="pt-3" style={{ background: "#F1F1F1" }}>
      <PurpleHeading title="Components of CDR Assessment" />

      <Container>
        <Row className="bg-white px-5 mt-4 mb-5">
          <img
            src="/images/componentsofcdr.jpg"
            alt="Components of CDR Assessment"
          />
        </Row>
        <Row>
          <FancyTabs
            data={[
              {
                details: (
                  <div className="tabContent">
                    <strong>Passport Size Photo: </strong>A passport size photo
                    of yourself should be clearly visible and up to date.
                    <br />
                    <br />
                    <strong>Prime ID: </strong>You should have to provide your
                    updated passport bio-data page or a scanned national ID
                    (identity card).
                    <br />
                    <br />
                    <strong>Name change documentation:</strong> If the name you
                    have been using has changed over the course showing
                    different names in academic documents and documents after
                    that, you need to provide the supporting document for a name
                    change.
                    <br />
                    <br />
                    <strong>Curriculum Vitae (CV)/ Resume:</strong>CV
                    (curriculum vitae)/Resume is a very important component of
                    CDR Assessment where it covers all your Engineering level
                    education, work experience you have gained so far.
                    Similarly, you should mention all the activities that you
                    have taken up in your career profession along with inactive
                    periods. keep in mind that your CV should be in a perfect
                    format listing all your work by following the guidelines of
                    the MSA booklet for Engineers Australia (EA). Work
                    Experienced details must include:
                    <br />
                    <br />
                    * Details of an organization like (Name, location, contact
                    details).
                    <br />
                    * Time period of employment like (Date, duration).
                    <br />
                    * Your designation in the period of employment (if multiple
                    designations mention all).
                    <br />
                    * Describe the summary of the roles in the organization
                    along with it including all the projects that you did in the
                    period of employment in the company.
                    <br />
                    <br />
                    <strong>Language Competency (English):</strong> All the test
                    results of the English Language competency test should be
                    provided as proof. English Language competency test covers
                    (IELTS, TOEFL, PTE).
                  </div>
                ),

                title: "Personal Information",
              },
              {
                details: (
                  <div className="tabContent">
                    You have to choose the engineering domain in which you
                    search for an assessment. Along with that, you need to
                    provide proof and evidence of your professional
                    registration, if applicable.
                  </div>
                ),
                title: "Application Information",
              },
              {
                details: (
                  <div className="tabContent">
                    You have to provide proof and evidence of the educational
                    qualifications that you described along with all the scanned
                    copies of certificates, degrees, as well as official
                    transcripts. If you have more than one engineering
                    qualification as well as enrolled in any formal education
                    program then also provide all those details documents like
                    (letter of your enrollment, current transcript).
                  </div>
                ),
                title: "Education",
              },
              {
                details: (
                  <div className="tabContent">
                    All the documents of your work experience must be provided
                    as proof and evidence in case the document is not in the
                    English language it should be translated and while
                    translation keeps in mind it should be by an authorized
                    translator.
                  </div>
                ),
                title: "Employment",
              },
              {
                details: (
                  <div className="tabContent">
                    The High-Quality CDR report must contain three types of
                    career episodes along with a merged summary statement and a
                    CPD Report which is Continuing Professional Development
                    Document Report.
                  </div>
                ),
                title: "CDR Report",
              },
            ]}
          />
        </Row>
      </Container>
    </div>
  );
};

export default CDRAssessmentsComponent;
