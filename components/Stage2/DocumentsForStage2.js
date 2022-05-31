import React from "react";
import { Container } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const DocumentsForStage2 = () => {
  return (
    <Container>
      <PurpleHeading title="Documents  needed   for Stage  2   Competency   Assessment   for   Engineers Australia" />
      <TextParagraph
        content="Are you curious to know all the Documents needed for the Stage 2 Competency Assessment for Engineers Australia?"
        family="Arial"
      />
      <TextParagraph
        content="After selecting the E-chartered  pathway, all  the  students  or  Applicants should go  through  a documentation  process  to  be  eligible  for Chartered  professional  engineer CPEng or get  a chartered recognised status.  Here  we  help  you!  Experienced  writers  from  an  engineering background  with  years  of  experience  in  CDR  make  us  the  best  stage  2  Competency Assessment service provider in Australia. Our professional writers will assist you in the stage 2 competency Assessment process for getting your immigration visa to Australia"
        family="Arial"
      />
      <TextParagraph
        content="Here are all the primary submission documents needed for Stage 2 Competency Assessment for Engineers Australia for chartered professional engineer 
        registration:"
        family="Arial"
      />
      <p
        className="documentsForStageList"
        style={{
          color: "#666666",
          fontFamily: "Arial",
        }}
      >
        <strong>
          <br />
          1) Engineering competency claims (ECCs)
          <br />
          2) Engineering Experience Record (EER)
          <br />
          3) Continuing professional development (CPD) Record
          <br />
          4) Updated Cv or Resume
          <br />
        </strong>
      </p>
    </Container>
  );
};

export default DocumentsForStage2;
