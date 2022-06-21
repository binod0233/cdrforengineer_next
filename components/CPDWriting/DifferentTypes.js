import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";

const DifferentTypes = () => {
  return (
    <div style={{ background: "#F8FCFF" }}>
      <Container>
        <PurpleHeading title="What are the different types of CPDfor Engineers Australia?" />
        <p
          className="documentsForStageList"
          style={{
            color: "#666666",
            fontSize: "20px",
            fontFamily: "Arial",
          }}
        >
          CPD Report writing for Engineers Australia is a crucial part of the
          report. It is theprocess of keeping a tab on the level of your
          skills,knowledge, and overall experience you have gained during your
          learning period.Types of CPD learningvary significantly and also
          includes different learning method. Let’sexplore the different types
          of CPD for <strong>Engineers Australia:</strong>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          className="px-5 py-5"
        >
          <div style={{ width: "330px" }} className="px-4 py-5">
            <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
              <h5
                className="CPDCardHeading"
                style={{
                  textAlign: "center",
                  color: "#370B63",
                  fontFamily: "Century Gothic",
                  fontWeight: "600",
                }}
              >
                Structured CPD{" "}
              </h5>
              <p
                className="documentsForStageList my-3 my-md-2"
                style={{
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                }}
              >
                In a CPD Statement Writing structured CPD covers Aspects like
                attending training courses, workshops, conferences, e-learning
                courses, seminars, and CPD certified events.
              </p>
            </div>
          </div>
          <div style={{ width: "330px" }} className="px-3 py-5">
            <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
              <h5
                style={{
                  textAlign: "center",
                  color: "#370B63",
                  fontFamily: "Century Gothic",
                  fontWeight: "600",
                }}
                className="CPDCardHeading"
              >
                Reflective CPD
              </h5>
              <p
                className="documentsForStageList my-3 my-md-2"
                style={{
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                }}
              >
                Reflective CPD in CPD Statement Writing involves no
                participant-based interactions, so this kind of Continue
                professional development also known as CPD in CPD Report writing
                for engineers Australia is more directional and passive.
              </p>
            </div>
          </div>
          <div style={{ width: "330px" }} className="px-3 py-5">
            <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
              <h5
                style={{
                  textAlign: "center",
                  color: "#370B63",
                  fontFamily: "Century Gothic",
                  fontWeight: "600",
                }}
                className="CPDCardHeading"
              >
                Self-directed CPD
              </h5>
              <p
                className="documentsForStageList my-3 my-md-2"
                style={{
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                }}
              >
                Self-directed CPD in CPD Report Writing covers all the
                unaccompanied CPD activities. unaccompanied CPD activities
                include the reading of documents, articles, and publications in
                a print or online form.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DifferentTypes;
