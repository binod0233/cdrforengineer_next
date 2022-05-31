import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

import React from "react";

const ContinuingServices = () => {
  return (
    <Container>
      <PurpleHeading title="Continuing Professional Development Services " />
      <TextParagraph
        family="Arial"
        content="The term CPD refers to Continuing Professional Development, the process of recording, documenting, and  tracking  all  of your  skills, knowledge,  and experience  that  you achieved formally or informally as you work beyond any initial training. CDP is a term used to describe a portfolio documenting your professional development. CPD Report Writing for Engineers Australia is also one of the crucial parts of the CDR writing for Engineers. It shows that the engineer is up to date with knowledge of developments in engineering"
      />
      <Row>
        <img
          src="/images/cpd.png"
          alt="Continuing Professional Development"
        />
      </Row>

      <PurpleHeading title="Want your CPD Report to getAccepted by Engineers Australia (EA)?" />
      <TextParagraph
        family="Arial"
        content="Renowned for the service we provide of CPD report writingin Australia, CDR For Engineer offers help preparing  flawless  CDR  that  Engineers  Australia  will  assess at  a  reasonable  price. Save your time and money by working with us as CDR For Engineer is the best CPD report writing service provider in Australia"
      />
    </Container>
  );
};

export default ContinuingServices;
