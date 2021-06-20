import React from 'react'
import { Row, Col } from "reactstrap";
import Signature from '../assets/img/signature.png'
import Avtar from '../assets/img/avtar.jpg'
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagram} from "react-icons/fa";

const About = () => {
  return (
    <Row className="h-100 m-0 justify-content-center align-items-center overflowY">
      <Col md="10" lg="8" className="bg-ternary p-4">
        <Row className="justify-content-center">
          <Col sm="6" md="5" lg="4" className="p-relative my-4 align-self-center">
            <div className="avtar">
              <img src={Avtar} className="img-fluid"/>
            </div>
            <div className="signature">
              <img src={Signature} className="img-fluid"/>
            </div>
          </Col>
          <Col sm="6" md="7" lg="8" className="p-relative my-4 align-self-center">
            <div className="about-desc">
              <div className="h2">Avinash Aggarwal </div>
              <div className="h3">Web Developer</div>
              <div className="h5">2+ years experienced, dynamic and detail-oriented Full Stack Web Developer. Highly skilled in end-to-end SDLC and effectively developed and enhanced the application for client. Exceptional interpersonal, multitasking and communication abilities to deliver the first-rate results.</div>
              <div className="social-group">
                <a href='https://github.com/avinashkumar906' target="blank">
                  <FaGithubSquare/>
                </a>
                <a href="https://www.facebook.com/rocx.sandy" target="blank">
                  <FaFacebookSquare/>
                </a>
                <a href="https://www.instagram.com/avi_nash906/" target="blank">
                  <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/avinashkumar906/" target="blank">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About
