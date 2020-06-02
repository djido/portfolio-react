import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const About = (props) => {
    const data = props.portfolioData;

    return (
        <section id="about">
                <div className="about-me">
                    <h2 className="about-me__greeting">{data.greeting}</h2>
                    <p className="about-me__description">{data.about}</p>
                    <div className="icon-container">
                        <a href="https://djido.github.io"><FaGithub className="icon" /></a> <a href="https://www.linkedin.com/in/franjo-%C4%91ido-12732b1ab/"><FaLinkedinIn className="icon" /></a>
                    </div>
                </div>
        </section>
    )
}

export default About;