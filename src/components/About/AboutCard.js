import React from "react";
import Card from "react-bootstrap/Card";
import { GiAncientSword } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineCardTravel } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Shuhai Yu</span> from Melbourne, VIC, Australia.
            <br /> I'm currently pursuing a Master of Information Technology at Monash University.
            <br />
            In addition, I obtained my Bachelor of Civil Engineering (Hons) from RMIT University and studied Project Management and Engineering Contracts at Tongji University in Shanghai.
            <br />
            I am passionate about software development and I am always eager to learn new technologies.
            <br />
            <br />
            In my leisure, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <GiAncientSword /> Games
            </li>
            <li className="about-activity">
              <IoBookSharp /> Reading books
            </li>
            <li className="about-activity">
              <MdOutlineCardTravel /> Travelling
            </li>
          </ul>

          <p style={{ color: "#6db1ff" }}>
            "Striving to build innovative solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shuhai Yu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
