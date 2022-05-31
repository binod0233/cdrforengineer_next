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
              // {
              //   details: (
              //     <div>
              //       The background section describes the context or project you
              //       mentioned and the objective of that project. The project,
              //       nature of the work area, and your roles and responsibilities
              //       on the project are introduced briefly in this section. In
              //       about 200 to 500 words, all the background information
              //       should be described. There are mainly five sections of the
              //       background part which are:
              //       <br />
              //       <br />
              //       <strong>Nature of the Project:</strong> The technicalities
              //       of the project are explained in brief, which describes what
              //       kind of project you are explaining in your career episode
              //       report and what area does it cater to.
              //       <br />
              //       <br />
              //       <strong>Objectives:</strong> The objectives of the project
              //       are elaborated.
              //       <br />
              //       <br />
              //       <strong>Nature of Your Work Area:</strong> The first section
              //       of the background contains information about the overall
              //       nature of the project, but in this part, you provide the
              //       details about the area of the project you worked on most of
              //       the time.
              //       <br />
              //       <br />
              //       <strong>Organizational Hierarchy Chart:</strong> To show
              //       your particular position in the project’s hierarchy during
              //       that specific Career Episode, you can use the Organization
              //       Chart.
              //       <br />
              //       <br />
              //       <strong>Roles and Responsibilities:</strong> You need to
              //       provide at least six roles that you performed during the
              //       project which show the technical aspects of the project. The
              //       tasks can be about calculations, design, analysis,
              //       fabrication/construction, testing, tackling problems, and
              //       even project management.
              //       <br />
              //     </div>
              //   ),
              //   title: "Background",
              // },
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
