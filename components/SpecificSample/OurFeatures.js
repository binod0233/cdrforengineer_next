import React, { useState, useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import emailjs from "@emailjs/browser";

const OurFeatures = () => {
  const form = useRef();

  const features = [
    {
      image: "/images/SpecificSample/1.png",
      details: "Delivery Before Deadline",
    },
    { image: "/images/SpecificSample/6.png", details: "Affordable Price" },
    {
      image: "/images/SpecificSample/2.png",
      details: "Domain Specific Writers",
    },
    {
      image: "/images/SpecificSample/8.png",
      details: "CDR and RPL Professional",
    },
    { image: "/images/SpecificSample/7.png", details: "24/7 Service" },
    { image: "/images/SpecificSample/9.png", details: "100 % Approval" },
    { image: "/images/SpecificSample/5.png", details: "Experienced Engineers" },
    {
      image: "/images/SpecificSample/4.png",
      details: "Plagiarism free Report",
    },
  ];
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sample, setSample] = useState("");

  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zd7zc21",
        "template_7rs4k0f",
        form.current,
        "UD1lBl5a6755saSKU"
      )
      .then(
        (result) => {
          alert("Email sent.");
          setFullName("");
          setEmail("");
          setPhone("");
        },
        (error) => {
          console.log();
          alert("Sorry something went wrong.");
        }
      );
  };
  return (
    <Container>
      <Row className="py-5">
        <Col md={8} className="">
          <PurpleHeading title="Our Features" />
          <TextParagraph
            content="Our primary goal is to see our client's successful approval with a well-formed 
report following proper guidelines created for the migrants. Here are some of 
the features that we have:"
          />
          <Row className="p-md-3">
            {features.map((f, index) => (
              <Col md={3} key={index} className=" pt-1 d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={f.image}
                    alt={f.details}
                    style={{ height: "100px", width: "100px" }}
                    className="img-fluid"
                  />
                </div>
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
        <Col md={4} className="py-md-4 ">
          <div className="ourFeaturesCard">
            <Form
              ref={form}
              onSubmit={submitFormhandler}
              className="bg-white p-4 mt-md-4 formContainer"
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
      </Row>
    </Container>
  );
};

export default OurFeatures;
