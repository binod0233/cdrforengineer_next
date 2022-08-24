import React, { useState, useRef } from "react";
//sends email using js
import emailjs from "@emailjs/browser";

import { Row, Form, Button } from "react-bootstrap";
import DesignBubble from "./DesignBubble";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { useRouter } from "next/router";
import Chatra from "@chatra/chatra";

const Hero = ({ title, details }) => {
  const form = useRef();
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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
          setMessage("");
        },
        (error) => {
          console.log(error);
          alert("Sorry something went wrong.");
        }
      );
  };
  return (
    <>
      <div className="heroScreen">
        <DesignBubble colour="#8C85F9" top="38rem" left="60px" />
        <DesignBubble colour="yellow" bottom="-44rem" right="-40px" />
        <div className="container px-3 px-md-5 ">
          <Row>
            <div className="text-white mt-md-2 pt-md-5">
              <h1 className="mt-5  text-center">{title}</h1>
              <p className="text-center">{details}</p>
              <Row className="d-flex justify-content-center align-items-center">
                <>
                  <Button
                    style={{
                      background: "#753CAD",
                      width: "fit-content",

                      border: "none",
                    }}
                    // onClick={() => Chatra("openChat", true)}
                  >
                    <div data-id="a454874ff4" className="livechat_button">
                      <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                        Chat with us
                      </a>
                    </div>
                    {/* Chat with us */}
                  </Button>
                  <Button
                    style={{
                      background: "#FA2545",
                      width: "fit-content",
                      marginLeft: "20px",
                      border: "none",
                    }}
                    onClick={() => router.push("/cdr-samples")}
                  >
                    Free CDR Sample
                  </Button>
                </>
              </Row>
              <br />
              <p className="text-center ">
                Or call our writers at
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://api.whatsapp.com/send?phone=61482072510"
                >
                  +61 482 072 510
                </a>
              </p>
            </div>
          </Row>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="formContainerDiv"
          style={{ width: "50%", marginTop: "-200px" }}
          xs={12}
        >
          <Form
            ref={form}
            onSubmit={submitFormhandler}
            className="bg-white p-4 formContainer"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2>Get Free Consultation</h2>
              <h6>Free Consultation from Experts</h6>
            </div>
            <Form.Group
              className="mb-3"
              controlId="sitename"
              style={{ display: "none" }}
            >
              <Form.Control
                placeholder="Site Name"
                value="CDR For Engineer"
                readOnly
                className="inputField"
                name="subject"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullName">
              <Form.Control
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="inputField"
                name="fullName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                className="inputField"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group controlId="contactNumber">
                <PhoneInput
                  className="inputField"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                  name="phone"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Your message"
                value={message}
                className="inputField"
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              />
            </Form.Group>
            <Row className="d-flex align-items-center justify-content-center">
              <Button
                className="formSubmitButton"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Hero;
