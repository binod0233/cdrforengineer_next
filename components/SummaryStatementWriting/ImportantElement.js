import React from "react";
import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const ImportantElement = () => {
  return (
    <div style={{ background: "#F1F1F1" }}>
      <PurpleHeading title="Elements for high-Quality summary statement Report" />
      <Container>
        <Row>
          <img src="/images/important-element.jpg" alt="important element" />
        </Row>
        <TextParagraph
          family="Arial"
          content="Your  Summary  statement Report should  be in little words and cover  an  individual’s summary competencies that strongly indicate the career episodes for a nominated field or domain. We pay special attention to this element while writing a high-quality Summary Statement Report."
        />
        <Row>
          <FancyTabs
            data={[
              {
                details: (
                  <div>
                    Skills and knowledge are the two most critical and crucial
                    traits that (EA) engineers Australia look for in engineering
                    Applicants.If you can adequately express all of your skills
                    and knowledge appropriately, you will have a chance to
                    receive 100 % Approval from Engineers Australia (EA). By
                    keeping these essential elements in mind, we are here to
                    guide and assist you in obtaining a good assessment from EA
                    on your first attempt.We at Cdr For Engineer first clearly
                    understand your skills and knowledge and quickly provide you
                    with the best CDR Summary Statement report.
                  </div>
                ),

                title: "Skills and knowledge",
              }, 
              {
                details: (
                  <div>
                    When applying for a migration skills Assessment visa,
                    engineers can apply for one of four domains,the most
                    well-known is professional Engineer. When it comes to the
                    significance of summary report writing, it is the first
                    impression that an EA will have of you as the best
                    applicant. Summary Statementis a special section to
                    demonstrate all your technical capabilities and skills as an
                    engineer. We read each description carefully and link them
                    to proper instances in your career episodes report. Our
                    professional report writers first understand your purpose
                    and ensure concise information because nobody likes to read
                    lengthy texts. We can proudly say we are different from
                    other consultants because we focus on quality and are
                    result-oriented.
                  </div>
                ),
                title: "Engineering Applicability",
              },
              {
                details: (
                  <div>
                    Professional and personal Abilities Play an essential role
                    in getting positive Assessments from EA. Itis mandatory to
                    include all your engineering skills and characteristics such
                    as communication, social and leadership, and behavioural
                    aspects to make an effective and appropriate summary
                    statement Report.Your career episode fully determines your
                    summary statement, so you should prepare it in a suitable
                    format list and double-check it to avoid errors and
                    inaccuracies.
                  </div>
                ),
                title: "Professional and personal Abilities",
              },
            ]}
          />
        </Row>
      </Container>
    </div>
  );
};

export default ImportantElement;
