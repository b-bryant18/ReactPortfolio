import React from "react";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
    return (
        <div>
                <Container>
                    <Row>
                        <Col>
                            <form>
                                <label>Name:
            <input type="text" name="name" />
                                </label>
                                <label>Subject:
            <input type="text" name="name" />
                                </label>
                                <label>Message:
            <input type="text" name="name" />
                                </label>
                                <button type="submit">
                                Submit
                                </button>
                            </form>
                           <Footer />
                        </Col>
                    </Row>
                </Container>
                </div>
            )
        }
        
export default Contact;