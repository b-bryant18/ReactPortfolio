import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Picture from "../components/Picture";

function About() {
    return (
        <div>
            <Container>
                <Picture />
                <Row>
                    <div>
                        <br />
                        <h1>About Me</h1>
                        <p>
                            I am a full stack web developer whose primary focus is on React and the user-interface aspect of applications. In my last role, I created online marketing materials and priced real estate properties in the Houston area. I worked with agents to understand what they wanted to convey in their advertisements; From there, I designed and distributed marketing materials that potential clients would be drawn to and could easily understand. I want a programming role that allows me to utilize those skills while also learning new languages and overcoming challenges.
                        </p>
                        <h2 id="school">Education:</h2>
                        <p>The University of Texas at Austin: Full Stack Development Certificate</p>
                        <p>Texas A&M University 2018: Bachelor's of Science in University Studies Business and a minor in Economics</p>
                    </div>

                </Row>
            </Container>
        </div>
    );
}

export default About;