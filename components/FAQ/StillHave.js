import React from "react";
import { Container, Row, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const StillHave = () => {
  const router = useRouter();
  return (
    <div style={{ background: "#F8F8F8" }}>
      {" "}
      <Container className="pt-5 pb-5">
        <h1 className="CDRReportAcceptedHeading" style={{ color: "#370C64" }}>
          Still have a questions?
        </h1>
        <p className="CDRReportAcceptParagraph" style={{ color: "#666666" }}>
          If you cannot find answer to your question in our FAQ, you can always
          contact us. We will answer to you shortly!
        </p>
        <Row className="d-flex justify-content-center">
          <Button
            className="CDRReportAcceptButton"
            style={{
              width: "fit-content",
              color: "white",
              padding: "4px 20px",
              background: "#FA2545",
              border: "none",
              fontSize: "20px",
              marginBottom: "20px",
            }}
            onClick={() => {
              router.push("/contactus");
            }}
          >
            Contact us
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default StillHave;
