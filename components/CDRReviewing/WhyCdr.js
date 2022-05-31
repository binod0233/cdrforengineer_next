import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

const WhyCdr = () => {
  const contentData = [
    `CDR For Engineer is the top CDR reviewing agency in Australia. We have professional writers to write and review your CDR report and correct different kinds of mistakes inyour CDR report.`,
    `We can help Engineers to write and review CDR based on their academic project and training if in case they do not have any prior working experience`,
    `We know all the guidelines and requirements of Engineers Australia. We are result-oriented and known as the best CDR reviewing consultant in Australia`,
    `We  provide  you an original  CDR  Report  with no  plagiarism  error as we always say “No” to plagiarism errors. To know more about how the CDR Reviewing service provider in Australia. We can help you get instant help from our professional writer`,
  ];
  return (
    <Container>
      <PurpleHeading title="Why choose CDR For Engineer for Best CDR Reviewing service?" />
      <TextParagraph
        content="It is true that you can’t find out your own mistake by yourself. So, having others review your CDR can reveal the errors and problems of your report. CDR For Engineer can save your CDR report from getting rejected by  EA. Our excellent professional  writers deliver high-quality CDR foreigneers  willing  to  migrate  to Australia. Our Experienced  professional  writers  work  on  the  CDR  reviewing  process to  ensure  all  the information provided by you is mentioned in your CDR in a perfect and acceptable format
"
        family="Arial"
      />
      <TextParagraph
        content="You can rely on us for all your High-quality CDR report writing and reviewing services in Australia. Our features are as follow"
        family="Arial"
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {contentData.map((c,i) => (
          <div key={i} style={{ display: "flex" }}>
            <div style={{ flex: "0.1" }}>
              {" "}
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: "auto",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="/images/exp-small.png"
                  alt="Rely on us for all your High-quality CDR report"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div style={{ flex: "0.9" }}>
              <p
                className="documentsForStageList"
                style={{
                  color: "#666666",
                  fontSize: "18px",
                  fontFamily: "Arial",
                }}
              >
                {c}
              </p>
            </div>
          </div>
        ))}
      </div>

      <PurpleHeading title="Reasons for getting CDR Rejected by Engineers in Australia?" />
      <TextParagraph
        content="Many Applicants write their CDR by themselves and submit it to Engineers Australia. There is  a  high  chance  to  commit  mistakes  in  writing  a  CDR. If  CDR  does  not  follow  definite guidelines,  rules,  and  regulations  imposed  by  Engineers  Australia,  then  the  CDR  gets rejected. CDR  of  many  engineers  pursuing  a  career  in  Australia  gets rejected from Engineers Australia every year.
 "
        family="Arial"
      />
      <TextParagraph
        content="The  EA  imposes  definite  guidelines,  rules,  and  regulations  that  the  applicants  need  to follow strictly. Once engineers in Australia reject your CDR, you might be banned for 12 months  or get  a  second  chance  to  resubmit.  Once  they suspect  that  the  presented competency report is not yours, they may demand your original projects report, which is used to write three career episodes. You have to produce it, or your application will be rejected permanently.
 "
        family="Arial"
      />

      <TextParagraph
        content="If  proper  rulings  are  not followed  in  writing  the  CDR  report,  the  applications will get rejected  by  the  Engineers  Australia’s team. CDR For Engineer  is  renowned  as the best  CDR reviewing  service  provider.  We  pay  special  attention  to  all  factors  such  as  unsuitable format,  a  lack  of  sufficient  technical  details,  the  word  limit  in  the  career  episode,  the relationship between the career episode and  the career episode summary statement, and unneeded and irrelevant material. Our skilled team ensures high-quality CDR reports
 "
        family="Arial"
      />

      <TextParagraph
        content="If you are an  engineering applicant searching for the right way to write a CDR Report, we  will  help  you explore  all  the  steps  to  take  care of while writing a CDR Reportfor Engineers Australia.
 "
        family="Arial"
      />
    </Container>
  );
};

export default WhyCdr;
