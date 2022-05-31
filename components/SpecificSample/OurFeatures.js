import Chatra from "@chatra/chatra";
import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import PurpleHeading from "../PurpleHeading";

const OurFeatures = () => {
  const features = [
    { image: "", details: "Delivery Before Deadline" },
    { image: "", details: "Affordable Price" },
    { image: "", details: "Domain Specific Writers" },
    { image: "", details: "CDR and RPL Professional" },
    { image: "", details: "24/7 Service" },
    { image: "", details: "100 % Approval" },
    { image: "", details: "Experienced Engineers" },
    { image: "", details: "Plagiarism free Report" },
  ];
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sample, setSample] = useState("");

  const submitFormhandler = (e) => {
    e.preventDefault();
    Chatra("openChat", true);
  };
  return (
    <Container>
      <Row className="p-5">
        <Col md={5} className="p-md-4 ">
          <div className="ourFeaturesCard">
            <Form
              onSubmit={submitFormhandler}
              className="bg-white p-4 formContainer"
            >
              <div className="d-flex flex-column justify-content-center align-items-center my-4">
                <h2>Download CDR Sample</h2>
              </div>

              <Form.Group className="mb-3" controlId="fullName">
                <Form.Control
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inputField"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  className="inputField"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group controlId="contactNumber">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="message">
                <Form.Control
                  className="inputField"
                  style={{ outline: "none" }}
                  as="select"
                  value={sample}
                  onChange={(e) => setSample(e.target.value)}
                >
                  <option>Select a sample</option>
                  <option value="CDR Service">Engineering Manager</option>
                  <option value="Australian Migration">
                    Materials Engineer
                  </option>
                  <option value="Skills Assessment">Cemical Engineer</option>
                </Form.Control>
              </Form.Group>

              <Button
                className="bg-danger mb-5 mt-2 "
                variant="primary"
                type="submit"
                style={{ width: "100%" }}
              >
                Download your Sample
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={7} className="pt-5">
          <PurpleHeading title="Our Features" />
          <Row className="p-md-3">
            {features.map((f, index) => (
              <Col
                md={6}
                key={index}
                className="ps-5 pt-3 d-flex ourFeaturesList"
              >
                <p
                  style={{
                    fontFamily: "Century Gothic",
                    fontSize: "19px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  {f.details}
                </p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default OurFeatures;
