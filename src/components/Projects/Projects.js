import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bpm from "../../Assets/Projects/bpm.png";
import bi from "../../Assets/Projects/bi.png";
import crm from "../../Assets/Projects/crm.png";
import website from "../../Assets/Projects/website.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the work projects I have been involved in and my own side projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bpm}
              x-isBlog={true}
              title="Business Process Management System"
              description="We created a customizable workflow management system that enables businesses to adapt their processes. Our system supports user role and permission configuration for flexible access control. It also includes real-time process monitoring and status display, empowering users to track workflows instantly."
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bi}
              isBlog={true}
              title="Business Intelligence Tool"
              description="We built an interactive data visualization dashboard that streamlines data exploration and analysis. Our system automates data analysis and chart generation, improving processing efficiency and report generation. Through optimized data processing and query performance, we enhance system responsiveness, providing a seamless user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="Customer Relationship Management System"
              description="Custom label management accelerates sales by identifying target customers and uncovering key business opportunities. Our solution also tracks project interactions, streamlining the sales process and enhancing overall efficiency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Dessert E-commerce Website"
              description="I have developed a complete e-commerce website with both front-end and back-end functionalities. The back-end allows store owners to independently add products, view orders, and set up coupons, among other features. On the front-end, the e-commerce website provides customers with a satisfying shopping experience."
              ghLink="https://github.com/lynntuuu/vue-dessert-shop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
