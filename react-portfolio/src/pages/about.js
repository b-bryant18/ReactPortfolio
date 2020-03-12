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
                    
                    <h1>About Me</h1>
                    <p>
                        I recently completed my Full Stack Development Bootcamp at the University of Texas at Austin. I enjoy programming because of how challenging it is. It allows me to utilize critical thinking to find solutions to problems. It's also very rewarding to run code and see my apps come to life. I majored in Business and minored in Economics at Texas A&M University. I graduated in 2018 with a 3.4 cumulative GPA.
                        My background is in Real Estate where I focused on creating online listings, designing eye-catching marketing materials, and closing deals on homes.
                        </p>
                </Row>
            </Container>
        </div>
    );
}

export default About;