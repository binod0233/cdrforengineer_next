import React from "react";
import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const ElementsOfCPD = () => {
  return (
    <Container>
      <PurpleHeading title="Elements of CPD described by engineers Australia" />
      <Row className="mb-4">
        <img src="/images/evaluate-cpd.jpg" alt="CPD evaluation" />
      </Row>
      <TextParagraph
        content="There are Four Elements of CPD described by Engineers Australia(EA). CPD Report writing for engineers Australia will be evaluated based on the following elements:"
        family="Arial"
      />
      <div style={{ background: "#F1F1F1", padding: "4%" }}>
        <FancyTabs
          data={[
            {
              details: (
                <div>
                  Personal Commitment should be written in the CPD Writing
                  format described by Engineers Australia (EA). Personal
                  Commitment in CPD Australia describes the engineer’s
                  Applicants’ or students’ positive behaviour in their workplace
                  and how they manage all the responsibilities for the
                  Engineering domain of their profession.
                </div>
              ),

              title: "Personal commitment",
            },
            {
              details: (
                <div>
                  Technical proficiency in CPD Australia covers all your
                  Engineering skills, knowledge, creativity, innovation, etc.
                </div>
              ),
              title: "Technical proficiency",
            },
            {
              details: (
                <div>
                  Value of workplace indicates your role to communicate at the
                  workplace to make a positive impact at the workplace. It also
                  reflects decision-making abilities and leadership skills.
                </div>
              ),
              title: "Value of Workplace",
            },
            {
              details: (
                <div>
                  Obligations to the community in CPD Statement Writing should
                  be in the correct CPD Writing format. High-quality CPD Report
                  Writing will be assessed based on how well the students or
                  engineers. Applicants carry the activities or are willing to
                  undergo risk for sustainable solutions.
                </div>
              ),
              title: "Obligations to the community ",
            },
          ]}
        />
        {/* <p
          style={{
            fontFamily: "Arial",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Obligations to the community in CPD Statement Writing should be in the
          correct CPD Writing format. High-quality CPD Report Writing will be
          assessed based on how well the students or engineers Applicants carry
          the activities or are willing to undergo risk for sustainable
          solutions.
        </p> */}
      </div>
    </Container>
  );
};

export default ElementsOfCPD;
