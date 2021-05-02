import React from "react";
import Img from '../images/grandcanyon.jpeg'

class About extends React.Component {
    render() {
        return (
            <>
                <section className="about about-section">
                    <h2>Who Am I</h2>
                    <p>My name is Jason Milton. I'm a freelance Front-End Developer based in Toronto. </p>
                    <p>I am currently taking a Fullstack Web Development course through York University. </p>
                    <p>When I'm not studying or working on my web development skills, I like to explore the city, as well as different parts of the world. </p>
                    <img className="home-img" src={Img} alt="Me sitting on a cliff at the grand canyon" />
                    <p>When I'm not risking my life sitting on the edge of The Grand Canyon, I like to play guitar. I've been playing for about 12 years on and off. I also just started getting into running and I hope to start working out soon. </p>
                </section>
            </>
        );
    }
};

export default About;