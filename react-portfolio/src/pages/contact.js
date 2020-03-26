import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Pin from "./pin.png";
import Mail from "./mail.png";
import LinkedIn from "./linkedinIcon.png";
import "./style.css";

function Contact() {
    return (
        <div>
            <Container>
                <Row>
                   
                        <img id="Location" alt="Location pin" src={Pin} />
                        <h2> Location: Austin, TX </h2>
                    <br />
                </Row>
                <Row>

                    <img className="circle" alt="Letter graphic" src={Mail} />
                    <h2 style={{ marginLeft: "10px" }}> bradleybryant86@gmail.com </h2>
                    <br />
                </Row>
                <Row>

                    <img className="circle" alt="LinkedIn Logo" src={LinkedIn} />
                    <h2 style={{ marginLeft: "10px" }}> <a href="https://www.linkedin.com/in/bradley-bryant-194929148">LinkedIn</a>
                    </h2>
                    <br />
                </Row>
            </Container>
        </div>
    )
}

export default Contact;