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
                    <h2>
                    <img id = "Location" alt="Location pin" src = {Pin} />
                        Location: Austin, TX </h2>
                    <br />
                </Row>
                <Row>
                    <h2>
                        <img className = "circle" alt = "Letter graphic" src ={Mail} />
                        Email: bradleybryant86@gmail.com </h2>
                    <br />
                </Row>
                <Row>
                    <h1>
                     <img className="circle" alt = "LinkedIn Logo" src = {LinkedIn} />
                        <a href="https://www.linkedin.com/in/bradley-bryant-194929148">LinkedIn</a>
                    </h1>
                    <br />
                </Row>
            </Container>
        </div>
    )
}

export default Contact;