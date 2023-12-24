import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/desk.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-md-center">
            <Col md={6} className="home-header" style={{ textAlign: "left" }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" >
                I'M <strong className="main-name"> Shuhai Yu</strong>
              </h1>

              <div style={{ padding: 50}}>
                <Type />
              </div>
            </Col>

            <Col md={6} style={{ paddingBottom: 20, display: "flex", justifyContent: "center" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
