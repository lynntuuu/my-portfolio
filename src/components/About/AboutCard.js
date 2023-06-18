import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tu Hsiang-Ling </span>
            from <span className="purple"> Taiwan.</span>
            <br /> Currently, I have 2 years of experience working as a front-end developer specializing in creating SaaS applications within the Software Design Services industry.
            <br />
            Besides coding, I enjoy other activities too!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography & videography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travels
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is liking yourself, liking what you do, and liking how you do it"{" "}
          </p>
          <footer className="blockquote-footer">Maya Angelou</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
