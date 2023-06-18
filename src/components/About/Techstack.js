import React from "react";
import { Col, Row } from "react-bootstrap";
import { RiVuejsFill,RiHtml5Fill } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  BsFiletypeScss
} from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <RiHtml5Fill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeScss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVuejsFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
