import React from "react";
import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const CDRWants = () => {
  return (
    <div style={{ background: "#F1F1F1" }}>
      <Container>
        <PurpleHeading title="CDR For Engineer guides you on essential elements of the stage 1 competency assessment" />
        <TextParagraph
          content="Competency is the ability to perform activities within an occupation to standards expected and recognised by  employers  and  the  community.  Each  competency  is  made  up  of elements to explain  a  specific performance area. Competencyelements playa crucialrolein the Stage 1 competency assessment. All three occupational domains comprise details for the parts.Explore all the competencies and the aspects of CDR Stage 1 Competency Assessment for Engineers Australia with CDR For Engineer"
          family="Arial"
        />

        <Row>
          <FancyTabs
            data={[
              {
                details: (
                  <div>
                    {" "}
                    You need to know engineering techniques and know-how and
                    when to use your skills.Let’s talk about all the elements it
                    comprises
                    <br />
                    <br />
                    • Conceptual understanding of mathematics
                    <br />
                    • Basic understanding of numerical and computer knowledge
                    <br />• Understanding of the scope, principles, norms of the
                    engineering `
                  </div>
                ),

                title: "Knowledge and skills base",
              },
              {
                details: (
                  <div>
                    One should have some idea of solving basic and necessary
                    problems also you should know how to apply things where that
                    means an idea to use tools and resources at the right place
                    in a particular period of time. Its elements consist:
                    <br />
                    <br />
                    • Fluent Application of techniques, tools, and resources of
                    engineering
                    <br />
                    • Understanding of methods to conduct and management of
                    engineering projects.
                    <br />
                  </div>
                ),
                title: "Engineering Capability",
              },
              {
                details: (
                  <div>
                    One should be very professional when it comes to team
                    management and work balance. It would be best if one should
                    have a clear best quality idea about works and should know
                    how to conduct yourself. It consists of the following
                    elements:
                    <br />
                    <br />
                    • Effective oral and written communication
                    <br />
                    • Creative, innovative, proactive behavior
                    <br />
                    • Effective leadership Ability
                    <br />
                  </div>
                ),
                title: "Professional and Personal Ability",
              },
            ]}
          />
        </Row>
      </Container>
    </div>
  );
};

export default CDRWants;
