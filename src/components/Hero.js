import React from 'react';
import { Link } from 'react-scroll';
import avatar from '../images/franjo.png';

const Hero = (props) => {
    const data = props.portfolioData;

    return (
        <section id="home">
            <div className="container">
                <div className="intro">
                    <div className="intro__text">
                        <h4 className="intro__greeting">Hello. I'm</h4>
                        <h1 className="intro__primary">{data.profession}</h1>
                        <h2 className="intro__secondary">{data.intro}</h2>
                        <p className="intro__description">{data.desc}</p>
                        <div className="intro__action">
                            <Link
                                className="btn btn-lg btn-primary"
                                to="projects"
                                href="#projects"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}
                            >
                                See my works
                            </Link>
                            <Link
                                className="btn btn-lg btn-outline-primary"
                                to="projects"
                                href="#projects"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                    <div className="intro__avatar">
                        <img className="intro__img" src={avatar} alt="Avatar" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;