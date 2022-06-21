import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const HighQualityCareer = () => {
  return (
    <div style={{ background: "#F1F1F1" }}>
      <Container>
        <PurpleHeading title="Career Episode report format for Engineer Applicants." />
        <TextParagraph
          content="The career Episode report writing for engineer applicants is a basic unit of the CDR report. It  provides  detailed  information  on  technical  and  other  skills  of  all engineers who  are planning  to  reap  the  benefits  of  a  better  opportunity  in  Australia  via  migration  skills assessment visa."
          family="Arial"
        />
        <TextParagraph
          content="Here's a step-by-step sample format for writing a high-quality career episode report."
          family="Arial"
        />
        <Row>
          <img src="/images/writing-format.jpg" alt="writing format" />
        </Row>
        <Row>
          <FancyTabs
            data={[
              {
                details: (
                  <div>
                    When writing a career episode report, the first thing to
                    consider is the introduction section. The introduction
                    should be between 200 and 500 words in length. This section
                    defines your project objectives, the nature of all overall
                    engineering projects, and the work domain you want to
                    approve the project.
                  </div>
                ),

                title: "Introduction",
              },
              
              {
                details: (
                  <div>
                    This section includes all of your engineering work
                    experience. This part should be between 500 and 1000 words
                    long when it comes to length. In this section, you can
                    explain your role in the team, your role in the engineering
                    tasks that were assigned to you and how you completed them
                    to the best of your ability, engineering knowledge and
                    skills you used during the projects, and how you cooperated
                    with the team to complete the project.
                  </div>
                ),
                title: "Engineering Activity",
              },
              {
                details: (
                  <div>
                    The Career episode report concludes with a summary.This
                    section clearly and impressively summarises your overall
                    descriptions of the project or other engineering task you
                    did. This section should be 50 to 100 words in length.
                    Follow these steps to drafta career episode where you discuss
                    your project and your involvement in achieving the project&apos;s
                    objectives.
                  </div>
                ),
                title: "Summary",
              },
            ]}
          />
        </Row>
      </Container>
    </div>
  );
};

export default HighQualityCareer;
