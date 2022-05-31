import { Container, Row, Col } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";

const FeaturesOfCPD = () => {
  return (
    <Container>
      <PurpleHeading title="What are the features of CPD Report writing for engineers in Australia?" />
      <p
        className="documentsForStageList"
        style={{
          color: "#666666",
          fontSize: "20px",
          fontFamily: "Arial",
        }}
      >
        <strong>Continuing professional development (CPD)</strong> covers the
        following Important Features for developing, mentioning, and documenting
        your professional skills. Key characteristics of good CPDare listed as
        follow:
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        className="px-5 py-3"
      >
        <div style={{ width: "50%" }} className="px-md-5">
          <p
            className="px-md-5 documentsForStageList"
            style={{
              color: "#666666",
              fontSize: "20px",
              fontFamily: "Arial",
            }}
          >
            It should Identify your needs. <br />
            It should reflect your learning.
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <p
            className="px-md-5 documentsForStageList"
            style={{
              color: "#666666",
              fontSize: "20px",
              fontFamily: "Arial",
            }}
          >
            It should plan and carry out development activities.
            <br />
            It should Apply all your learning.
          </p>
        </div>
      </div>
      <p
        className="documentsForStageList"
        style={{
          color: "#666666",
          fontSize: "20px",
          fontFamily: "Arial",
        }}
      >
        Taking care of these mentioned features, <strong>CDR For Engineer</strong>{" "}
        , known forbest CPD Report Writing in Australia,provide high-qualityCPD
        writing services for Engineers Australia. Based on your requirements and
        urgency level before your deadline, we have plans you can choose
        from.Our CPD writing services for Engineers Australia receive 100 %
        Approval
      </p>
    </Container>
  );
};

export default FeaturesOfCPD;
