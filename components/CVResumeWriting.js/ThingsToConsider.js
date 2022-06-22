import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";

const ThingsToConsider = () => {
  const contentList = [
    {
      title: "1. Personal Details ",
      description: `Personal details include all of your personal information, such as your name, contact information, address, email address, skill details, your 
    capabilities, and all of your successes to date. Personal information in a CDR Cv-Resume should be presented in a clear and appropriate 
    format in order to receive a good assessment from Engineers Australia (EA).`,
    },
    {
      title: "2.	Use of Australian English Language",
      description: `All details and information included in the Cv-Resume Writing for CDR Report should be in the Australian language, in accordance with 
    Engineer Australia's criteria (EA).`,
    },
    {
      title: "3. Insert some keywords",
      description: `Don't forget to include all of the keywords that clearly identify you, as well as your profession and job function.`,
    },
    {
      title: "4. Mention all your professional career",
      description: `One should need to create a positive impression for getting a positive Assessment from Engineers Australia (EA). So one should mention all of 
    their professional career achievements details in a very precise format to make a positive impression.`,
    },
    {
      title: "5. Academic achievements ",
      description: `Your educational details and information are essential in expressing your ambitions and interests in the engineering field. Along with your academic achievements, list any courses and extracurricular activities you participated in to further your knowledge.`,
    },
    {
      title: "6. Do not mention irrelevant information ",
      description: `Avoid unnecessary details and only state what Engineers Australia (EA) is looking for and what is needed. Submission of irrelevant information will result in rejection.`,
    },
    {
      title: "7. Information on your Project list ",
      description: `It would help if you were required to describe all of your project's work in detail so that assessors may adequately evaluate your talents. And if you are inactive in your work, you should explain a valid reason for your absence.`,
    },
    {
      title: "8. Take help from Professional Cv-resume writing services",
      description: `A perfect CDR Cv-Resume writing Report plays a crucial function in gaining 100 % Approval from Engineers Australia (EA), so do not take it for granted. It will help if you support expert cv-resume writing services when applying for your skill Assessment. CDR For Engineer, also known for Professional Cv-resume writing services in Australia, can assist you in generating a High-Quality CV-Resume report at a very reasonable price.`,
    },
    {
      title: "9. Make it 100 % professional",
      description: `Your CDR Cv-Resume writing Report should be correct; if your curriculum vitae (CV)-Resume is in the proper setup, you will have the best chance of acceptance. We have already written a high-Quality CDR Cv-Resume Report. So, you may rely on us. Our Professional writers from an 
      engineering background with years of Experience in CDR writing make us the best cv-Resume writingservice provider in Australia.`,
    },
    {
      title: "10. Additional Details",
      description: `Along with all of this information, don't forget to include your resident status, language ability, computer abilities, community work, hobbies and interests, and professional organisations.`,
    },
  ];
  return (
    <Container>
      <PurpleHeading title="Things to consider while writing a best CDR CV Resume Report" />
      <Row className="py-4">
        {contentList.map((c,i) => (
          <div key={i}>
            <strong
              className="thingsToConsiderTitle"
              style={{
                color: "#FA2545",
                fontFamily: "Century Gothic",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              {c.title}
            </strong>
            <br />
            <p
              className="documentsForStageList"
              style={{ marginLeft: "20px", fontSize: "20px" }}
            >
              {c.description}
            </p>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ThingsToConsider;
