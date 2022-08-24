import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import "../../styles/componentStyles.module.css";
import parse from "html-react-parser";
const OurReports = ({ data }) => {
  const { trackRecord, title } = data;

  return (
    <Container>
      <PurpleHeading title={title} />
      <Row className="my-2 my-md-5">
        {trackRecord.map((item, index) => (
          <Col key={index} md={4} sm={12} className="p-3 my-md-5 my-3">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1.5px solid black",
                padding: "40px 20px 20px 20px",
                height: "220px",
                borderRadius: "10px",
                position: "relative",
                zIndex: "-1",
              }}
            >
              <div
                className="position-absolute "
                style={{
                  height: "80px",
                  width: "80px",
                  marginTop: "-250px",
                  background: "#FA2545",
                  borderRadius: "100%",
                  padding: "20px",
                }}
              >
                <img
                  src={item.image?.data?.attributes?.url}
                  alt="Client"
                  style={{ objectFit: "contain" }}
                  className="img-fluid"
                />
              </div>
              <div>
                <h5 className="text-center">{item?.title}</h5>
                <p className="text-center">
                  {item?.paragraph && parse(item.paragraph)}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurReports;
