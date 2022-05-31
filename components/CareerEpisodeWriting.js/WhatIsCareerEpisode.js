import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const WhatIsCareerEpisode = () => {
  return (
    <Container>
      <PurpleHeading title="What is career episode report writing?" />
      <TextParagraph
        family="Arial"
        content="Career Episode report is the vital element of the CDRrequired by Engineers Australia to check your engineering skills and knowledge.CDR offers three different career episodes, each important in showcasing your engineering skills and expertise to get approval from Engineers Australia(EA). Engineers Australia provides a structure for preparing your career episode in the Migration Skills Assessment Booklet(MSA)"
      />
      <Row>
        <img src="/images/few-tips.jpg" alt="few tips" />
      </Row>

      <PurpleHeading title="Career Episode Report writing service providerfor Engineers Australia." />
      <TextParagraph
        family="Arial"
        content="Career Episode for Engineers Australia is one of the most crucial components of the CDR report writing process. It provides detailed information on the skills and other  technical knowledge that an engineer utilises in the project. While preparing Career Episodes,  adhere  to  all  of  Engineers  Australia's  criteria and guidelines. We have a number one team of licensed professional writers offering you the best quality  Career Episode  report  writing  service.  Showcasing  all  of  your  engineering skills, knowledge, and experience in your chosen sector, CDR For Engineer prepares the best CDR report as  per  your  specification. CDR For Engineer is  one  of Australia's top  career episodes Writing  service  providers. We  deliver a  high-quality  Career  Episode  report  in  the appropriate writing format that Engineers Australia recommends."
      />
    </Container>
  );
};

export default WhatIsCareerEpisode;
