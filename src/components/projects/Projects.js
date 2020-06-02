import React from 'react';
import Project from './Project';

const Projects = (props) => {
    const data = props.portfolioData;

    return (
        <section id="projects">
            <div className="container">
                <h3 className="projects-title">Recent projects</h3>
                {data.projects.map(project => <Project
                        key={project.id}
                        {...project} /> )}
            </div>
        </section>
    );
}

export default Projects;