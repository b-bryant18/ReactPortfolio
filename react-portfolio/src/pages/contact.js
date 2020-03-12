import React from "react";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";
import { Jumbotron } from "reactstrap";

function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <h2>Location: Austin, TX </h2>
                    <br />
                </Row>
                <Row>
                    <h2>Email: bradleybryant86@gmail.com </h2>
                    <br />
                </Row>
                <Row>
                    <h1>
                    <a href="https://www.linkedin.com/in/bradley-bryant-194929148">LinkedIn</a>
                    </h1>
                    <br />
                </Row>
            </Container>
        </div>
    )
}

export default Contact;