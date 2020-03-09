import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Row from "../components/Row";

function About() {
    return (
        <div>
            <Header >
                <h1>Brad Bryant</h1>
                <h2>Full Stack Web Developer</h2>
            </Header>
            <Container>
                {/* <img src={cali} alt = "Me on the USTS Golden Bear" /> */}

                <Row>
                        <h1>About me, Brad Bryant</h1>
                        <p>
                            I'm a Full Stack Developer student at the University of Texas. I enjoy programming because of how challenging it is. It allows me to utilize critical thinking to find solutions to problems. It's also very rewarding to run code and see my apps come to life. I majored in Business and minored in Economics at Texas A&M University. I graduated in 2018 with a 3.4 cumulative GPA.
                            My background is in Real Estate where I focused on creating online listings, designing eye-catching marketing materials, and closing deals on homes.
                        </p>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default About;