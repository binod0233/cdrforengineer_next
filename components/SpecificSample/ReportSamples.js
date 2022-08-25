import React, { useState } from "react";
import { Container, Row } from "react-bootstrap"; // import PurpleHeading from "../PurpleHeading";
// import TextParagraph from "../TextParagraph";
import FancyTabs from "../FancyTabs";
import parse from "html-react-parser";

const ReportSamples = ({ fancySteps, data }) => {
  const [activeTitle, setActiveTitle] = useState(data[0]?.title);

  return (
    <Container>
      {fancySteps && fancySteps.length > 0 && <FancyTabs data={fancySteps} />}
      {data && (
        <Row
          className="ps-0  bg-white my-5"
          style={{ fontSize: "18px", fontFamily: "Arial", fontWeight: "400" }}
        >
          <div
            className="fancyTabsContainer"
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "-20px",
              marginBottom: "40px",
              marginLeft: "-20px",
            }}
          >
            {data.map((d, index) => (
              <div
                key={d?.id}
                className="p-2 mx-2 tabContainer"
                style={{
                  background:
                    activeTitle === data[index]?.title ? "white" : "#390D66",
                  color:
                    activeTitle === data[index]?.title ? "#390D66" : "white",
                  borderRadius: "10px",
                }}
                onClick={(e) => setActiveTitle(d?.title)}
              >
                {d?.title}
              </div>
            ))}
          </div>

          <p className="mb-5 ps-5 fancyTabsData">
            {activeTitle === data[0]?.title && parse(data[0].paragraph)}
            {activeTitle === data[1]?.title && parse(data[1].paragraph)}
            {activeTitle === data[2]?.title && parse(data[2].paragraph)}
            {activeTitle === data[3]?.title && parse(data[3].paragraph)}
            {activeTitle === data[4]?.title && parse(data[4].paragraph)}
          </p>
        </Row>
      )}
    </Container>
  );
};

export default ReportSamples;
