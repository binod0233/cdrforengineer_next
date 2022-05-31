import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import DesignBubble from "../DesignBubble";

const Steps = ({ tabItem }) => {
  const [activeElement, setActiveElement] = useState(
    tabItem && tabItem[0].title
  );
  return (
    <div
      className="stepsContainer pb-md-5 pt-md-1"
      style={{
        height: "fit-content",
        overflowX: "hidden",
        background:
          "linear-gradient(90deg,#60269e 0%,#4c1980 35.73%,#360b62 100%)",
      }}
    >
      <DesignBubble colour="#8C85F9" top="15rem" left="-40px" />
      <DesignBubble colour="yellow" bottom="-8rem" right="-40px" />
      <Container>
        <PurpleHeading title="Steps in Preparation of CDR" colour />
        <Row>
          {tabItem &&
            tabItem.length > 0 &&
            tabItem.map((t,i) => (
              <Col key={i} className="d-flex justify-content-center">
                <div
                  className="stepsTitle"
                  style={{
                    borderBottom: "3px solid white",
                    color: "white",
                    width: "fit-content",
                    padding: "0 7px 5px 7px",
                  }}
                  onClick={(e) => setActiveElement(t.title)}
                >
                  {t.title}
                </div>
              </Col>
            ))}
        </Row>
        <div
          className="stepsParagraphContainer"
          style={{
            background: "#753CAD",
            padding: "30px 100px 30px 100px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="stepsParagraph"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: "19px",
              height: "210px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[0]?.title &&
                tabItem[0].description}
              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[1]?.title &&
                tabItem[1].description}

              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[2]?.title &&
                tabItem[2].description}
              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[3]?.title &&
                tabItem[3].description}
              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[4]?.title &&
                tabItem[4].description}

              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[5]?.title &&
                tabItem[5].description}
              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[6]?.title &&
                tabItem[6].description}

              {tabItem &&
                tabItem.length > 0 &&
                activeElement === tabItem[7]?.title &&
                tabItem[7].description}
            </div>
          </div>
        </div>
        <Row className="mt-3 text-white stepsParagraph">
          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[0]?.title &&
            tabItem[0].extraContent}
          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[1]?.title &&
            tabItem[1].extraContent}

          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[2]?.title &&
            tabItem[2].extraContent}
          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[3]?.title &&
            tabItem[3].extraContent}
          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[4]?.title &&
            tabItem[4].extraContent}

          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[5]?.title &&
            tabItem[5].extraContent}
          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[6]?.title &&
            tabItem[6].extraContent}

          {tabItem &&
            tabItem.length > 0 &&
            activeElement === tabItem[7]?.title &&
            tabItem[7].extraContent}
        </Row>
      </Container>
    </div>
  );
};

export default Steps;
