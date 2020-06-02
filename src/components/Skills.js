import React from 'react';

const Skills = (props) => {
    const data = props.portfolioData.skills;

    return (
        <section id="skills">
            <div className="container skills">
                <div className="skills__intro">
                <h3 className="skills__heading">My skills</h3>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                </div>
                <div className="skills__container">
                    {data.map(skill => {
                        return <div key={skill} className="skills__skill">{skill}</div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;